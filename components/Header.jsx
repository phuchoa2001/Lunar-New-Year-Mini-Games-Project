import React, { useEffect, useState } from 'react';
import Styles from "@/styles/Header.module.scss";
import { Typography } from 'antd';
import { Space, Toast } from 'antd-mobile';
import { statsService } from 'api/statsService';
import { Spin } from 'antd';
import { useStats } from 'hooks/swr/userStats';

function Header(props) {
  const { data, isLoading } = useStats();

  return (
    <div>
      <Space className={Styles.header}>
        {isLoading && (
          <Spin />
        )}
        {!isLoading && (
          <>
            <Typography.Text className='text-white'>{data?.result?.views} lượt truy cập </Typography.Text>
            <Typography.Text className='text-white px-2'>-</Typography.Text>
            <Typography.Text className='text-white'> {data.count} người dùng</Typography.Text>
          </>
        )}
      </Space>
    </div>
  );
}

export default Header;