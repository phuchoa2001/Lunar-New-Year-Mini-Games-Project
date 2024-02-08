import React, { useEffect, useState } from 'react';
import Styles from "@/styles/Header.module.scss";
import { Typography } from 'antd';
import { Space, Toast } from 'antd-mobile';
import { statsService } from 'api/statsService';
import { Spin } from 'antd';

function Header(props) {
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await statsService();
      if (response) {
        setStats(response)
      }
      setIsLoading(false)
    } catch (error) {
      Toast.show({
        content: 'Lấy thông kế thất bại',
      })
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Space className={Styles.header}>
        {isLoading && (
          <Spin />
        )}
        {!isLoading && (
          <>
            <Typography.Text className='text-white'>{stats?.result?.views} lượt truy cập </Typography.Text>
            <Typography.Text className='text-white px-2'>-</Typography.Text>
            <Typography.Text className='text-white'> {stats.count} người dùng</Typography.Text>
          </>
        )}
      </Space>
    </div>
  );
}

export default Header;