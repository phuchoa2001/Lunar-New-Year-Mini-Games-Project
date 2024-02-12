import React, { useEffect, useState } from 'react';
import Styles from "@/styles/Header.module.scss";
import { Typography } from 'antd';
import { Space, Toast } from 'antd-mobile';
import { statsService } from 'api/statsService';
import { Spin } from 'antd';
import { useStats } from 'hooks/swr/userStats';
import { useStatsContext } from 'context/statsContext';

function Header(props) {
  const { data, isLoading } = useStats();
  const { data: dataStatsContext, setData } = useStatsContext();

  useEffect(() => {
    if (!isLoading) {
      setData(data)
    }
  }, [isLoading])

  return (
    <div>
      <Space className={Styles.header}>
        {isLoading && (
          <Spin />
        )}
        {!isLoading && (
          <>
            <Typography.Text className='text-white' style={{ color : "#fff" }}>{dataStatsContext?.result?.views} lượt truy cập </Typography.Text>
            <Typography.Text className='text-white px-2' style={{ color : "#fff" }}>-</Typography.Text>
            <Typography.Text className='text-white' style={{ color : "#fff" }}> {dataStatsContext.count} người dùng</Typography.Text>
          </>
        )}
      </Space>
    </div>
  );
}

export default Header;