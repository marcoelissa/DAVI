import { IconButton } from 'Components/Primitives/Button';
import Result, { ResultState } from 'Components/Result';
import UnstyledLink from 'Components/Primitives/Links/UnstyledLink';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound: React.FC = () => {
  return (
    <Result
      state={ResultState.ERROR}
      title="That page doesn't exist."
      subtitle="Make sure you typed the correct address."
      extra={
        <UnstyledLink to={`/`}>
          <IconButton iconLeft>
            <FiArrowLeft /> Take me home
          </IconButton>
        </UnstyledLink>
      }
    />
  );
};

export default NotFound;
