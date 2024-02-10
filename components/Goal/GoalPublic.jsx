import React, { useState } from 'react';
import { Button, List, Space } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import GoalFilter from './GoalFilter';
import GoalItem from './GoalItem';
import { Pagination } from 'antd';
import { useGoalsList } from 'hooks/swr/useGoal';
import LoadingComponent from '@/components/Loading';
import { LIMIT } from 'constants/common';
import scrollToTop from 'utils/scrollToTop';

function GoalPublic(props) {
	const [currentPage, setCurrentPage] = useState(0);
	const [filter, setFilter] = useState({
		search: null,
		limit: LIMIT,
		page: 1,
		filter: {
			status: 2
		}
	})
	const { goalsList, isLoading, isError } = useGoalsList(filter);

	const handlePageClick = (event) => {
		setCurrentPage(event.selected);
	};

	if (isLoading) {
		return <LoadingComponent />
	}
	return (
		<>
			<GoalFilter filter={filter} setFilter={setFilter} />
			<Button block color='primary' size='middle'>
				Xem người ngẫu nhiên
			</Button>
			<List>
				{goalsList?.data?.map(user => (
					<List.Item
						key={user.name}
						prefix={
							<UserOutline fontSize={40} />
						}
						style={{ background: "#f4f2e7" }}
					>
						<GoalItem  {...user} />
					</List.Item>
				))}
			</List>
			<Space className='w-full' justify='end'>
				<Pagination
					defaultCurrent={filter.page}
					total={goalsList.total}
					pageSize={goalsList.limit}
					onChange={(page) => {
						setFilter(prev => ({
							...prev,
							page: page
						}))
						scrollToTop();
					}}
					style={{ paddingBottom : 70 }}
				/>
			</Space>
		</>
	);
}

export default GoalPublic;