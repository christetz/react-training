import * as React from 'react';

interface WithLoadingProps {
  isLoading?: boolean;
}

export const WithLoading = (Component: React.ReactType): React.FunctionComponent<WithLoadingProps> => {
  return (props: WithLoadingProps): JSX.Element => {
    const { isLoading = false } = props;
    return (
      <>
        {isLoading && <div>Loading</div>}
        {!isLoading && <Component {...props} />}
      </>
    );
  };
};
