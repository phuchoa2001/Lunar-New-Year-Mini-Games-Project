import React from 'react';
import useAuth from 'hooks/useAuth';
import Redirect from '@/components/Redirect';

const UnauthenticatedContent = ({ children, to }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Redirect to={to} />;
  }
};

export default UnauthenticatedContent;
