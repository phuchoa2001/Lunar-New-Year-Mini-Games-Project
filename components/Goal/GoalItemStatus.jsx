import React from 'react';
import { Tag } from 'antd-mobile';
import { GOAL_STATUS_TAGS , GOAL_STATUS } from '../../constants/goal';
import PropTypes from 'prop-types';

const GoalItemStatus = ({ status }) => {
  const statusInfo = GOAL_STATUS_TAGS[status];

  if (!statusInfo) {
    return null;
  }

  return (
    <Tag color={statusInfo.color}>
      {statusInfo.text}
    </Tag>
  );
};

const validStatusKeys = [
  ...Object.keys(GOAL_STATUS), // Lấy các keys dưới dạng chuỗi
  ...Object.keys(GOAL_STATUS).map(Number) // Chuyển đổi các keys thành số
];

GoalItemStatus.propTypes = {
  status: PropTypes.oneOf(validStatusKeys).isRequired,
};

export default GoalItemStatus;
