import GoalListComponent from '@/components/Goal/GoalList';
import { Tabs } from 'antd-mobile';
import GoalListDone from '@/components/Goal/GoalListDone';
import NavBarBack from '@/components/NavBarBack';
import { AddSquareOutline } from 'antd-mobile-icons';
import FloatButton from '@/components/FloatButton';
import { useRouter } from 'next/router'

function GoalList(props) {
	const router = useRouter();

  const redirectTo = (value) => {
    router.push(value);
	}

	return (
		<NavBarBack title="Danh sách mục tiêu của bạn">
			<div>
				<Tabs>
					<Tabs.Tab title='Danh sách mới' key='fruits'>
						<GoalListComponent />
					</Tabs.Tab>
					<Tabs.Tab title='Danh sách đã tối yêu' key='fruits 1'>
						<GoalListDone />
					</Tabs.Tab>
				</Tabs>
				<FloatButton icon={<AddSquareOutline fontSize={18} />} onClick={() => redirectTo("/goals/add")} />
			</div>
		</NavBarBack>
	);
}

export default GoalList;