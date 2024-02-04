import React from 'react';
import Styles from "@/styles/Header.module.scss";
import { Typography } from 'antd';
import { Space } from 'antd-mobile';

function Header(props) {
  return (
    <Space className={Styles.header}>
      <Typography.Text className='text-white'>0 lướt truy cập </Typography.Text>
      <Typography.Text className='text-white px-2'>-</Typography.Text>
      <Typography.Text className='text-white'> 0 người dùng</Typography.Text>
    </Space>
  );
}

export default Header;