import FloatButton from '@/components/FloatButton';
import GoalListComponent from '@/components/Goal/GoalList';
import LoadingComponent from '@/components/Loading';
import NavBarBack from '@/components/NavBarBack';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import { Tabs } from 'antd-mobile';
import { AddSquareOutline } from 'antd-mobile-icons';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';

function GoalList(props) {
	const router = useRouter();
	const { user, isLoading } = useAuth();

	const redirectTo = (value) => {
		router.push(value);
	}

	const handleChange = (key) => {
		if (key === "optimizedPersonalGoalList") {
			router.push("/optimizedPersonalGoalList");
		}
	}

	return (
		<ProtectedComponent>
			<NavBarBack title="Danh sách mục tiêu của bạn">
				<div>
					<Tabs onChange={handleChange}>
						<Tabs.Tab title='Danh sách mới' key='personalGoalList'>
							{isLoading ? (
								<LoadingComponent />
							) : (
								<GoalListComponent user={user} />
							)}
						</Tabs.Tab>
						<Tabs.Tab title='Danh sách đã tối yêu' key='optimizedPersonalGoalList'>
							<LoadingComponent />
						</Tabs.Tab>
					</Tabs>
					<FloatButton icon={<AddSquareOutline fontSize={18} />} onClick={() => redirectTo("/goals/add")} />
				</div>
			</NavBarBack>
		</ProtectedComponent>
	);
}

export default GoalList;