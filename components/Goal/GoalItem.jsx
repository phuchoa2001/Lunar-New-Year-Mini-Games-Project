import React from 'react';
import { Space, Toast } from 'antd';
import Styles from '@/styles/components/goalItem.module.scss';
import GoalItemStatus from './GoalItemStatus';
import LikesWithHeart from '../LikesWithHeart';

function GoalItem(props) {
  return (
    <>
      <Space justify="between" className='w-full justify-between mb-2' align="center" >
        <p className='text-lg'>IdGame:{props.name}</p>
        <div className='text-xs '>Avatar 3X</div>
      </Space>
      <p className='text-xs mb-1'>Mục tiêu 2024 : {props.description}</p>
      <p className='text-xs' style={{ color: "#999999" }}>Ghi chú : {props.description}</p>
      <Space justify="between" className='w-full justify-between' direction="horizontal">
        <Space align="center" style={{ gap: 4 }}>
          <div className='text-xs'>Trạng thái:</div>
          <GoalItemStatus status={2} />
        </Space>
        {/* <LikesWithHeart likes={-1} isLoading={false} /> */}
      </Space>
    </>
  );
}

export default GoalItem;