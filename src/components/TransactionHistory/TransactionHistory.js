import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.headers}>
        <tr className={styles.line}>
          <th className={styles.column}>Type</th>
          <th className={styles.column}>Amount</th>
          <th className={styles.column}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map((transaction, idx) => (
          <tr
            className={idx % 2 === 0 ? styles.bodyDark : styles.bodyLight}
            key={transaction.id}
          >
            <td className={styles.typeTransaction}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
export default TransactionHistory;
