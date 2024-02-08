import React, { useState } from 'react';
import { Input, Modal } from 'antd-mobile';
import useAuth from 'hooks/useAuth';
import Redirect from '@/components/Redirect';

const ProtectedComponent = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return (
      <Redirect to="/setIDGame" />
    );
  }
};

export default ProtectedComponent;
