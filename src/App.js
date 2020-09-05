import React from "react";
// import PropsTypes from "prop-types";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import users from "./json/user.json";
import statistics from "./json/statistical-data.json";
import friendsList from "./json/friendsList.json";
import transactions from "./json/transaction.json";

const App = () => {
  return (
    <>
      <Profile {...users}></Profile>
      <Statistics title="Upload Stats" stats={statistics}></Statistics>
      <FriendList friends={friendsList}></FriendList>
      <TransactionHistory operations={transactions}></TransactionHistory>
    </>
  );
};

export default App;
