import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItems.module.css';
import defaultAvatar from '../Profile/defaultAvatar.jpg';
const FriendListItems = ({ avatar, isOnline, name }) => {
  return (
    <>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="friend avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItems.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItems.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default FriendListItems;
