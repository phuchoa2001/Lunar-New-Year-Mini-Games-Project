import FloatButton from '@/components/FloatButton';
import GoalItemStatus from '@/components/Goal/GoalItemStatus';
import LoadingComponent from '@/components/Loading';
import NavBarBack from '@/components/NavBarBack';
import RandomUserViewer from '@/components/RandomUserViewer';
import styles from '@/styles/goals/detail.module.scss'; // Import the CSS module
import { Toast } from 'antd-mobile';
import { HeartFill } from 'antd-mobile-icons';
import { getGoalDetails, getGoalsList } from 'api/goalService';
import classNames from 'classnames';
import { useGoalDetails, useLikeGoal } from 'hooks/swr/useGoal';
import { useRouter } from 'next/router';
import DetailUnoptimized from './DetailUnoptimized';
import HeaderSeo from '@/components/HeaderSeo';

const GoalDetail = ({ goal, id }) => {
	const router = useRouter();
	const idGoal = goal ? goal["_id"] : null;
	const likeGoal = useLikeGoal();
	const { goalDetails, isLoading, mutate } = useGoalDetails(idGoal, !router.isFallback);

	if (router.isFallback) {
		return <DetailUnoptimized idGoal={idGoal} />;
	}

	const handleLike = async () => {
		const res = await likeGoal(idGoal)
		if (res.isSuccess) {
			mutate();
		} else {
			Toast.show({
				content: 'Có lỗi xảy ra!',
			})
		}
	}

	return (
		<NavBarBack title="Xem mục tiêu" >
			<HeaderSeo
				title={goal.idGame}
				desc={`Mục tiêu 2024 : ${goal.target} `}
				image='/image/ShareGoals.jpg'
			/>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.body}>
						<div className={styles.detailItem}>
							<div className={styles.title}>ID Game</div>
							<div className={classNames(styles.content, styles.idGame)}>{goal.idGame}</div>
						</div>
						<div className={styles.detailItem}>
							<div className={styles.title}>Mục Tiêu 2024</div>
							<div className={styles.content}>{goal.target}</div>
						</div>
						<div className={styles.detailItem}>
							<div className={styles.title}>Ghi Chú</div>
							<div className={styles.content}>{goal.note}</div>
						</div>
						<div className={styles.detailItem}>
							<div className={styles.title}>Số lướt thích</div>
							<div className={styles.content}>{isLoading ? <LoadingComponent /> : goalDetails.likes}</div>
						</div>
						<div className={styles.detailItem}>
							<div className={styles.title}>Trạng thái</div>
							<div className={styles.content}>
								<GoalItemStatus status={goal.status} />
							</div>
						</div>
						<div className={styles.detailItem}>
							<div className={styles.title}>Thuộc Game</div>
							<div className={styles.content}>{goal.inGame}</div>
						</div>
					</div>
					<RandomUserViewer />
				</div>
				<FloatButton icon={isLoading ? <LoadingComponent /> : <HeartFill color='red' />} onClick={handleLike} />
			</div>
		</NavBarBack>
	);
};

export async function getStaticProps(context) {
	const { params } = context;
	const { id } = params;
	const data = await getGoalDetails(id)

	return {
		props: {
			goal: data,
			id: id
		},
	};
}


export async function getStaticPaths() {
	const goals = await getGoalsList({
		limit: 1000,
		page: 1,
		filter: {
			status: 1,
		}
	});

	const paths = goals?.data.map(goal => ({
		params: { id: goal["_id"].toString() },
	}));

	return {
		paths,
		fallback: 'blocking', // có thể là true, false hoặc 'blocking'
	};
}

export default GoalDetail;
