import React from 'react';
import { Space } from 'antd';
import { HeartOutline } from 'antd-mobile-icons';
import Styles from '@/styles/components/goalItem.module.scss';

function GoalItem(props) {
  return (
    <>
      <Space justify="between" className='w-full justify-between'>
        <p className='text-lg mb-2'>IdGame:{props.name}</p>
        <div className='text-xs '>Avatar 3X</div>
      </Space>
      <p className='text-xs mb-1'>Mục tiêu 2024 : {props.description}</p>
      <p className='text-xs' style={{ color : "#999999"}}>Ghi chú : {props.description}</p>
      <Space justify="between" className='w-full justify-between' direction="horizontal">
        <div className='text-xs'>Trạng thái : Đã hoàn thành </div>
        <div><HeartOutline /></div>
      </Space>
    </>
  );
}

export default GoalItem;