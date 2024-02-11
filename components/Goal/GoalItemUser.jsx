import React from 'react';
import { Space, Toast, Tag } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Styles from '@/styles/components/goalItem.module.scss';
import GoalItemStatus from './GoalItemStatus';
import { useRouter } from 'next/router';
import { useGoalContext } from 'context/goalContext';
import { getHoursFromCreatedAt } from 'utils/dateUtils';

function GoalItemUser(props) {
	const router = useRouter();
	const { data, setData } = useGoalContext();
	const timeDiff = getHoursFromCreatedAt(props.createdAt);

	const handleCLick = () => {
		router.push(`/goals/detail/${props.target}?id=${props['_id']}`);
	}

	const handleEdit = (event) => {
		event.stopPropagation();
		router.push(`/goals/edit/${props['_id']}`);
		setData({
			...props
		})
	}

	return (
		<div onClick={handleCLick}>
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
			{timeDiff < 24 ? (
				<div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }} className={Styles.boxTag}>
					<Space justify="center">
						<Tag color='default' className='cursor-pointer' onClick={handleEdit}>Sửa</Tag>
						<Tag color='red' className='cursor-pointer'>Xóa</Tag>
					</Space>
				</div>
			) : (
				<div className={Styles.container}>
					<InfoCircleOutlined className={Styles.icon} />
					<div className={Styles.message}>
						Mục tiêu đã qua 24 giờ và không thể xóa hoặc sửa đổi.
					</div>
				</div>
			)}
		</div>
	);
}

export default GoalItemUser;