import { useRouteError } from 'react-router-dom';
import { useMemo } from 'react';

const Error = () => {
  const error = useRouteError();

  const errorMessage = useMemo(() => {
    if (error && typeof error === 'object' && 'message' in error) {
      return (error as Error).message;
    }

    if (typeof error === 'string') {
      return error;
    }

    return 'Unknown error';
  }, [error]);

  return <>Something went wrong: {errorMessage}</>;
};

export default Error;
