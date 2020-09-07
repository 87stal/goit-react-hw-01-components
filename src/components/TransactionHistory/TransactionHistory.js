import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction';

const TransactionHistory = ({ operations }) => {
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
        {operations.map((operation, idx) => (
          <Transaction
            key={operation.id}
            type={operation.type}
            amount={operation.amount}
            currency={operation.currency}
            idx={idx}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  operations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
