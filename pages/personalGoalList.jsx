import GoalListComponent from '@/components/Goal/GoalList';
import { Tabs } from 'antd-mobile';
import GoalListDone from '@/components/Goal/GoalListDone';

function GoalList(props) {
	return (
		<div>
			<Tabs>
				<Tabs.Tab title='Danh sách mới' key='fruits'>
					<GoalListComponent />
				</Tabs.Tab>
				<Tabs.Tab title='Danh sách đã tối yêu' key='fruits 1'>
					<GoalListDone />
				</Tabs.Tab>
			</Tabs>
		</div>
	);
}

export default GoalList;