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
import GoalItemUser from './GoalItemUser';
import RandomUserViewer from "@/components/RandomUserViewer"

function GoalList(props) {
	const [currentPage, setCurrentPage] = useState(0);
	const [filter, setFilter] = useState({
		search: null,
		limit: LIMIT,
		page: 1,
		filter: {
			status: [2 , 3],
			idUser: props.user.idUser
		}
	})

	const { goalsList, isLoading, isError, mutate } = useGoalsList(filter);

	const handlePageClick = (event) => {
		setCurrentPage(event.selected);
	};

	if (isLoading) {
		return <LoadingComponent />
	}
	return (
		<>
			<GoalFilter filter={filter} setFilter={setFilter} />
			<RandomUserViewer />
			<List>
				{goalsList?.data?.map(user => (
					<List.Item
						key={user.name}
						prefix={
							<UserOutline fontSize={40} />
						}
						style={{ background: "#f4f2e7" }}
					>
						<GoalItemUser  {...user} mutate={mutate} />
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
					style={{ paddingBottom: 70 }}
				/>
			</Space>
		</>
	);
}

export default GoalList;