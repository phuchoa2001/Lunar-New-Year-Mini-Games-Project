import React from 'react';
import { TabBar } from 'antd-mobile'
import {
	AppOutline,
	MessageOutline,
	UnorderedListOutline,
	UserOutline,
} from 'antd-mobile-icons'
import { HomeOutlined } from '@ant-design/icons'
import Styles from '@/styles/components/tabs.module.scss'

function Tabs(props) {
	const tabs = [
		{
			key: '/home',
			title: 'Trang chủ',
			icon: <HomeOutlined />,
		},
		{
			key: '/todo',
			title: 'Danh sách mục tiêu ',
			icon: <UnorderedListOutline />,
		},
		{
			key: '/message',
			title: 'Cá nhân',
			icon: <UserOutline />,
		},
	]

	return (
		<div className={Styles.Tabs}>
			<TabBar onChange={value => setRouteActive(value)}>
				{tabs.map(item => (
					<TabBar.Item key={item.key} icon={item.icon} title={item.title} />
				))}
			</TabBar>
		</div>
	);
}

export default Tabs;