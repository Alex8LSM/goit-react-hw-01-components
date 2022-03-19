import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';


export const App = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <h2>Task 2</h2>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <h2>Task 3</h2>
      <div><FriendList friends={friends} /></div>
      <h2>Task 4</h2>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
