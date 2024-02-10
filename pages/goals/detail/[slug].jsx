import React from 'react';
import styles from '@/styles/goals/detail.module.scss'; // Import the CSS module
import GoalItemStatus from '@/components/Goal/GoalItemStatus';
import { HeartFill } from 'antd-mobile-icons';
import FloatButton from '@/components/FloatButton';
import classNames from 'classnames';
import NavBarBack from '@/components/NavBarBack';

const GoalDetail = () => {
  // Dữ liệu mẫu
  const goal = {
    idGame: "phuchoa00",
    target: "Đạt level 30",
    note: "Cần tập trung vào kỹ năng chiến đấu",
    inGame: "Avatar 3x",
    status: 1,
    like: 30
  };

  return (
    <NavBarBack title="Xem mục tiêu">
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
              <div className={styles.content}>{goal.like}</div>
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
        </div>
        <FloatButton icon={<HeartFill color='red' />} />
      </div>
    </NavBarBack>
  );
};

export default GoalDetail;
