import FloatButton from '@/components/FloatButton';
import GoalItemStatus from '@/components/Goal/GoalItemStatus';
import LoadingComponent from '@/components/Loading';
import NavBarBack from '@/components/NavBarBack';
import RandomUserViewer from '@/components/RandomUserViewer';
import styles from '@/styles/goals/detail.module.scss'; // Import the CSS module
import { Toast } from 'antd-mobile';
import { HeartFill } from 'antd-mobile-icons';
import classNames from 'classnames';
import { useGoalDetails, useLikeGoal } from 'hooks/swr/useGoal';
import HeaderSeo from '@/components/HeaderSeo';

const DetailUnoptimized = ({ idGoal }) => {
  const likeGoal = useLikeGoal();
  const { goalDetails, isLoading, mutate } = useGoalDetails(idGoal, true);
  if (isLoading) {
    return <LoadingComponent />
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
    <NavBarBack title="Xem mục tiêu">
      <HeaderSeo
        title='Chia Sẻ Mục Tiêu'
        desc='Khám phá và chia sẻ mục tiêu của bạn với cộng đồng'
        image='/image/ShareGoals.jpg'
      />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.body}>
            <div className={styles.detailItem}>
              <div className={styles.title}>ID Game</div>
              <div className={classNames(styles.content, styles.idGame)}>{goalDetails?.idGame}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.title}>Mục Tiêu 2024</div>
              <div className={styles.content}>{goalDetails?.target}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.title}>Ghi Chú</div>
              <div className={styles.content}>{goalDetails?.note}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.title}>Số lướt thích</div>
              <div className={styles.content}>{goalDetails?.like}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.title}>Trạng thái</div>
              <div className={styles.content}>
                <GoalItemStatus status={goalDetails?.status} />
              </div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.title}>Thuộc Game</div>
              <div className={styles.content}>{goalDetails?.inGame}</div>
            </div>
          </div>
          <RandomUserViewer />
        </div>
        <FloatButton icon={<HeartFill color='red' />} onClick={handleLike} />
      </div>
    </NavBarBack>
  );
};

export default DetailUnoptimized;
