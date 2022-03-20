import Profile from './Profile/Profile';
import user from 'data/user';
import Statistics from './Statistics/Statistics';
import data from 'data/data';
import FriendList from './FriendList/FriendList';
import friends from 'data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <h2>Task 2</h2>
      <div className="container">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <h2>Task 3</h2>
      <div className="container">
        <FriendList friends={friends} />
      </div>
      <h2>Task 4</h2>
      <div className="container">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
