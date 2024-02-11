import FloatButton from '@/components/FloatButton';
import GoalFilter from '@/components/Goal/GoalFilter';
import GoalItem from '@/components/Goal/GoalItem';
import LoadingComponent from '@/components/Loading';
import { Pagination } from 'antd';
import { Button, List, Space, Tabs } from 'antd-mobile';
import { AddSquareOutline, UserOutline } from 'antd-mobile-icons';
import { LIMIT } from 'constants/common';
import { useGoalsList } from 'hooks/swr/useGoal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import scrollToTop from 'utils/scrollToTop';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import RandomUserViewer from "@/components/RandomUserViewer"

function OptimizedPublicGoalList(props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState({
    search: null,
    limit: LIMIT,
    page: 1,
    filter: {
      status: 1
    }
  })
  const { goalsList, isLoading, isError } = useGoalsList(filter);

  const redirectTo = (value) => {
    router.push(value);
  }

  const handleChange = (key) => {
    if (key === "newList") {
      router.push("/publicGoals");
    }
  }

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div>
      <Tabs onChange={handleChange} activeKey="optimizedList">
        <Tabs.Tab title='Danh sách mới' key='newList'>
          <LoadingComponent />
        </Tabs.Tab>
        <Tabs.Tab title='Danh sách đã tối yêu' key='optimizedList'>
          {isLoading ? (
            <LoadingComponent />
          ) : (
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
                    <GoalItem  {...user} />
                  </List.Item>
                ))}
              </List>
              <Space className='w-full' justify='end'>
                <Pagination
                  defaultCurrent={filter.page}
                  total={goalsList.total}
                  pageSize={goalsList.limit}
                  style={{ paddingBottom: 70 }}
                  onChange={(page) => {
                    setFilter(prev => ({
                      ...prev,
                      page: page
                    }))
                    scrollToTop();
                  }}
                />
              </Space>
            </>
          )}
        </Tabs.Tab>
      </Tabs>
      <FloatButton icon={<AddSquareOutline fontSize={18} />} onClick={() => redirectTo("/goals/add")} />
    </div>
  );
}

export default OptimizedPublicGoalList;