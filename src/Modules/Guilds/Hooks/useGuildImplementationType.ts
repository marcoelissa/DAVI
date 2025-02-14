import { useEffect, useMemo, useState } from 'react';
import { useNetwork, useProvider } from 'wagmi';
import { SHA256, enc } from 'crypto-js';
import { GuildImplementationType } from 'types/types.guilds.d';
import deployedHashedBytecodes from 'bytecodes/prod.json';
import deployedHashedBytecodesLocal from 'bytecodes/local.json';
import { LOCALHOST_ID } from 'utils';

const defaultImplementation = deployedHashedBytecodes.find(
  ({ type }) => type === GuildImplementationType.IERC20Guild
) ?? {
  type: GuildImplementationType.IERC20Guild,
  features: [],
  bytecode_hash: '',
};

interface ImplementationTypeConfig {
  type: string;
  features: string[];
  bytecode_hash: string;
}

interface ImplementationTypeConfigReturn extends ImplementationTypeConfig {
  isRepGuild: boolean;
  isSnapshotGuild: boolean;
  loaded?: boolean;
}
const parseConfig = (
  config: ImplementationTypeConfig
): ImplementationTypeConfigReturn => {
  return {
    ...config,
    isRepGuild: config.features.includes('REP'),
    isSnapshotGuild: config.features.includes('SNAPSHOT'),
  };
};

/**
 * @function useGuildImplementationType
 * @param {string} guildAddress
 * @returns {ImplementationTypeConfigReturn}
 */
export default function useGuildImplementationTypeConfig(
  guildAddress: string
): ImplementationTypeConfigReturn {
  const { chain } = useNetwork();
  const isLocalhost = useMemo(() => chain?.id === LOCALHOST_ID, [chain]);

  const [guildBytecode, setGuildBytecode] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);
  const provider = useProvider();
  useEffect(() => {
    const getBytecode = async () => {
      const localBtcode = localStorage.getItem(
        `hashed-bytecode-${guildAddress}`
      );
      if (!localBtcode) {
        const btcode = await provider.getCode(guildAddress);
        const hashedBytecode = `0x${SHA256(btcode).toString(enc.Hex)}`;
        setGuildBytecode(hashedBytecode);
        localStorage.setItem(`hashed-bytecode-${guildAddress}`, hashedBytecode);
        setLoaded(true);
        return;
      }
      setGuildBytecode(localBtcode);
      setLoaded(true);
    };
    getBytecode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guildAddress]);

  const implementationTypeConfig: ImplementationTypeConfig = useMemo(() => {
    if (!guildBytecode) return defaultImplementation;

    const match = (
      isLocalhost ? deployedHashedBytecodesLocal : deployedHashedBytecodes
    ).find(({ bytecode_hash }) => guildBytecode === bytecode_hash);

    return match ?? defaultImplementation; // default to IERC20Guild
  }, [guildBytecode, isLocalhost]);

  return { ...parseConfig(implementationTypeConfig), loaded };
}
