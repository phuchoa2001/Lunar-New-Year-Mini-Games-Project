import FloatButton from '@/components/FloatButton';
import GoalPublic from '@/components/Goal/GoalPublic';
import LoadingComponent from '@/components/Loading';
import { Tabs } from 'antd-mobile';
import { AddSquareOutline } from 'antd-mobile-icons';
import { useRouter } from 'next/router';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import HeaderSeo from '@/components/HeaderSeo';

function GoalPublicPage(props) {
	const router = useRouter();
	const redirectTo = (value) => {
		router.push(value);
	}

	const handleChange = (key) => {
		if (key === "optimizedList") {
			router.push("/optimizedPublicGoalList");
		}
	}

	return (
		<div>
			<HeaderSeo title='Mục tiêu công đồng' />
			<Tabs onChange={handleChange}>
				<Tabs.Tab title='Danh sách mới' key='newList'>
					<GoalPublic />
				</Tabs.Tab>
				<Tabs.Tab title='Danh sách đã tối yêu' key='optimizedList'>
					<LoadingComponent />
				</Tabs.Tab>
			</Tabs>
			<FloatButton icon={<AddSquareOutline fontSize={18} />} onClick={() => redirectTo("/goals/add")} />
		</div>
	);
}

export default GoalPublicPage;