export const SnapshotRepERC20Guild = {
  _format: 'hh-sol-artifact-1',
  contractName: 'SnapshotRepERC20Guild',
  sourceName:
    'dxdao-contracts/contracts/erc20guild/implementations/SnapshotRepERC20Guild.sol',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newState',
          type: 'uint256',
        },
      ],
      name: 'ProposalStateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'TokensLocked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'TokensWithdrawn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
      ],
      name: 'VoteAdded',
      type: 'event',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      inputs: [],
      name: 'MAX_OPTIONS_PER_PROPOSAL',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'activeProposalsNow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'to',
          type: 'address[]',
        },
        {
          internalType: 'bytes[]',
          name: 'data',
          type: 'bytes[]',
        },
        {
          internalType: 'uint256[]',
          name: 'value',
          type: 'uint256[]',
        },
        {
          internalType: 'uint256',
          name: 'totalOptions',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'contentHash',
          type: 'string',
        },
      ],
      name: 'createProposal',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
      ],
      name: 'endProposal',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getActiveProposalsNow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLockTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMaxActiveProposals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMaxGasPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMinimumMembersForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMinimumTokensLockedForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getName',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPermissionRegistry',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
      ],
      name: 'getProposal',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'creator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'startTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endTime',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'to',
              type: 'address[]',
            },
            {
              internalType: 'bytes[]',
              name: 'data',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256[]',
              name: 'value',
              type: 'uint256[]',
            },
            {
              internalType: 'string',
              name: 'title',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'contentHash',
              type: 'string',
            },
            {
              internalType: 'enum BaseERC20Guild.ProposalState',
              name: 'state',
              type: 'uint8',
            },
            {
              internalType: 'uint256[]',
              name: 'totalVotes',
              type: 'uint256[]',
            },
          ],
          internalType: 'struct BaseERC20Guild.Proposal',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
      ],
      name: 'getProposalSnapshotId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getProposalTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getProposalVotesOfVoter',
      outputs: [
        {
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getProposalsIds',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getProposalsIdsLength',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'signedVoteHash',
          type: 'bytes32',
        },
      ],
      name: 'getSignedVote',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
      ],
      name: 'getSnapshotVotingPowerForProposalExecution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTimeForExecution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getToken',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTokenVault',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTotalLocked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTotalMembers',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTotalProposals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getVoteGas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getVoterLockTimestamp',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getVotingPowerForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getVotingPowerForProposalExecution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
      ],
      name: 'hashVote',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_token',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_proposalTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_timeForExecution',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_votingPowerPercentageForProposalExecution',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_votingPowerPercentageForProposalCreation',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_voteGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxGasPrice',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxActiveProposals',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_lockTime',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_permissionRegistry',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lockTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'lockTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxActiveProposals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxGasPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minimumMembersForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minimumTokensLockedForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proposalTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'proposalVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'proposals',
      outputs: [
        {
          internalType: 'address',
          name: 'creator',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'startTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endTime',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'title',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'contentHash',
          type: 'string',
        },
        {
          internalType: 'enum BaseERC20Guild.ProposalState',
          name: 'state',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'proposalsIds',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'proposalsSnapshots',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_proposalTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_timeForExecution',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_votingPowerPercentageForProposalExecution',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_votingPowerPercentageForProposalCreation',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_voteGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxGasPrice',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_maxActiveProposals',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_lockTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_minimumMembersForProposalCreation',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_minimumTokensLockedForProposalCreation',
          type: 'uint256',
        },
      ],
      name: 'setConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'setSignedVote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'proposalId',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'option',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'votingPower',
          type: 'uint256',
        },
      ],
      name: 'setVote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'signedVotes',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'timeForExecution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'contract IERC20Upgradeable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'tokenVault',
      outputs: [
        {
          internalType: 'contract TokenVault',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'tokensLocked',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalLocked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalProposals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voteGas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'votingPowerOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'snapshotId',
          type: 'uint256',
        },
      ],
      name: 'votingPowerOfAt',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'accounts',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'snapshotIds',
          type: 'uint256[]',
        },
      ],
      name: 'votingPowerOfMultipleAt',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'votingPowerPercentageForProposalCreation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'votingPowerPercentageForProposalExecution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'withdrawTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ] as const,
  bytecode:
    '0x608060405234801561001057600080fd5b50615416806100206000396000f3fe608060405260043610620003e55760003560e01c80636c8b72f61162000203578063b3929aaa1162000117578063e158080a11620000a7578063f98606a71162000075578063f98606a71462000bec578063f9a92d821462000c04578063fc0c546a1462000c29578063fc4e703f1462000c4b57005b8063e158080a1462000b54578063f09951981462000b6c578063f2fde38b1462000baf578063f4732da61462000bd457005b8063c0a4d64d11620000e5578063c0a4d64d1462000ae9578063c93e01e31462000b00578063d8c6a6d11462000b17578063e04503531462000b3c57005b8063b3929aaa1462000a63578063b3b470611462000a88578063b7c15f8d1462000aad578063bcc3f3bd1462000ac457005b80638f1803051162000193578063a7aeb5571162000161578063a7aeb55714620009e8578063ad6c1e341462000a00578063adf2c7b61462000a17578063ae6192341462000a4b57005b80638f180305146200097457806392b71654146200098b578063a16fe34214620009b0578063a78d80fc14620009d057005b806377027ff411620001d157806377027ff414620008f25780638029eff1146200090957806389c98c06146200093d5780638da5cb5b146200095457005b80636c8b72f614620008925780636e27d889146200070a578063715018a614620008a95780637189354614620008c157005b806325c069fc11620002fb5780633de39c11116200028b5780635689141211620002595780635689141214620008295780635bc789d914620008415780635e508c2c146200086357806364fe6ed2146200087b57005b80633de39c1114620007a55780633f10cf1514620007bd578063430694cf14620007d557806354f2f7af146200080957005b8063315a095d11620002c9578063315a095d146200070a57806332ed5b12146200072f57806336f8f8d914620007685780633bf353fb146200078d57005b806325c069fc14620006395780632d5b17de14620006635780632d757c3e14620006885780632fd99c0014620006c557005b806316bbecde116200037757806321df0da7116200034557806321df0da714620005a65780632229a0e214620005da57806322bafdff14620005f15780632467ef94146200062257005b806316bbecde146200053a57806317d7de7c146200055f578063184a0ae914620005775780631a5007dd146200058f57005b80630d66808711620003b55780630d66808714620004b3578063123f6d6714620004cb578063130485fe14620004f057806313108d74146200051557005b80623a40d014620003e757806301a598a6146200041757806306fdde0314620004655780630a366a63146200048c575b005b348015620003f457600080fd5b50620003ff62000c63565b6040516200040e919062003d1e565b60405180910390f35b3480156200042457600080fd5b506200044f6200043636600462003d81565b6012602052600090815260409020805460019091015482565b604080519283526020830191909152016200040e565b3480156200047257600080fd5b506200047d62000cbd565b6040516200040e919062003def565b3480156200049957600080fd5b50620004a462000d53565b6040519081526020016200040e565b348015620004c057600080fd5b50620004a4600d5481565b348015620004d857600080fd5b50620003e5620004ea36600462003e04565b62000d80565b348015620004fd57600080fd5b506200044f6200050f36600462003e6d565b62000f19565b3480156200052257600080fd5b50620004a4620005343660046200410a565b62000f4b565b3480156200054757600080fd5b50620003e562000559366004620041f4565b62001002565b3480156200056c57600080fd5b506200047d62001133565b3480156200058457600080fd5b50620004a460035481565b3480156200059c57600080fd5b50600a54620004a4565b348015620005b357600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020016200040e565b348015620005e757600080fd5b50601654620004a4565b348015620005fe57600080fd5b50620004a46200061036600462004221565b6000908152607c602052604090205490565b3480156200062f57600080fd5b50600c54620004a4565b3480156200064657600080fd5b5062000650600a81565b60405160ff90911681526020016200040e565b3480156200067057600080fd5b50620003e5620006823660046200423b565b620011c4565b3480156200069557600080fd5b50620004a4620006a736600462003d81565b6001600160a01b031660009081526012602052604090206001015490565b348015620006d257600080fd5b50620006f9620006e436600462004221565b60136020526000908152604090205460ff1681565b60405190151581526020016200040e565b3480156200071757600080fd5b50620003e56200072936600462004221565b620014b7565b3480156200073c57600080fd5b50620007546200074e36600462004221565b62001514565b6040516200040e96959493929190620042e5565b3480156200077557600080fd5b50620003e56200078736600462004345565b62001678565b3480156200079a57600080fd5b50620004a4600c5481565b348015620007b257600080fd5b50620004a460085481565b348015620007ca57600080fd5b50620004a460045481565b348015620007e257600080fd5b50620007fa620007f436600462004221565b62001860565b6040516200040e9190620044cd565b3480156200081657600080fd5b506011546001600160a01b0316620005c1565b3480156200083657600080fd5b50620004a4600e5481565b3480156200084e57600080fd5b50601154620005c1906001600160a01b031681565b3480156200087057600080fd5b50620004a460055481565b3480156200088857600080fd5b50601054620004a4565b3480156200089f57600080fd5b50600754620004a4565b348015620008b657600080fd5b50620003e562001c13565b348015620008ce57600080fd5b50620004a4620008e036600462004221565b607c6020526000908152604090205481565b348015620008ff57600080fd5b50600954620004a4565b3480156200091657600080fd5b50620006f96200092836600462004221565b60009081526013602052604090205460ff1690565b3480156200094a57600080fd5b50600854620004a4565b3480156200096157600080fd5b50604a546001600160a01b0316620005c1565b3480156200098157600080fd5b50600b54620004a4565b3480156200099857600080fd5b50620004a4620009aa366004620045da565b62001c7d565b348015620009bd57600080fd5b506001546001600160a01b0316620005c1565b348015620009dd57600080fd5b50620004a4600a5481565b348015620009f557600080fd5b50620004a4600f5481565b34801562000a0d57600080fd5b50600f54620004a4565b34801562000a2457600080fd5b5062000a3c62000a3636600462004616565b62001cd4565b6040516200040e919062004681565b34801562000a5857600080fd5b50620004a462001db0565b34801562000a7057600080fd5b50620004a462000a8236600462004221565b62001dca565b34801562000a9557600080fd5b50620003e562000aa736600462004221565b62001dec565b34801562000aba57600080fd5b50600454620004a4565b34801562000ad157600080fd5b50620004a462000ae336600462003d81565b6200275c565b34801562000af657600080fd5b50600d54620004a4565b34801562000b0d57600080fd5b50600354620004a4565b34801562000b2457600080fd5b50620004a462000b3636600462004221565b620027e4565b34801562000b4957600080fd5b50620004a460095481565b34801562000b6157600080fd5b50620004a460105481565b34801562000b7957600080fd5b506200044f62000b8b36600462003e6d565b60146020908152600092835260408084209091529082529020805460019091015482565b34801562000bbc57600080fd5b50620003e562000bce36600462003d81565b62002893565b34801562000be157600080fd5b50620004a462002964565b34801562000bf957600080fd5b50620004a460065481565b34801562000c1157600080fd5b50620004a462000c2336600462004696565b620029ef565b34801562000c3657600080fd5b50600054620005c1906001600160a01b031681565b34801562000c5857600080fd5b50620004a460075481565b6060601680548060200260200160405190810160405280929190818152602001828054801562000cb357602002820191906000526020600020905b81548152602001906001019080831162000c9e575b5050505050905090565b6002805462000ccc90620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462000cfa90620046c3565b801562000d4b5780601f1062000d1f5761010080835404028352916020019162000d4b565b820191906000526020600020905b81548152906001019060200180831162000d2d57829003601f168201915b505050505081565b600062000d7b61271062000d7460065462000d6d62002964565b9062002a7f565b9062002a8d565b905090565b33301462000e065760405162461bcd60e51b815260206004820152604260248201527f45524332304775696c643a204f6e6c792063616c6c61626c652062792045524360448201527f32306775696c6420697473656c66206f72207768656e20696e697469616c697a606482015261195960f21b608482015260a4015b60405180910390fd5b60008a1162000e295760405162461bcd60e51b815260040162000dfd9062004700565b8983101562000e4c5760405162461bcd60e51b815260040162000dfd906200474f565b6000881162000e6f5760405162461bcd60e51b815260040162000dfd90620047ac565b6201c90886111562000eea5760405162461bcd60e51b815260206004820152603960248201527f45524332304775696c643a20766f7465206761732068617320746f206265206560448201527f7175616c206f72206c6f776572207468616e2031313730303000000000000000606482015260840162000dfd565b600399909955600497909755600595909555600693909355600791909155600855600955600d55600f55601055565b60008281526014602090815260408083206001600160a01b0385168452909152902080546001909101545b9250929050565b60008062000f5e88888888888862002a9b565b905060008054906101000a90046001600160a01b03166001600160a01b0316635439ad866040518163ffffffff1660e01b815260040160206040518083038186803b15801562000fad57600080fd5b505afa15801562000fc2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000fe8919062004809565b6000828152607c6020526040902055979650505050505050565b6000838152601560205260409020600201544210620010355760405162461bcd60e51b815260040162000dfd9062004823565b6000838152607c6020526040902054819062001053903390620029ef565b1015620010745760405162461bcd60e51b815260040162000dfd9062004879565b6000838152601460209081526040808320338452909152902054158015620010b657506000838152601460209081526040808320338452909152902060010154155b80620011015750600083815260146020908152604080832033845290915290205482148015620011015750600083815260146020908152604080832033845290915290206001015481115b620011205760405162461bcd60e51b815260040162000dfd90620048ca565b6200112e3384848462003082565b505050565b6060600280546200114490620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200117290620046c3565b801562000cb35780601f10620011975761010080835404028352916020019162000cb3565b820191906000526020600020905b815481529060010190602001808311620011a557509395945050505050565b6000858152601560205260409020600201544210620011f75760405162461bcd60e51b815260040162000dfd9062004823565b6000620012078387878762001c7d565b60008181526013602052604090205490915060ff1615620012775760405162461bcd60e51b8152602060048201526024808201527f536e617073686f7452657045524332304775696c643a20416c726561647920766044820152631bdd195960e21b606482015260840162000dfd565b620012db82620012d4836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90620032e3565b6001600160a01b0316836001600160a01b031614620013495760405162461bcd60e51b815260206004820152602360248201527f536e617073686f7452657045524332304775696c643a2057726f6e67207369676044820152623732b960e91b606482015260840162000dfd565b6000818152601360209081526040808320805460ff19166001179055888352607c90915290205484906200137f908590620029ef565b10158015620013b2575060008681526014602090815260408083206001600160a01b038716845290915290206001015484115b620013d15760405162461bcd60e51b815260040162000dfd9062004879565b60008681526014602090815260408083206001600160a01b038716845290915290205415801562001425575060008681526014602090815260408083206001600160a01b0387168452909152902060010154155b8062001482575060008681526014602090815260408083206001600160a01b03871684529091529020548514801562001482575060008681526014602090815260408083206001600160a01b038716845290915290206001015484115b620014a15760405162461bcd60e51b815260040162000dfd90620048ca565b620014af8387878762003082565b505050505050565b60405162461bcd60e51b815260206004820152602b60248201527f536e617073686f7452657045524332304775696c643a20746f6b656e2076617560448201526a1b1d08191a5cd8589b195960aa1b606482015260840162000dfd565b60156020526000908152604090208054600182015460028301546006840180546001600160a01b039094169492939192916200155090620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200157e90620046c3565b8015620015cf5780601f10620015a357610100808354040283529160200191620015cf565b820191906000526020600020905b815481529060010190602001808311620015b157829003601f168201915b505050505090806007018054620015e690620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200161490620046c3565b8015620016655780601f10620016395761010080835404028352916020019162001665565b820191906000526020600020905b8154815290600101906020018083116200164757829003601f168201915b5050506008909301549192505060ff1686565b60175462010000900460ff1680620016985750601754610100900460ff16155b620016b75760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff16158015620016dd576017805462ffff001916620101001790555b620016e762003303565b620016fc8c8c8c8c8c8c8c8c8c8c8c62003392565b600160009054906101000a90046001600160a01b03166001600160a01b0316636cfe0489308e7f40c10f19c047ae7dfa66d6312b683d2ea3dfbcb4159e96b967c5f4b0a86f2842600060016040518663ffffffff1660e01b8152600401620017699594939291906200498a565b600060405180830381600087803b1580156200178457600080fd5b505af115801562001799573d6000803e3d6000fd5b50505050600160009054906101000a90046001600160a01b03166001600160a01b0316636cfe0489308e7f9dc29fac0ba6d4fc521c69c2b0c636d612e3343bc39ed934429b8876b0d12cba600060016040518663ffffffff1660e01b81526004016200180a9594939291906200498a565b600060405180830381600087803b1580156200182557600080fd5b505af11580156200183a573d6000803e3d6000fd5b50505050801562001852576017805462ff0000191690555b505050505050505050505050565b6200186a62003aa5565b60008281526015602090815260409182902082516101408101845281546001600160a01b031681526001820154818401526002820154818501526003820180548551818602810186019096528086529194929360608601939290830182828015620018ff57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620018e0575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015620019e35783829060005260206000200180546200194f90620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200197d90620046c3565b8015620019ce5780601f10620019a257610100808354040283529160200191620019ce565b820191906000526020600020905b815481529060010190602001808311620019b057829003601f168201915b5050505050815260200190600101906200192d565b5050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801562001a3c57602002820191906000526020600020905b81548152602001906001019080831162001a27575b5050505050815260200160068201805462001a5790620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462001a8590620046c3565b801562001ad65780601f1062001aaa5761010080835404028352916020019162001ad6565b820191906000526020600020905b81548152906001019060200180831162001ab857829003601f168201915b5050505050815260200160078201805462001af190620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462001b1f90620046c3565b801562001b705780601f1062001b445761010080835404028352916020019162001b70565b820191906000526020600020905b81548152906001019060200180831162001b5257829003601f168201915b5050509183525050600882015460209091019060ff16600481111562001b9a5762001b9a620042ac565b600481111562001bae5762001bae620042ac565b81526020016009820180548060200260200160405190810160405280929190818152602001828054801562001c0357602002820191906000526020600020905b81548152602001906001019080831162001bee575b5050505050815250509050919050565b604a546001600160a01b0316331462001c6f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000dfd565b62001c7b6000620035b8565b565b6040516bffffffffffffffffffffffff19606086901b166020820152603481018490526054810183905260748101829052600090609401604051602081830303815290604052805190602001209050949350505050565b60606000835167ffffffffffffffff81111562001cf55762001cf562003e9c565b60405190808252806020026020018201604052801562001d1f578160200160208202803683370190505b50905060005b845181101562001da85762001d7385828151811062001d485762001d48620049c5565b602002602001015185838151811062001d655762001d65620049c5565b6020026020010151620029ef565b82828151811062001d885762001d88620049c5565b60209081029190910101528062001d9f81620049f1565b91505062001d25565b509392505050565b600062000d7b61271062000d7460055462000d6d62002964565b6016818154811062001ddb57600080fd5b600091825260209091200154905081565b60175460ff161562001e545760405162461bcd60e51b815260206004820152602a60248201527f4552433230536e617073686f745265703a2050726f706f73616c20756e6465726044820152691032bc32b1baba34b7b760b11b606482015260840162000dfd565b600160008281526015602052604090206008015460ff16600481111562001e7f5762001e7f620042ac565b1462001ee25760405162461bcd60e51b815260206004820152602b60248201527f4552433230536e617073686f745265703a2050726f706f73616c20616c72656160448201526a191e48195e1958dd5d195960aa1b606482015260840162000dfd565b600081815260156020526040902060020154421162001f585760405162461bcd60e51b815260206004820152602b60248201527f4552433230536e617073686f745265703a2050726f706f73616c206861736e2760448201526a1d08195b991959081e595d60aa1b606482015260840162000dfd565b60008181526015602052604081206009018054829190829062001f7f5762001f7f620049c5565b600091825260209091200154905060015b600084815260156020526040902060090154811015620020c05762001fb584620027e4565b600085815260156020526040902060090180548390811062001fdb5762001fdb620049c5565b9060005260206000200154101580156200202757506000848152601560205260409020600901805483919083908110620020195762002019620049c5565b906000526020600020015410155b15620020ab576000848152601560205260409020600901805483919083908110620020565762002056620049c5565b90600052602060002001541415620020725760009250620020ab565b600084815260156020526040902060090180549193508391829081106200209d576200209d620049c5565b906000526020600020015491505b80620020b781620049f1565b91505062001f90565b8262002110576000848152601560205260409020600801805460ff191660029081179091558490600080516020620053c1833981519152905b60405190815260200160405180910390a262002743565b60045460008581526015602052604090206002015442916200213391906200360a565b101562002172576000848152601560205260409020600801805460ff191660049081179091558490600080516020620053c183398151915290620020f9565b600084815260156020526040812060088101805460ff1916600317905560090154620021be90620021a590600162003618565b6000878152601560205260409020600301549062002a8d565b9050620021d9620021d185600162003618565b829062002a7f565b91506000620021e983836200360a565b9050600160009054906101000a90046001600160a01b03166001600160a01b0316633e7a47b26040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200223c57600080fd5b505af115801562002251573d6000803e3d6000fd5b505050505b808310156200269a576000868152601560205260408120600301805485908110620022855762002285620049c5565b6000918252602090912001546001600160a01b031614801590620022e557506000868152601560205260408120600401805485908110620022ca57620022ca620049c5565b906000526020600020018054620022e190620046c3565b9050115b1562002685576000868152601560205260408120600401805485908110620023115762002311620049c5565b9060005260206000200180546200232890620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200235690620046c3565b8015620023a75780601f106200237b57610100808354040283529160200191620023a7565b820191906000526020600020905b8154815290600101906020018083116200238957829003601f168201915b50505060208084015160015460008d815260159093526040909220600301805495965090946001600160a01b03909216935063eed470339250309189908110620023f557620023f5620049c5565b9060005260206000200160009054906101000a90046001600160a01b031684601560008e81526020019081526020016000206005018a815481106200243e576200243e620049c5565b60009182526020909120015460405160e086901b6001600160e01b031990811682526001600160a01b039586166004830152939094166024850152911660448301526064820152608401600060405180830381600087803b158015620024a357600080fd5b505af1925050508015620024b5575060015b6200251157620024c462004a0f565b806308c379a01415620025055750620024dc62004a2c565b80620024e9575062002507565b8060405162461bcd60e51b815260040162000dfd919062003def565b505b3d6000803e3d6000fd5b6017805460ff191660011790556000888152601560205260408120600301805487908110620025445762002544620049c5565b60009182526020808320909101548b83526015909152604090912060050180546001600160a01b039092169188908110620025835762002583620049c5565b9060005260206000200154601560008c81526020019081526020016000206004018881548110620025b857620025b8620049c5565b90600052602060002001604051620025d1919062004abc565b60006040518083038185875af1925050503d806000811462002610576040519150601f19603f3d011682016040523d82523d6000602084013e62002615565b606091505b5050905080620026775760405162461bcd60e51b815260206004820152602660248201527f4552433230536e617073686f745265703a2050726f706f73616c2063616c6c2060448201526519985a5b195960d21b606482015260840162000dfd565b50506017805460ff19169055505b826200269181620049f1565b93505062002256565b60015460405163fb0fde8560e01b81523060048201526001600160a01b039091169063fb0fde8590602401602060405180830381600087803b158015620026e057600080fd5b505af1158015620026f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200271b919062004b60565b5085600080516020620053c1833981519152600360405190815260200160405180910390a250505b600c546200275390600162003618565b600c5550505050565b600080546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b158015620027a357600080fd5b505afa158015620027b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620027de919062004809565b92915050565b600554600080549091620027de916127109162000d74916001600160a01b031663981b24d062002820886000908152607c602052604090205490565b6040518263ffffffff1660e01b81526004016200283f91815260200190565b60206040518083038186803b1580156200285857600080fd5b505afa1580156200286d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d6d919062004809565b604a546001600160a01b03163314620028ef5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000dfd565b6001600160a01b038116620029565760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000dfd565b6200296181620035b8565b50565b60008060009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620029b457600080fd5b505afa158015620029c9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d7b919062004809565b6000805460405163277166bf60e11b81526001600160a01b0385811660048301526024820185905290911690634ee2cd7e9060440160206040518083038186803b15801562002a3d57600080fd5b505afa15801562002a52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a78919062004809565b9392505050565b600062002a78828462004b84565b600062002a78828462004bbc565b6000601054600e54101562002b195760405162461bcd60e51b815260206004820152603960248201527f45524332304775696c643a204e6f7420656e6f75676820746f6b656e73206c6f60448201527f636b656420746f2063726561746520612070726f706f73616c00000000000000606482015260840162000dfd565b600f54600b54101562002b8b5760405162461bcd60e51b815260206004820152603360248201527f45524332304775696c643a204e6f7420656e6f756768206d656d6265727320746044820152721bc818dc99585d194818481c1c9bdc1bdcd85b606a1b606482015260840162000dfd565b600954600c541062002bff5760405162461bcd60e51b815260206004820152603660248201527f45524332304775696c643a204d6178696d756d20616d6f756e74206f662061636044820152751d1a5d99481c1c9bdc1bdcd85b1cc81c995858da195960521b606482015260840162000dfd565b62002c0962000d53565b62002c14336200275c565b101562002c825760405162461bcd60e51b815260206004820152603560248201527f45524332304775696c643a204e6f7420656e6f75676820766f74696e67506f77604482015274195c881d1bc818dc99585d19481c1c9bdc1bdcd85b605a1b606482015260840162000dfd565b8551875114801562002c95575084518751145b62002d005760405162461bcd60e51b815260206004820152603460248201527f45524332304775696c643a2057726f6e67206c656e677468206f6620746f2c2060448201527364617461206f722076616c75652061727261797360601b606482015260840162000dfd565b600087511162002d6d5760405162461bcd60e51b815260206004820152603160248201527f45524332304775696c643a20746f2c20646174612076616c7565206172726179604482015270732063616e6e6f7420626520656d70747960781b606482015260840162000dfd565b8651841115801562002d8a5750845162002d88908562003626565b155b62002dfe5760405162461bcd60e51b815260206004820152603760248201527f45524332304775696c643a20496e76616c696420746f74616c4f7074696f6e7360448201527f206f72206f7074696f6e2063616c6c73206c656e677468000000000000000000606482015260840162000dfd565b600a84111562002e775760405162461bcd60e51b815260206004820152603a60248201527f45524332304775696c643a204d6178696d756d20616d6f756e74206f66206f7060448201527f74696f6e73207065722070726f706f73616c2072656163686564000000000000606482015260840162000dfd565b600a546040516bffffffffffffffffffffffff193360601b166020820152426034820152605481019190915260009060740160405160208183030381529060405280519060200120905062002ed96001600a546200360a90919063ffffffff16565b600a55600081815260156020526040902080546001600160a01b03191633178155426001820181905560035462002f1191906200360a565b6002820155885162002f2d90600383019060208c019062003b15565b50875162002f4590600483019060208b019062003b7f565b50865162002f5d90600583019060208a019062003bdf565b50845162002f75906006830190602088019062003c1d565b50835162002f8d906007830190602087019062003c1d565b5062002f9b8660016200360a565b67ffffffffffffffff81111562002fb65762002fb662003e9c565b60405190808252806020026020018201604052801562002fe0578160200160208202803683370190505b50805162002ff991600984019160209091019062003bdf565b5060088101805460ff19166001908117909155600c546200301a916200360a565b600c5581600080516020620053c1833981519152600160405190815260200160405180910390a250601680546001810182556000919091527fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b512428901819055979650505050505050565b60008381526014602090815260408083206001600160a01b038816845282528083206001015486845260159092529091206009018054620030f8928492620030f19287908110620030d757620030d7620049c5565b90600052602060002001546200361890919063ffffffff16565b906200360a565b60008481526015602052604090206009018054849081106200311e576200311e620049c5565b60009182526020808320909101929092558481526014825260408082206001600160a01b038816835283528082208581556001018490558582526015909252206002015462003185856001600160a01b031660009081526012602052604090206001015490565b1015620031ba576000838152601560209081526040808320600201546001600160a01b03881684526012909252909120600101555b604080516001600160a01b038616815260208101839052839185917f583c62f152711bcb1ca6186c1065821ff17a7cbe226dcb559a1c889dcf0d769b910160405180910390a360075415620032dd57600062003230620032266008543a6200363490919063ffffffff16565b6007549062002a7f565b9050804710158015620032425750333b155b15620032db57604051600090339083908381818185875af1925050503d80600081146200328c576040519150601f19603f3d011682016040523d82523d6000602084013e62003291565b606091505b5050905080620014af5760405162461bcd60e51b81526020600482015260146024820152734661696c656420746f20726566756e642067617360601b604482015260640162000dfd565b505b50505050565b6000806000620032f485856200364c565b9150915062001da881620036c2565b60175462010000900460ff1680620033235750601754610100900460ff16155b620033425760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff1615801562003368576017805462ffff001916620101001790555b6200337262003895565b6200337c6200390f565b801562002961576017805462ff00001916905550565b60175462010000900460ff1680620033b25750601754610100900460ff16155b620033d15760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff16158015620033f7576017805462ffff001916620101001790555b6001600160a01b038c166200345e5760405162461bcd60e51b815260206004820152602660248201527f45524332304775696c643a20746f6b656e2063616e74206265207a65726f206160448201526564647265737360d01b606482015260840162000dfd565b60008b11620034815760405162461bcd60e51b815260040162000dfd9062004700565b8a831015620034a45760405162461bcd60e51b815260040162000dfd906200474f565b60008911620034c75760405162461bcd60e51b815260040162000dfd90620047ac565b8651620034dc9060029060208a019062003c1d565b50600080546001600160a01b0319166001600160a01b038e1690811790915560405130906200350b9062003c99565b6001600160a01b03928316815291166020820152604001604051809103906000f0801580156200353f573d6000803e3d6000fd5b50601180546001600160a01b03199081166001600160a01b039384161790915560038d905560048c905560058b905560068a9055600788905560088790556009869055600d85905560018054909116918416919091179055801562001852576017805462ff000019169055505050505050505050505050565b604a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600062002a78828462004bd3565b600062002a78828462004bee565b600062002a78828462004c08565b600081831062003645578162002a78565b5090919050565b600080825160411415620036875760208301516040840151606085015160001a6200367a878285856200397f565b9450945050505062000f44565b825160401415620036b55760208301516040840151620036a986838362003a74565b93509350505062000f44565b5060009050600262000f44565b6000816004811115620036d957620036d9620042ac565b1415620036e35750565b6001816004811115620036fa57620036fa620042ac565b14156200374a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640162000dfd565b6002816004811115620037615762003761620042ac565b1415620037b15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640162000dfd565b6003816004811115620037c857620037c8620042ac565b1415620038235760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840162000dfd565b60048160048111156200383a576200383a620042ac565b1415620029615760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840162000dfd565b60175462010000900460ff1680620038b55750601754610100900460ff16155b620038d45760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff161580156200337c576017805462ffff00191662010100179055801562002961576017805462ff00001916905550565b60175462010000900460ff16806200392f5750601754610100900460ff16155b6200394e5760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff1615801562003974576017805462ffff001916620101001790555b6200337c33620035b8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115620039b8575060009050600362003a6b565b8460ff16601b14158015620039d157508460ff16601c14155b15620039e4575060009050600462003a6b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801562003a39573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811662003a645760006001925092505062003a6b565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b0162003a97878288856200397f565b935093505050935093915050565b60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160608152602001606081526020016060815260200160608152602001606081526020016000600481111562003b085762003b08620042ac565b8152602001606081525090565b82805482825590600052602060002090810192821562003b6d579160200282015b8281111562003b6d57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062003b36565b5062003b7b92915062003ca7565b5090565b82805482825590600052602060002090810192821562003bd1579160200282015b8281111562003bd1578251805162003bc091849160209091019062003c1d565b509160200191906001019062003ba0565b5062003b7b92915062003cbe565b82805482825590600052602060002090810192821562003b6d579160200282015b8281111562003b6d57825182559160200191906001019062003c00565b82805462003c2b90620046c3565b90600052602060002090601f01602090048101928262003c4f576000855562003b6d565b82601f1062003c6a57805160ff191683800117855562003b6d565b8280016001018555821562003b6d579182018281111562003b6d57825182559160200191906001019062003c00565b6107a18062004c2083390190565b5b8082111562003b7b576000815560010162003ca8565b8082111562003b7b57600062003cd5828262003cdf565b5060010162003cbe565b50805462003ced90620046c3565b6000825580601f1062003cfe575050565b601f01602090049060005260206000209081019062002961919062003ca7565b6020808252825182820181905260009190848201906040850190845b8181101562003d585783518352928401929184019160010162003d3a565b50909695505050505050565b80356001600160a01b038116811462003d7c57600080fd5b919050565b60006020828403121562003d9457600080fd5b62002a788262003d64565b6000815180845260005b8181101562003dc75760208185018101518683018201520162003da9565b8181111562003dda576000602083870101525b50601f01601f19169290920160200192915050565b60208152600062002a78602083018462003d9f565b6000806000806000806000806000806101408b8d03121562003e2557600080fd5b505088359a60208a01359a5060408a013599606081013599506080810135985060a0810135975060c0810135965060e081013595506101008101359450610120013592509050565b6000806040838503121562003e8157600080fd5b8235915062003e936020840162003d64565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff8111828210171562003edb5762003edb62003e9c565b6040525050565b600067ffffffffffffffff82111562003eff5762003eff62003e9c565b5060051b60200190565b600082601f83011262003f1b57600080fd5b8135602062003f2a8262003ee2565b60405162003f39828262003eb2565b83815260059390931b850182019282810191508684111562003f5a57600080fd5b8286015b8481101562003f805762003f728162003d64565b835291830191830162003f5e565b509695505050505050565b600082601f83011262003f9d57600080fd5b813567ffffffffffffffff81111562003fba5762003fba62003e9c565b60405162003fd3601f8301601f19166020018262003eb2565b81815284602083860101111562003fe957600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126200401857600080fd5b81356020620040278262003ee2565b60405162004036828262003eb2565b83815260059390931b85018201928281019150868411156200405757600080fd5b8286015b8481101562003f8057803567ffffffffffffffff8111156200407d5760008081fd5b6200408d8986838b010162003f8b565b8452509183019183016200405b565b600082601f830112620040ae57600080fd5b81356020620040bd8262003ee2565b604051620040cc828262003eb2565b83815260059390931b8501820192828101915086841115620040ed57600080fd5b8286015b8481101562003f805780358352918301918301620040f1565b60008060008060008060c087890312156200412457600080fd5b863567ffffffffffffffff808211156200413d57600080fd5b6200414b8a838b0162003f09565b975060208901359150808211156200416257600080fd5b620041708a838b0162004006565b965060408901359150808211156200418757600080fd5b620041958a838b016200409c565b9550606089013594506080890135915080821115620041b357600080fd5b620041c18a838b0162003f8b565b935060a0890135915080821115620041d857600080fd5b50620041e789828a0162003f8b565b9150509295509295509295565b6000806000606084860312156200420a57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156200423457600080fd5b5035919050565b600080600080600060a086880312156200425457600080fd5b853594506020860135935060408601359250620042746060870162003d64565b9150608086013567ffffffffffffffff8111156200429157600080fd5b6200429f8882890162003f8b565b9150509295509295909350565b634e487b7160e01b600052602160045260246000fd5b60058110620042e157634e487b7160e01b600052602160045260246000fd5b9052565b60018060a01b038716815285602082015284604082015260c0606082015260006200431460c083018662003d9f565b828103608084015262004328818662003d9f565b9150506200433a60a0830184620042c2565b979650505050505050565b60008060008060008060008060008060006101608c8e0312156200436857600080fd5b620043738c62003d64565b9a5060208c0135995060408c0135985060608c0135975060808c0135965060a08c013567ffffffffffffffff811115620043ac57600080fd5b620043ba8e828f0162003f8b565b96505060c08c0135945060e08c013593506101008c013592506101208c01359150620043ea6101408d0162003d64565b90509295989b509295989b9093969950565b600081518084526020808501945080840160005b83811015620044375781516001600160a01b03168752958201959082019060010162004410565b509495945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156200448e5782840389526200447b84835162003d9f565b9885019893509084019060010162004460565b5091979650505050505050565b600081518084526020808501945080840160005b838110156200443757815187529582019590820190600101620044af565b60208152620044e86020820183516001600160a01b03169052565b6020820151604082015260408201516060820152600060608301516101408060808501526200451c610160850183620043fc565b91506080850151601f19808685030160a08701526200453c848362004442565b935060a08701519150808685030160c08701526200455b84836200449b565b935060c08701519150808685030160e08701526200457a848362003d9f565b935060e087015191506101008187860301818801526200459b858462003d9f565b945080880151925050610120620045b581880184620042c2565b870151868503909101838701529050620045d083826200449b565b9695505050505050565b60008060008060808587031215620045f157600080fd5b620045fc8562003d64565b966020860135965060408601359560600135945092505050565b600080604083850312156200462a57600080fd5b823567ffffffffffffffff808211156200464357600080fd5b620046518683870162003f09565b935060208501359150808211156200466857600080fd5b5062004677858286016200409c565b9150509250929050565b60208152600062002a7860208301846200449b565b60008060408385031215620046aa57600080fd5b620046b58362003d64565b946020939093013593505050565b600181811c90821680620046d857607f821691505b60208210811415620046fa57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f45524332304775696c643a2070726f706f73616c2074696d652068617320746f60408201526e0206265206d6f7265207468616e203608c1b606082015260800190565b6020808252603e908201527f45524332304775696c643a206c6f636b54696d652068617320746f206265206860408201527f6967686572206f7220657175616c20746f2070726f706f73616c54696d650000606082015260800190565b6020808252603c908201527f45524332304775696c643a20766f74696e6720706f77657220666f722065786560408201527f637574696f6e2068617320746f206265206d6f7265207468616e203000000000606082015260800190565b6000602082840312156200481c57600080fd5b5051919050565b60208082526036908201527f536e617073686f7452657045524332304775696c643a2050726f706f73616c20604082015275195b9919590b0818d85b9b9bdd081899481d9bdd195960521b606082015260800190565b60208082526031908201527f536e617073686f7452657045524332304775696c643a20496e76616c696420766040820152701bdd1a5b99d41bddd95c88185b5bdd5b9d607a1b606082015260800190565b6020808252604c908201527f536e617073686f7452657045524332304775696c643a2043616e6e6f7420636860408201527f616e6765206f7074696f6e20766f7465642c206f6e6c7920696e63726561736560608201526b103b37ba34b733a837bbb2b960a11b608082015260a00190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6001600160a01b0395861681529390941660208401526001600160e01b03199190911660408301526060820152901515608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141562004a085762004a08620049db565b5060010190565b600060033d111562004a295760046000803e5060005160e01c5b90565b600060443d101562004a3b5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171562004a6c57505050505090565b828501915081518181111562004a855750505050505090565b843d870101602082850101111562004aa05750505050505090565b62004ab16020828601018762003eb2565b509095945050505050565b600080835481600182811c91508083168062004ad957607f831692505b602080841082141562004afa57634e487b7160e01b86526022600452602486fd5b81801562004b11576001811462004b235762004b52565b60ff1986168952848901965062004b52565b60008a81526020902060005b8681101562004b4a5781548b82015290850190830162004b2f565b505084890196505b509498975050505050505050565b60006020828403121562004b7357600080fd5b8151801515811462002a7857600080fd5b600081600019048311821515161562004ba15762004ba1620049db565b500290565b634e487b7160e01b600052601260045260246000fd5b60008262004bce5762004bce62004ba6565b500490565b6000821982111562004be95762004be9620049db565b500190565b60008282101562004c035762004c03620049db565b500390565b60008262004c1a5762004c1a62004ba6565b50069056fe608060405234801561001057600080fd5b506040516107a13803806107a183398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b6106e3806100be6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636e9960c31161005b5780636e9960c3146100ef578063f3fef3a314610100578063f851a44014610113578063fc0c546a1461012657600080fd5b806321df0da71461008257806327e235e3146100ac57806347e7ef24146100da575b600080fd5b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6100cc6100ba366004610586565b60026020526000908152604090205481565b6040519081526020016100a3565b6100ed6100e83660046105a1565b610139565b005b6001546001600160a01b031661008f565b6100ed61010e3660046105a1565b61020a565b60015461008f906001600160a01b031681565b60005461008f906001600160a01b031681565b6001546001600160a01b031633146101af5760405162461bcd60e51b815260206004820152602e60248201527f546f6b656e5661756c743a204465706f736974206d7573742062652073656e7460448201526d103a343937bab3b41030b236b4b760911b60648201526084015b60405180910390fd5b6000546101c7906001600160a01b031683308461025b565b6001600160a01b0382166000908152600260205260409020546101ea90826102cc565b6001600160a01b0390921660009081526002602052604090209190915550565b6001546001600160a01b0316331461022157600080fd5b600054610238906001600160a01b031683836102df565b6001600160a01b0382166000908152600260205260409020546101ea9082610314565b6040516001600160a01b03808516602483015283166044820152606481018290526102c69085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610320565b50505050565b60006102d882846105e1565b9392505050565b6040516001600160a01b03831660248201526044810182905261030f90849063a9059cbb60e01b9060640161028f565b505050565b60006102d882846105f9565b6000610375826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103f29092919063ffffffff16565b80519091501561030f57808060200190518101906103939190610610565b61030f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101a6565b60606104018484600085610409565b949350505050565b60608247101561046a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101a6565b843b6104b85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101a6565b600080866001600160a01b031685876040516104d4919061065e565b60006040518083038185875af1925050503d8060008114610511576040519150601f19603f3d011682016040523d82523d6000602084013e610516565b606091505b5091509150610526828286610531565b979650505050505050565b606083156105405750816102d8565b8251156105505782518084602001fd5b8160405162461bcd60e51b81526004016101a6919061067a565b80356001600160a01b038116811461058157600080fd5b919050565b60006020828403121561059857600080fd5b6102d88261056a565b600080604083850312156105b457600080fd5b6105bd8361056a565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105f4576105f46105cb565b500190565b60008282101561060b5761060b6105cb565b500390565b60006020828403121561062257600080fd5b815180151581146102d857600080fd5b60005b8381101561064d578181015183820152602001610635565b838111156102c65750506000910152565b60008251610670818460208701610632565b9190910192915050565b6020815260008251806020840152610699816040850160208701610632565b601f01601f1916919091016040019291505056fea2646970667358221220f83df9be484204d29c000a118187aee7d3ca7efcb094476e4ad893327bb967b564736f6c63430008080033fee62a9eec0be50eb061c711990ef0f1e17b40ea131d9347b0468acdaf8bf243a264697066735822122073d9b7d793a8c678d331abbdfc64a86035b9538bd9db4c3c1fd4fe8a03339d4364736f6c63430008080033',
  deployedBytecode:
    '0x608060405260043610620003e55760003560e01c80636c8b72f61162000203578063b3929aaa1162000117578063e158080a11620000a7578063f98606a71162000075578063f98606a71462000bec578063f9a92d821462000c04578063fc0c546a1462000c29578063fc4e703f1462000c4b57005b8063e158080a1462000b54578063f09951981462000b6c578063f2fde38b1462000baf578063f4732da61462000bd457005b8063c0a4d64d11620000e5578063c0a4d64d1462000ae9578063c93e01e31462000b00578063d8c6a6d11462000b17578063e04503531462000b3c57005b8063b3929aaa1462000a63578063b3b470611462000a88578063b7c15f8d1462000aad578063bcc3f3bd1462000ac457005b80638f1803051162000193578063a7aeb5571162000161578063a7aeb55714620009e8578063ad6c1e341462000a00578063adf2c7b61462000a17578063ae6192341462000a4b57005b80638f180305146200097457806392b71654146200098b578063a16fe34214620009b0578063a78d80fc14620009d057005b806377027ff411620001d157806377027ff414620008f25780638029eff1146200090957806389c98c06146200093d5780638da5cb5b146200095457005b80636c8b72f614620008925780636e27d889146200070a578063715018a614620008a95780637189354614620008c157005b806325c069fc11620002fb5780633de39c11116200028b5780635689141211620002595780635689141214620008295780635bc789d914620008415780635e508c2c146200086357806364fe6ed2146200087b57005b80633de39c1114620007a55780633f10cf1514620007bd578063430694cf14620007d557806354f2f7af146200080957005b8063315a095d11620002c9578063315a095d146200070a57806332ed5b12146200072f57806336f8f8d914620007685780633bf353fb146200078d57005b806325c069fc14620006395780632d5b17de14620006635780632d757c3e14620006885780632fd99c0014620006c557005b806316bbecde116200037757806321df0da7116200034557806321df0da714620005a65780632229a0e214620005da57806322bafdff14620005f15780632467ef94146200062257005b806316bbecde146200053a57806317d7de7c146200055f578063184a0ae914620005775780631a5007dd146200058f57005b80630d66808711620003b55780630d66808714620004b3578063123f6d6714620004cb578063130485fe14620004f057806313108d74146200051557005b80623a40d014620003e757806301a598a6146200041757806306fdde0314620004655780630a366a63146200048c575b005b348015620003f457600080fd5b50620003ff62000c63565b6040516200040e919062003d1e565b60405180910390f35b3480156200042457600080fd5b506200044f6200043636600462003d81565b6012602052600090815260409020805460019091015482565b604080519283526020830191909152016200040e565b3480156200047257600080fd5b506200047d62000cbd565b6040516200040e919062003def565b3480156200049957600080fd5b50620004a462000d53565b6040519081526020016200040e565b348015620004c057600080fd5b50620004a4600d5481565b348015620004d857600080fd5b50620003e5620004ea36600462003e04565b62000d80565b348015620004fd57600080fd5b506200044f6200050f36600462003e6d565b62000f19565b3480156200052257600080fd5b50620004a4620005343660046200410a565b62000f4b565b3480156200054757600080fd5b50620003e562000559366004620041f4565b62001002565b3480156200056c57600080fd5b506200047d62001133565b3480156200058457600080fd5b50620004a460035481565b3480156200059c57600080fd5b50600a54620004a4565b348015620005b357600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020016200040e565b348015620005e757600080fd5b50601654620004a4565b348015620005fe57600080fd5b50620004a46200061036600462004221565b6000908152607c602052604090205490565b3480156200062f57600080fd5b50600c54620004a4565b3480156200064657600080fd5b5062000650600a81565b60405160ff90911681526020016200040e565b3480156200067057600080fd5b50620003e5620006823660046200423b565b620011c4565b3480156200069557600080fd5b50620004a4620006a736600462003d81565b6001600160a01b031660009081526012602052604090206001015490565b348015620006d257600080fd5b50620006f9620006e436600462004221565b60136020526000908152604090205460ff1681565b60405190151581526020016200040e565b3480156200071757600080fd5b50620003e56200072936600462004221565b620014b7565b3480156200073c57600080fd5b50620007546200074e36600462004221565b62001514565b6040516200040e96959493929190620042e5565b3480156200077557600080fd5b50620003e56200078736600462004345565b62001678565b3480156200079a57600080fd5b50620004a4600c5481565b348015620007b257600080fd5b50620004a460085481565b348015620007ca57600080fd5b50620004a460045481565b348015620007e257600080fd5b50620007fa620007f436600462004221565b62001860565b6040516200040e9190620044cd565b3480156200081657600080fd5b506011546001600160a01b0316620005c1565b3480156200083657600080fd5b50620004a4600e5481565b3480156200084e57600080fd5b50601154620005c1906001600160a01b031681565b3480156200087057600080fd5b50620004a460055481565b3480156200088857600080fd5b50601054620004a4565b3480156200089f57600080fd5b50600754620004a4565b348015620008b657600080fd5b50620003e562001c13565b348015620008ce57600080fd5b50620004a4620008e036600462004221565b607c6020526000908152604090205481565b348015620008ff57600080fd5b50600954620004a4565b3480156200091657600080fd5b50620006f96200092836600462004221565b60009081526013602052604090205460ff1690565b3480156200094a57600080fd5b50600854620004a4565b3480156200096157600080fd5b50604a546001600160a01b0316620005c1565b3480156200098157600080fd5b50600b54620004a4565b3480156200099857600080fd5b50620004a4620009aa366004620045da565b62001c7d565b348015620009bd57600080fd5b506001546001600160a01b0316620005c1565b348015620009dd57600080fd5b50620004a4600a5481565b348015620009f557600080fd5b50620004a4600f5481565b34801562000a0d57600080fd5b50600f54620004a4565b34801562000a2457600080fd5b5062000a3c62000a3636600462004616565b62001cd4565b6040516200040e919062004681565b34801562000a5857600080fd5b50620004a462001db0565b34801562000a7057600080fd5b50620004a462000a8236600462004221565b62001dca565b34801562000a9557600080fd5b50620003e562000aa736600462004221565b62001dec565b34801562000aba57600080fd5b50600454620004a4565b34801562000ad157600080fd5b50620004a462000ae336600462003d81565b6200275c565b34801562000af657600080fd5b50600d54620004a4565b34801562000b0d57600080fd5b50600354620004a4565b34801562000b2457600080fd5b50620004a462000b3636600462004221565b620027e4565b34801562000b4957600080fd5b50620004a460095481565b34801562000b6157600080fd5b50620004a460105481565b34801562000b7957600080fd5b506200044f62000b8b36600462003e6d565b60146020908152600092835260408084209091529082529020805460019091015482565b34801562000bbc57600080fd5b50620003e562000bce36600462003d81565b62002893565b34801562000be157600080fd5b50620004a462002964565b34801562000bf957600080fd5b50620004a460065481565b34801562000c1157600080fd5b50620004a462000c2336600462004696565b620029ef565b34801562000c3657600080fd5b50600054620005c1906001600160a01b031681565b34801562000c5857600080fd5b50620004a460075481565b6060601680548060200260200160405190810160405280929190818152602001828054801562000cb357602002820191906000526020600020905b81548152602001906001019080831162000c9e575b5050505050905090565b6002805462000ccc90620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462000cfa90620046c3565b801562000d4b5780601f1062000d1f5761010080835404028352916020019162000d4b565b820191906000526020600020905b81548152906001019060200180831162000d2d57829003601f168201915b505050505081565b600062000d7b61271062000d7460065462000d6d62002964565b9062002a7f565b9062002a8d565b905090565b33301462000e065760405162461bcd60e51b815260206004820152604260248201527f45524332304775696c643a204f6e6c792063616c6c61626c652062792045524360448201527f32306775696c6420697473656c66206f72207768656e20696e697469616c697a606482015261195960f21b608482015260a4015b60405180910390fd5b60008a1162000e295760405162461bcd60e51b815260040162000dfd9062004700565b8983101562000e4c5760405162461bcd60e51b815260040162000dfd906200474f565b6000881162000e6f5760405162461bcd60e51b815260040162000dfd90620047ac565b6201c90886111562000eea5760405162461bcd60e51b815260206004820152603960248201527f45524332304775696c643a20766f7465206761732068617320746f206265206560448201527f7175616c206f72206c6f776572207468616e2031313730303000000000000000606482015260840162000dfd565b600399909955600497909755600595909555600693909355600791909155600855600955600d55600f55601055565b60008281526014602090815260408083206001600160a01b0385168452909152902080546001909101545b9250929050565b60008062000f5e88888888888862002a9b565b905060008054906101000a90046001600160a01b03166001600160a01b0316635439ad866040518163ffffffff1660e01b815260040160206040518083038186803b15801562000fad57600080fd5b505afa15801562000fc2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000fe8919062004809565b6000828152607c6020526040902055979650505050505050565b6000838152601560205260409020600201544210620010355760405162461bcd60e51b815260040162000dfd9062004823565b6000838152607c6020526040902054819062001053903390620029ef565b1015620010745760405162461bcd60e51b815260040162000dfd9062004879565b6000838152601460209081526040808320338452909152902054158015620010b657506000838152601460209081526040808320338452909152902060010154155b80620011015750600083815260146020908152604080832033845290915290205482148015620011015750600083815260146020908152604080832033845290915290206001015481115b620011205760405162461bcd60e51b815260040162000dfd90620048ca565b6200112e3384848462003082565b505050565b6060600280546200114490620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200117290620046c3565b801562000cb35780601f10620011975761010080835404028352916020019162000cb3565b820191906000526020600020905b815481529060010190602001808311620011a557509395945050505050565b6000858152601560205260409020600201544210620011f75760405162461bcd60e51b815260040162000dfd9062004823565b6000620012078387878762001c7d565b60008181526013602052604090205490915060ff1615620012775760405162461bcd60e51b8152602060048201526024808201527f536e617073686f7452657045524332304775696c643a20416c726561647920766044820152631bdd195960e21b606482015260840162000dfd565b620012db82620012d4836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90620032e3565b6001600160a01b0316836001600160a01b031614620013495760405162461bcd60e51b815260206004820152602360248201527f536e617073686f7452657045524332304775696c643a2057726f6e67207369676044820152623732b960e91b606482015260840162000dfd565b6000818152601360209081526040808320805460ff19166001179055888352607c90915290205484906200137f908590620029ef565b10158015620013b2575060008681526014602090815260408083206001600160a01b038716845290915290206001015484115b620013d15760405162461bcd60e51b815260040162000dfd9062004879565b60008681526014602090815260408083206001600160a01b038716845290915290205415801562001425575060008681526014602090815260408083206001600160a01b0387168452909152902060010154155b8062001482575060008681526014602090815260408083206001600160a01b03871684529091529020548514801562001482575060008681526014602090815260408083206001600160a01b038716845290915290206001015484115b620014a15760405162461bcd60e51b815260040162000dfd90620048ca565b620014af8387878762003082565b505050505050565b60405162461bcd60e51b815260206004820152602b60248201527f536e617073686f7452657045524332304775696c643a20746f6b656e2076617560448201526a1b1d08191a5cd8589b195960aa1b606482015260840162000dfd565b60156020526000908152604090208054600182015460028301546006840180546001600160a01b039094169492939192916200155090620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200157e90620046c3565b8015620015cf5780601f10620015a357610100808354040283529160200191620015cf565b820191906000526020600020905b815481529060010190602001808311620015b157829003601f168201915b505050505090806007018054620015e690620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200161490620046c3565b8015620016655780601f10620016395761010080835404028352916020019162001665565b820191906000526020600020905b8154815290600101906020018083116200164757829003601f168201915b5050506008909301549192505060ff1686565b60175462010000900460ff1680620016985750601754610100900460ff16155b620016b75760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff16158015620016dd576017805462ffff001916620101001790555b620016e762003303565b620016fc8c8c8c8c8c8c8c8c8c8c8c62003392565b600160009054906101000a90046001600160a01b03166001600160a01b0316636cfe0489308e7f40c10f19c047ae7dfa66d6312b683d2ea3dfbcb4159e96b967c5f4b0a86f2842600060016040518663ffffffff1660e01b8152600401620017699594939291906200498a565b600060405180830381600087803b1580156200178457600080fd5b505af115801562001799573d6000803e3d6000fd5b50505050600160009054906101000a90046001600160a01b03166001600160a01b0316636cfe0489308e7f9dc29fac0ba6d4fc521c69c2b0c636d612e3343bc39ed934429b8876b0d12cba600060016040518663ffffffff1660e01b81526004016200180a9594939291906200498a565b600060405180830381600087803b1580156200182557600080fd5b505af11580156200183a573d6000803e3d6000fd5b50505050801562001852576017805462ff0000191690555b505050505050505050505050565b6200186a62003aa5565b60008281526015602090815260409182902082516101408101845281546001600160a01b031681526001820154818401526002820154818501526003820180548551818602810186019096528086529194929360608601939290830182828015620018ff57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311620018e0575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b82821015620019e35783829060005260206000200180546200194f90620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200197d90620046c3565b8015620019ce5780601f10620019a257610100808354040283529160200191620019ce565b820191906000526020600020905b815481529060010190602001808311620019b057829003601f168201915b5050505050815260200190600101906200192d565b5050505081526020016005820180548060200260200160405190810160405280929190818152602001828054801562001a3c57602002820191906000526020600020905b81548152602001906001019080831162001a27575b5050505050815260200160068201805462001a5790620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462001a8590620046c3565b801562001ad65780601f1062001aaa5761010080835404028352916020019162001ad6565b820191906000526020600020905b81548152906001019060200180831162001ab857829003601f168201915b5050505050815260200160078201805462001af190620046c3565b80601f016020809104026020016040519081016040528092919081815260200182805462001b1f90620046c3565b801562001b705780601f1062001b445761010080835404028352916020019162001b70565b820191906000526020600020905b81548152906001019060200180831162001b5257829003601f168201915b5050509183525050600882015460209091019060ff16600481111562001b9a5762001b9a620042ac565b600481111562001bae5762001bae620042ac565b81526020016009820180548060200260200160405190810160405280929190818152602001828054801562001c0357602002820191906000526020600020905b81548152602001906001019080831162001bee575b5050505050815250509050919050565b604a546001600160a01b0316331462001c6f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000dfd565b62001c7b6000620035b8565b565b6040516bffffffffffffffffffffffff19606086901b166020820152603481018490526054810183905260748101829052600090609401604051602081830303815290604052805190602001209050949350505050565b60606000835167ffffffffffffffff81111562001cf55762001cf562003e9c565b60405190808252806020026020018201604052801562001d1f578160200160208202803683370190505b50905060005b845181101562001da85762001d7385828151811062001d485762001d48620049c5565b602002602001015185838151811062001d655762001d65620049c5565b6020026020010151620029ef565b82828151811062001d885762001d88620049c5565b60209081029190910101528062001d9f81620049f1565b91505062001d25565b509392505050565b600062000d7b61271062000d7460055462000d6d62002964565b6016818154811062001ddb57600080fd5b600091825260209091200154905081565b60175460ff161562001e545760405162461bcd60e51b815260206004820152602a60248201527f4552433230536e617073686f745265703a2050726f706f73616c20756e6465726044820152691032bc32b1baba34b7b760b11b606482015260840162000dfd565b600160008281526015602052604090206008015460ff16600481111562001e7f5762001e7f620042ac565b1462001ee25760405162461bcd60e51b815260206004820152602b60248201527f4552433230536e617073686f745265703a2050726f706f73616c20616c72656160448201526a191e48195e1958dd5d195960aa1b606482015260840162000dfd565b600081815260156020526040902060020154421162001f585760405162461bcd60e51b815260206004820152602b60248201527f4552433230536e617073686f745265703a2050726f706f73616c206861736e2760448201526a1d08195b991959081e595d60aa1b606482015260840162000dfd565b60008181526015602052604081206009018054829190829062001f7f5762001f7f620049c5565b600091825260209091200154905060015b600084815260156020526040902060090154811015620020c05762001fb584620027e4565b600085815260156020526040902060090180548390811062001fdb5762001fdb620049c5565b9060005260206000200154101580156200202757506000848152601560205260409020600901805483919083908110620020195762002019620049c5565b906000526020600020015410155b15620020ab576000848152601560205260409020600901805483919083908110620020565762002056620049c5565b90600052602060002001541415620020725760009250620020ab565b600084815260156020526040902060090180549193508391829081106200209d576200209d620049c5565b906000526020600020015491505b80620020b781620049f1565b91505062001f90565b8262002110576000848152601560205260409020600801805460ff191660029081179091558490600080516020620053c1833981519152905b60405190815260200160405180910390a262002743565b60045460008581526015602052604090206002015442916200213391906200360a565b101562002172576000848152601560205260409020600801805460ff191660049081179091558490600080516020620053c183398151915290620020f9565b600084815260156020526040812060088101805460ff1916600317905560090154620021be90620021a590600162003618565b6000878152601560205260409020600301549062002a8d565b9050620021d9620021d185600162003618565b829062002a7f565b91506000620021e983836200360a565b9050600160009054906101000a90046001600160a01b03166001600160a01b0316633e7a47b26040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200223c57600080fd5b505af115801562002251573d6000803e3d6000fd5b505050505b808310156200269a576000868152601560205260408120600301805485908110620022855762002285620049c5565b6000918252602090912001546001600160a01b031614801590620022e557506000868152601560205260408120600401805485908110620022ca57620022ca620049c5565b906000526020600020018054620022e190620046c3565b9050115b1562002685576000868152601560205260408120600401805485908110620023115762002311620049c5565b9060005260206000200180546200232890620046c3565b80601f01602080910402602001604051908101604052809291908181526020018280546200235690620046c3565b8015620023a75780601f106200237b57610100808354040283529160200191620023a7565b820191906000526020600020905b8154815290600101906020018083116200238957829003601f168201915b50505060208084015160015460008d815260159093526040909220600301805495965090946001600160a01b03909216935063eed470339250309189908110620023f557620023f5620049c5565b9060005260206000200160009054906101000a90046001600160a01b031684601560008e81526020019081526020016000206005018a815481106200243e576200243e620049c5565b60009182526020909120015460405160e086901b6001600160e01b031990811682526001600160a01b039586166004830152939094166024850152911660448301526064820152608401600060405180830381600087803b158015620024a357600080fd5b505af1925050508015620024b5575060015b6200251157620024c462004a0f565b806308c379a01415620025055750620024dc62004a2c565b80620024e9575062002507565b8060405162461bcd60e51b815260040162000dfd919062003def565b505b3d6000803e3d6000fd5b6017805460ff191660011790556000888152601560205260408120600301805487908110620025445762002544620049c5565b60009182526020808320909101548b83526015909152604090912060050180546001600160a01b039092169188908110620025835762002583620049c5565b9060005260206000200154601560008c81526020019081526020016000206004018881548110620025b857620025b8620049c5565b90600052602060002001604051620025d1919062004abc565b60006040518083038185875af1925050503d806000811462002610576040519150601f19603f3d011682016040523d82523d6000602084013e62002615565b606091505b5050905080620026775760405162461bcd60e51b815260206004820152602660248201527f4552433230536e617073686f745265703a2050726f706f73616c2063616c6c2060448201526519985a5b195960d21b606482015260840162000dfd565b50506017805460ff19169055505b826200269181620049f1565b93505062002256565b60015460405163fb0fde8560e01b81523060048201526001600160a01b039091169063fb0fde8590602401602060405180830381600087803b158015620026e057600080fd5b505af1158015620026f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200271b919062004b60565b5085600080516020620053c1833981519152600360405190815260200160405180910390a250505b600c546200275390600162003618565b600c5550505050565b600080546040516370a0823160e01b81526001600160a01b038481166004830152909116906370a082319060240160206040518083038186803b158015620027a357600080fd5b505afa158015620027b8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620027de919062004809565b92915050565b600554600080549091620027de916127109162000d74916001600160a01b031663981b24d062002820886000908152607c602052604090205490565b6040518263ffffffff1660e01b81526004016200283f91815260200190565b60206040518083038186803b1580156200285857600080fd5b505afa1580156200286d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d6d919062004809565b604a546001600160a01b03163314620028ef5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000dfd565b6001600160a01b038116620029565760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000dfd565b6200296181620035b8565b50565b60008060009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620029b457600080fd5b505afa158015620029c9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d7b919062004809565b6000805460405163277166bf60e11b81526001600160a01b0385811660048301526024820185905290911690634ee2cd7e9060440160206040518083038186803b15801562002a3d57600080fd5b505afa15801562002a52573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002a78919062004809565b9392505050565b600062002a78828462004b84565b600062002a78828462004bbc565b6000601054600e54101562002b195760405162461bcd60e51b815260206004820152603960248201527f45524332304775696c643a204e6f7420656e6f75676820746f6b656e73206c6f60448201527f636b656420746f2063726561746520612070726f706f73616c00000000000000606482015260840162000dfd565b600f54600b54101562002b8b5760405162461bcd60e51b815260206004820152603360248201527f45524332304775696c643a204e6f7420656e6f756768206d656d6265727320746044820152721bc818dc99585d194818481c1c9bdc1bdcd85b606a1b606482015260840162000dfd565b600954600c541062002bff5760405162461bcd60e51b815260206004820152603660248201527f45524332304775696c643a204d6178696d756d20616d6f756e74206f662061636044820152751d1a5d99481c1c9bdc1bdcd85b1cc81c995858da195960521b606482015260840162000dfd565b62002c0962000d53565b62002c14336200275c565b101562002c825760405162461bcd60e51b815260206004820152603560248201527f45524332304775696c643a204e6f7420656e6f75676820766f74696e67506f77604482015274195c881d1bc818dc99585d19481c1c9bdc1bdcd85b605a1b606482015260840162000dfd565b8551875114801562002c95575084518751145b62002d005760405162461bcd60e51b815260206004820152603460248201527f45524332304775696c643a2057726f6e67206c656e677468206f6620746f2c2060448201527364617461206f722076616c75652061727261797360601b606482015260840162000dfd565b600087511162002d6d5760405162461bcd60e51b815260206004820152603160248201527f45524332304775696c643a20746f2c20646174612076616c7565206172726179604482015270732063616e6e6f7420626520656d70747960781b606482015260840162000dfd565b8651841115801562002d8a5750845162002d88908562003626565b155b62002dfe5760405162461bcd60e51b815260206004820152603760248201527f45524332304775696c643a20496e76616c696420746f74616c4f7074696f6e7360448201527f206f72206f7074696f6e2063616c6c73206c656e677468000000000000000000606482015260840162000dfd565b600a84111562002e775760405162461bcd60e51b815260206004820152603a60248201527f45524332304775696c643a204d6178696d756d20616d6f756e74206f66206f7060448201527f74696f6e73207065722070726f706f73616c2072656163686564000000000000606482015260840162000dfd565b600a546040516bffffffffffffffffffffffff193360601b166020820152426034820152605481019190915260009060740160405160208183030381529060405280519060200120905062002ed96001600a546200360a90919063ffffffff16565b600a55600081815260156020526040902080546001600160a01b03191633178155426001820181905560035462002f1191906200360a565b6002820155885162002f2d90600383019060208c019062003b15565b50875162002f4590600483019060208b019062003b7f565b50865162002f5d90600583019060208a019062003bdf565b50845162002f75906006830190602088019062003c1d565b50835162002f8d906007830190602087019062003c1d565b5062002f9b8660016200360a565b67ffffffffffffffff81111562002fb65762002fb662003e9c565b60405190808252806020026020018201604052801562002fe0578160200160208202803683370190505b50805162002ff991600984019160209091019062003bdf565b5060088101805460ff19166001908117909155600c546200301a916200360a565b600c5581600080516020620053c1833981519152600160405190815260200160405180910390a250601680546001810182556000919091527fd833147d7dc355ba459fc788f669e58cfaf9dc25ddcd0702e87d69c7b512428901819055979650505050505050565b60008381526014602090815260408083206001600160a01b038816845282528083206001015486845260159092529091206009018054620030f8928492620030f19287908110620030d757620030d7620049c5565b90600052602060002001546200361890919063ffffffff16565b906200360a565b60008481526015602052604090206009018054849081106200311e576200311e620049c5565b60009182526020808320909101929092558481526014825260408082206001600160a01b038816835283528082208581556001018490558582526015909252206002015462003185856001600160a01b031660009081526012602052604090206001015490565b1015620031ba576000838152601560209081526040808320600201546001600160a01b03881684526012909252909120600101555b604080516001600160a01b038616815260208101839052839185917f583c62f152711bcb1ca6186c1065821ff17a7cbe226dcb559a1c889dcf0d769b910160405180910390a360075415620032dd57600062003230620032266008543a6200363490919063ffffffff16565b6007549062002a7f565b9050804710158015620032425750333b155b15620032db57604051600090339083908381818185875af1925050503d80600081146200328c576040519150601f19603f3d011682016040523d82523d6000602084013e62003291565b606091505b5050905080620014af5760405162461bcd60e51b81526020600482015260146024820152734661696c656420746f20726566756e642067617360601b604482015260640162000dfd565b505b50505050565b6000806000620032f485856200364c565b9150915062001da881620036c2565b60175462010000900460ff1680620033235750601754610100900460ff16155b620033425760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff1615801562003368576017805462ffff001916620101001790555b6200337262003895565b6200337c6200390f565b801562002961576017805462ff00001916905550565b60175462010000900460ff1680620033b25750601754610100900460ff16155b620033d15760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff16158015620033f7576017805462ffff001916620101001790555b6001600160a01b038c166200345e5760405162461bcd60e51b815260206004820152602660248201527f45524332304775696c643a20746f6b656e2063616e74206265207a65726f206160448201526564647265737360d01b606482015260840162000dfd565b60008b11620034815760405162461bcd60e51b815260040162000dfd9062004700565b8a831015620034a45760405162461bcd60e51b815260040162000dfd906200474f565b60008911620034c75760405162461bcd60e51b815260040162000dfd90620047ac565b8651620034dc9060029060208a019062003c1d565b50600080546001600160a01b0319166001600160a01b038e1690811790915560405130906200350b9062003c99565b6001600160a01b03928316815291166020820152604001604051809103906000f0801580156200353f573d6000803e3d6000fd5b50601180546001600160a01b03199081166001600160a01b039384161790915560038d905560048c905560058b905560068a9055600788905560088790556009869055600d85905560018054909116918416919091179055801562001852576017805462ff000019169055505050505050505050505050565b604a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600062002a78828462004bd3565b600062002a78828462004bee565b600062002a78828462004c08565b600081831062003645578162002a78565b5090919050565b600080825160411415620036875760208301516040840151606085015160001a6200367a878285856200397f565b9450945050505062000f44565b825160401415620036b55760208301516040840151620036a986838362003a74565b93509350505062000f44565b5060009050600262000f44565b6000816004811115620036d957620036d9620042ac565b1415620036e35750565b6001816004811115620036fa57620036fa620042ac565b14156200374a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640162000dfd565b6002816004811115620037615762003761620042ac565b1415620037b15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640162000dfd565b6003816004811115620037c857620037c8620042ac565b1415620038235760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840162000dfd565b60048160048111156200383a576200383a620042ac565b1415620029615760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840162000dfd565b60175462010000900460ff1680620038b55750601754610100900460ff16155b620038d45760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff161580156200337c576017805462ffff00191662010100179055801562002961576017805462ff00001916905550565b60175462010000900460ff16806200392f5750601754610100900460ff16155b6200394e5760405162461bcd60e51b815260040162000dfd906200493c565b60175462010000900460ff1615801562003974576017805462ffff001916620101001790555b6200337c33620035b8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115620039b8575060009050600362003a6b565b8460ff16601b14158015620039d157508460ff16601c14155b15620039e4575060009050600462003a6b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801562003a39573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811662003a645760006001925092505062003a6b565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b0162003a97878288856200397f565b935093505050935093915050565b60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160608152602001606081526020016060815260200160608152602001606081526020016000600481111562003b085762003b08620042ac565b8152602001606081525090565b82805482825590600052602060002090810192821562003b6d579160200282015b8281111562003b6d57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062003b36565b5062003b7b92915062003ca7565b5090565b82805482825590600052602060002090810192821562003bd1579160200282015b8281111562003bd1578251805162003bc091849160209091019062003c1d565b509160200191906001019062003ba0565b5062003b7b92915062003cbe565b82805482825590600052602060002090810192821562003b6d579160200282015b8281111562003b6d57825182559160200191906001019062003c00565b82805462003c2b90620046c3565b90600052602060002090601f01602090048101928262003c4f576000855562003b6d565b82601f1062003c6a57805160ff191683800117855562003b6d565b8280016001018555821562003b6d579182018281111562003b6d57825182559160200191906001019062003c00565b6107a18062004c2083390190565b5b8082111562003b7b576000815560010162003ca8565b8082111562003b7b57600062003cd5828262003cdf565b5060010162003cbe565b50805462003ced90620046c3565b6000825580601f1062003cfe575050565b601f01602090049060005260206000209081019062002961919062003ca7565b6020808252825182820181905260009190848201906040850190845b8181101562003d585783518352928401929184019160010162003d3a565b50909695505050505050565b80356001600160a01b038116811462003d7c57600080fd5b919050565b60006020828403121562003d9457600080fd5b62002a788262003d64565b6000815180845260005b8181101562003dc75760208185018101518683018201520162003da9565b8181111562003dda576000602083870101525b50601f01601f19169290920160200192915050565b60208152600062002a78602083018462003d9f565b6000806000806000806000806000806101408b8d03121562003e2557600080fd5b505088359a60208a01359a5060408a013599606081013599506080810135985060a0810135975060c0810135965060e081013595506101008101359450610120013592509050565b6000806040838503121562003e8157600080fd5b8235915062003e936020840162003d64565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff8111828210171562003edb5762003edb62003e9c565b6040525050565b600067ffffffffffffffff82111562003eff5762003eff62003e9c565b5060051b60200190565b600082601f83011262003f1b57600080fd5b8135602062003f2a8262003ee2565b60405162003f39828262003eb2565b83815260059390931b850182019282810191508684111562003f5a57600080fd5b8286015b8481101562003f805762003f728162003d64565b835291830191830162003f5e565b509695505050505050565b600082601f83011262003f9d57600080fd5b813567ffffffffffffffff81111562003fba5762003fba62003e9c565b60405162003fd3601f8301601f19166020018262003eb2565b81815284602083860101111562003fe957600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126200401857600080fd5b81356020620040278262003ee2565b60405162004036828262003eb2565b83815260059390931b85018201928281019150868411156200405757600080fd5b8286015b8481101562003f8057803567ffffffffffffffff8111156200407d5760008081fd5b6200408d8986838b010162003f8b565b8452509183019183016200405b565b600082601f830112620040ae57600080fd5b81356020620040bd8262003ee2565b604051620040cc828262003eb2565b83815260059390931b8501820192828101915086841115620040ed57600080fd5b8286015b8481101562003f805780358352918301918301620040f1565b60008060008060008060c087890312156200412457600080fd5b863567ffffffffffffffff808211156200413d57600080fd5b6200414b8a838b0162003f09565b975060208901359150808211156200416257600080fd5b620041708a838b0162004006565b965060408901359150808211156200418757600080fd5b620041958a838b016200409c565b9550606089013594506080890135915080821115620041b357600080fd5b620041c18a838b0162003f8b565b935060a0890135915080821115620041d857600080fd5b50620041e789828a0162003f8b565b9150509295509295509295565b6000806000606084860312156200420a57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156200423457600080fd5b5035919050565b600080600080600060a086880312156200425457600080fd5b853594506020860135935060408601359250620042746060870162003d64565b9150608086013567ffffffffffffffff8111156200429157600080fd5b6200429f8882890162003f8b565b9150509295509295909350565b634e487b7160e01b600052602160045260246000fd5b60058110620042e157634e487b7160e01b600052602160045260246000fd5b9052565b60018060a01b038716815285602082015284604082015260c0606082015260006200431460c083018662003d9f565b828103608084015262004328818662003d9f565b9150506200433a60a0830184620042c2565b979650505050505050565b60008060008060008060008060008060006101608c8e0312156200436857600080fd5b620043738c62003d64565b9a5060208c0135995060408c0135985060608c0135975060808c0135965060a08c013567ffffffffffffffff811115620043ac57600080fd5b620043ba8e828f0162003f8b565b96505060c08c0135945060e08c013593506101008c013592506101208c01359150620043ea6101408d0162003d64565b90509295989b509295989b9093969950565b600081518084526020808501945080840160005b83811015620044375781516001600160a01b03168752958201959082019060010162004410565b509495945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156200448e5782840389526200447b84835162003d9f565b9885019893509084019060010162004460565b5091979650505050505050565b600081518084526020808501945080840160005b838110156200443757815187529582019590820190600101620044af565b60208152620044e86020820183516001600160a01b03169052565b6020820151604082015260408201516060820152600060608301516101408060808501526200451c610160850183620043fc565b91506080850151601f19808685030160a08701526200453c848362004442565b935060a08701519150808685030160c08701526200455b84836200449b565b935060c08701519150808685030160e08701526200457a848362003d9f565b935060e087015191506101008187860301818801526200459b858462003d9f565b945080880151925050610120620045b581880184620042c2565b870151868503909101838701529050620045d083826200449b565b9695505050505050565b60008060008060808587031215620045f157600080fd5b620045fc8562003d64565b966020860135965060408601359560600135945092505050565b600080604083850312156200462a57600080fd5b823567ffffffffffffffff808211156200464357600080fd5b620046518683870162003f09565b935060208501359150808211156200466857600080fd5b5062004677858286016200409c565b9150509250929050565b60208152600062002a7860208301846200449b565b60008060408385031215620046aa57600080fd5b620046b58362003d64565b946020939093013593505050565b600181811c90821680620046d857607f821691505b60208210811415620046fa57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f45524332304775696c643a2070726f706f73616c2074696d652068617320746f60408201526e0206265206d6f7265207468616e203608c1b606082015260800190565b6020808252603e908201527f45524332304775696c643a206c6f636b54696d652068617320746f206265206860408201527f6967686572206f7220657175616c20746f2070726f706f73616c54696d650000606082015260800190565b6020808252603c908201527f45524332304775696c643a20766f74696e6720706f77657220666f722065786560408201527f637574696f6e2068617320746f206265206d6f7265207468616e203000000000606082015260800190565b6000602082840312156200481c57600080fd5b5051919050565b60208082526036908201527f536e617073686f7452657045524332304775696c643a2050726f706f73616c20604082015275195b9919590b0818d85b9b9bdd081899481d9bdd195960521b606082015260800190565b60208082526031908201527f536e617073686f7452657045524332304775696c643a20496e76616c696420766040820152701bdd1a5b99d41bddd95c88185b5bdd5b9d607a1b606082015260800190565b6020808252604c908201527f536e617073686f7452657045524332304775696c643a2043616e6e6f7420636860408201527f616e6765206f7074696f6e20766f7465642c206f6e6c7920696e63726561736560608201526b103b37ba34b733a837bbb2b960a11b608082015260a00190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6001600160a01b0395861681529390941660208401526001600160e01b03199190911660408301526060820152901515608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141562004a085762004a08620049db565b5060010190565b600060033d111562004a295760046000803e5060005160e01c5b90565b600060443d101562004a3b5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171562004a6c57505050505090565b828501915081518181111562004a855750505050505090565b843d870101602082850101111562004aa05750505050505090565b62004ab16020828601018762003eb2565b509095945050505050565b600080835481600182811c91508083168062004ad957607f831692505b602080841082141562004afa57634e487b7160e01b86526022600452602486fd5b81801562004b11576001811462004b235762004b52565b60ff1986168952848901965062004b52565b60008a81526020902060005b8681101562004b4a5781548b82015290850190830162004b2f565b505084890196505b509498975050505050505050565b60006020828403121562004b7357600080fd5b8151801515811462002a7857600080fd5b600081600019048311821515161562004ba15762004ba1620049db565b500290565b634e487b7160e01b600052601260045260246000fd5b60008262004bce5762004bce62004ba6565b500490565b6000821982111562004be95762004be9620049db565b500190565b60008282101562004c035762004c03620049db565b500390565b60008262004c1a5762004c1a62004ba6565b50069056fe608060405234801561001057600080fd5b506040516107a13803806107a183398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b6106e3806100be6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636e9960c31161005b5780636e9960c3146100ef578063f3fef3a314610100578063f851a44014610113578063fc0c546a1461012657600080fd5b806321df0da71461008257806327e235e3146100ac57806347e7ef24146100da575b600080fd5b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6100cc6100ba366004610586565b60026020526000908152604090205481565b6040519081526020016100a3565b6100ed6100e83660046105a1565b610139565b005b6001546001600160a01b031661008f565b6100ed61010e3660046105a1565b61020a565b60015461008f906001600160a01b031681565b60005461008f906001600160a01b031681565b6001546001600160a01b031633146101af5760405162461bcd60e51b815260206004820152602e60248201527f546f6b656e5661756c743a204465706f736974206d7573742062652073656e7460448201526d103a343937bab3b41030b236b4b760911b60648201526084015b60405180910390fd5b6000546101c7906001600160a01b031683308461025b565b6001600160a01b0382166000908152600260205260409020546101ea90826102cc565b6001600160a01b0390921660009081526002602052604090209190915550565b6001546001600160a01b0316331461022157600080fd5b600054610238906001600160a01b031683836102df565b6001600160a01b0382166000908152600260205260409020546101ea9082610314565b6040516001600160a01b03808516602483015283166044820152606481018290526102c69085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610320565b50505050565b60006102d882846105e1565b9392505050565b6040516001600160a01b03831660248201526044810182905261030f90849063a9059cbb60e01b9060640161028f565b505050565b60006102d882846105f9565b6000610375826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103f29092919063ffffffff16565b80519091501561030f57808060200190518101906103939190610610565b61030f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101a6565b60606104018484600085610409565b949350505050565b60608247101561046a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101a6565b843b6104b85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101a6565b600080866001600160a01b031685876040516104d4919061065e565b60006040518083038185875af1925050503d8060008114610511576040519150601f19603f3d011682016040523d82523d6000602084013e610516565b606091505b5091509150610526828286610531565b979650505050505050565b606083156105405750816102d8565b8251156105505782518084602001fd5b8160405162461bcd60e51b81526004016101a6919061067a565b80356001600160a01b038116811461058157600080fd5b919050565b60006020828403121561059857600080fd5b6102d88261056a565b600080604083850312156105b457600080fd5b6105bd8361056a565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105f4576105f46105cb565b500190565b60008282101561060b5761060b6105cb565b500390565b60006020828403121561062257600080fd5b815180151581146102d857600080fd5b60005b8381101561064d578181015183820152602001610635565b838111156102c65750506000910152565b60008251610670818460208701610632565b9190910192915050565b6020815260008251806020840152610699816040850160208701610632565b601f01601f1916919091016040019291505056fea2646970667358221220f83df9be484204d29c000a118187aee7d3ca7efcb094476e4ad893327bb967b564736f6c63430008080033fee62a9eec0be50eb061c711990ef0f1e17b40ea131d9347b0468acdaf8bf243a264697066735822122073d9b7d793a8c678d331abbdfc64a86035b9538bd9db4c3c1fd4fe8a03339d4364736f6c63430008080033',
  linkReferences: {},
  deployedLinkReferences: {},
};
