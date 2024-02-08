import React, { useState } from 'react';
import { Input, Modal } from 'antd-mobile';
import useAuth from 'hooks/useAuth';
import Redirect from '@/components/Redirect';

const ProtectedComponent = ({ children }) => {
  const { isAuthenticated , isLoading } = useAuth();

  if(isLoading) {
    return <></>
  }

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return (
      <Redirect to="/setIDGame" />
    );
  }
};

export default ProtectedComponent;
