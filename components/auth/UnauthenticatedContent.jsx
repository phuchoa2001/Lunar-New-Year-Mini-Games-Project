import React from 'react';
import useAuth from 'hooks/useAuth';
import Redirect from '@/components/Redirect';

const UnauthenticatedContent = ({ children, to }) => {
  const { isAuthenticated , isLoading } = useAuth();

  console.log("isAuthenticated" , isAuthenticated , isLoading);

  if(isLoading) {
    return <></>
  }

  if (!isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Redirect to={to} />;
  }
};

export default UnauthenticatedContent;
