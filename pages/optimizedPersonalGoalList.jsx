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
import { useEffect, useState } from 'react';
import scrollToTop from 'utils/scrollToTop';
import NavBarBack from '@/components/NavBarBack';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import GoalItemUser from '@/components/Goal/GoalItemUser';
import RandomUserViewer from "@/components/RandomUserViewer"
import { getGoalsList } from 'api/goalService';
import useAuth from 'hooks/useAuth';

function OptimizedPublicGoalList(props) {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const [goals, setGoals] = useState(props.goals);
  const [filter, setFilter] = useState({
    search: null,
    filter: {
      inGame: null
    }
  })

  const redirectTo = (value) => {
    router.push(value);
  }

  const handleChange = (key) => {
    if (key === "personalGoalList") {
      router.push("/personalGoalList");
    }
  }

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const getDataByFilter = (data, { search, filter: { inGame , idUser } }) => {
    return data.filter((item) => {
      const searchMatch = search ? item.idGame.includes(search) || item.target.includes(search) : true;
      const inGameMatch = !!inGame ? item.inGame === inGame : true;
      const idUserMatch = !!idUser ? item.idUser === idUser : true;
      return searchMatch && inGameMatch && idUserMatch;
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setFilter(prev => ({
        ...prev,
        filter : {
          ...prev.filter,
          idUser: user.idUser
        }
      }))
    }
  }, [isLoading])
  const goalsFilter = getDataByFilter(goals.data, filter);

  return (
    <ProtectedComponent>
      <NavBarBack title="Danh sách mục tiêu của bạn">
        <Tabs onChange={handleChange} activeKey="optimizedPersonalGoalList">
          <Tabs.Tab title='Danh sách mới' key='personalGoalList'>
            <LoadingComponent />
          </Tabs.Tab>
          <Tabs.Tab title='Danh sách đã tối yêu' key='optimizedPersonalGoalList'>
            {isLoading ? (
              <LoadingComponent />
            ) : (
              <>
                <GoalFilter filter={filter} setFilter={setFilter} />
                <RandomUserViewer />
                <List>
                  {goalsFilter?.map(user => (
                    <List.Item
                      key={user.name}
                      prefix={
                        <UserOutline fontSize={40} />
                      }
                      style={{ background: "#f4f2e7" }}
                    >
                      <GoalItemUser  {...user} isOptimized={true} />
                    </List.Item>
                  ))}
                </List>
                {/* <Space className='w-full' justify='end'>
                  <Pagination
                    defaultCurrent={filter.page}
                    total={goals.total}
                    pageSize={goals.limit}
                    style={{ paddingBottom: 70 }}
                    onChange={(page) => {
                      setFilter(prev => ({
                        ...prev,
                        page: page
                      }))
                      scrollToTop();
                    }}
                  />
                </Space> */}
              </>
            )}
          </Tabs.Tab>
        </Tabs>
        <FloatButton icon={<AddSquareOutline fontSize={18} />} onClick={() => redirectTo("/goals/add")} />
      </NavBarBack>
    </ProtectedComponent>
  );
}

export async function getStaticProps() {
  const goals = await getGoalsList({
    limit: 1000,
    page: 1,
    filter: {
      status: 1
    }
  })

  return {
    props: {
      goals,
    },
  }
}

export default OptimizedPublicGoalList;