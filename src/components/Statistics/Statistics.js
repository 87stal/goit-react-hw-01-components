import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import randColor from "./randomColor";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: randColor() }}
          >
            <span className={styles.label}>{stat.label} </span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
