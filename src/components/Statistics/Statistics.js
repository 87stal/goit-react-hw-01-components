import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randColor from "./randomColor";
import StatisticItem from "../StatisticItem/StatisticItem"

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.container}>
    {title.length > 0 &&(<h2 className={styles.title}>{title}</h2>) }
      <ul className={styles.statList}>
        {stats.map(({id, label, percentage}) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randColor() }}
          >
          <StatisticItem label ={label} percentage = {percentage}></StatisticItem>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),).isRequired,
};

export default Statistics;
