import React from "react";
import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

const Transaction = ({ type, amount, currency, idx }) => {
  return (
    <tr className={idx % 2 === 0 ? styles.bodyDark : styles.bodyLight}>
      <td className={styles.typeTransaction}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};
export default Transaction;
