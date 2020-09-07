import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css';

const StatisticItem = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label} </span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
