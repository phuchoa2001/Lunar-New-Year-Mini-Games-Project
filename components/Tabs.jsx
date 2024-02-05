import React from 'react';
import { TabBar } from 'antd-mobile'
import { useRouter } from 'next/router'
import {
	AppOutline,
	MessageOutline,
	UnorderedListOutline,
	UserOutline,
} from 'antd-mobile-icons'
import { HomeOutlined } from '@ant-design/icons'
import Styles from '@/styles/components/tabs.module.scss'

function Tabs(props) {
	const router = useRouter();
	const { pathname } = router
	const tabs = [
		{
			key: '/',
			title: 'Trang chủ',
			icon: <HomeOutlined />,
		},
		{
			key: '/goalList',
			title: 'Danh sách mục tiêu',
			icon: <UnorderedListOutline />,
		},
		{
			key: '/users',
			title: 'Cá nhân',
			icon: <UserOutline />,
		},
	]

	const redirectTo = (value) => {
    router.push(value);
	}

	return (
		<div className={Styles.Tabs}>
			<TabBar activeKey={pathname} onChange={redirectTo}>
				{tabs.map(item => (
					<TabBar.Item key={item.key} icon={item.icon} title={item.title} />
				))}
			</TabBar>
		</div>
	);
}

export default Tabs;