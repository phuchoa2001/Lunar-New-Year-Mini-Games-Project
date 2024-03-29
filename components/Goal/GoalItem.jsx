import React from 'react';
import { Space, Toast, Tag } from 'antd';
import Styles from '@/styles/components/goalItem.module.scss';
import GoalItemStatus from './GoalItemStatus';
import { useRouter } from 'next/router';

function GoalItem(props) {
  const router = useRouter();

  const handleCLick = () => {
		router.push(`/goals/detail/${props['_id']}?title=${props.target}`);
  }

  return (
    <div onClick={handleCLick} className='cursor-pointer'>
      <Space justify="between" className='w-full justify-between mb-2' align="center" >
        <p className='text-lg'>IdGame:{props.idGame}</p>
        <div className='text-xs '>{props.inGame}</div>
      </Space>
      <p className='text-xs mb-1'>Mục tiêu 2024 : {props.target}</p>
      <p className='text-xs' style={{ color: "#999999" }}>Ghi chú : {props.note}</p>
      <Space justify="between" className='w-full justify-between' direction="horizontal">
        <Space align="center" style={{ gap: 4 }}>
          <div className='text-xs'>Trạng thái:</div>
          <GoalItemStatus status={props.status} />
        </Space>
      </Space>
    </div>
  );
}

export default GoalItem;