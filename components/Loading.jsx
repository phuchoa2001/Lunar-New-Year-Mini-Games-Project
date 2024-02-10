import React from 'react';
import { Loading } from 'antd-mobile';
import { Space } from 'antd-mobile';

function LoadingComponent() {
  return (
    <Space direction="vertical">
      <Loading color="primary" />
    </Space>
  );
}

export default LoadingComponent;
