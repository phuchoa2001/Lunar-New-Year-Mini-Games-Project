import React from 'react';
import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import Styles from '@/styles/components/floatButton.module.scss';
import classNames from 'classnames';

const FloatButton = ({ icon, onClick }) => {
  return (
    <div className={Styles.boxButton}>
      <div className={classNames('container', Styles.container)}>
        <div
          className={Styles.floatButton}
          onClick={onClick}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

FloatButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FloatButton;
