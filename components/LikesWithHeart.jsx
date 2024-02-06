import React from 'react';
import { Space } from 'antd';
import { HeartFill } from 'antd-mobile-icons';
import Styles from '@/styles/components/likesWithHeart.module.scss';
import classNames from 'classnames';
import { SpinLoading } from 'antd-mobile';
import PropTypes from 'prop-types';

function LikesWithHeart({ likes = 0, onClick, isLoading }) {
  if (likes < 0) {
    likes = 0;
  }

  if (isLoading) {
    return <SpinLoading style={{ '--size': '17px' }} />
  }

  return (
    <Space align="center" style={{ gap: 4 }}>
      <div className='text-xs'>{likes}</div>
      <div className={classNames(Styles.box, "cursor-pointer")} onClick={onClick}>
        <HeartFill color='red' />
      </div>
    </Space>
  );
}

LikesWithHeart.propTypes = {
  likes: PropTypes.number, // likes là một số
  onClick: PropTypes.func, // onClick là một hàm
  isLoading: PropTypes.bool // isLoading là một boolean
};

LikesWithHeart.defaultProps = {
  likes: 0, // Giá trị mặc định cho likes là 0
  onClick: null, // Giá trị mặc định cho onClick là null, có thể cần là () => {} nếu bạn muốn một hàm rỗng
  isLoading: false // Giá trị mặc định cho isLoading là false
};

export default LikesWithHeart;