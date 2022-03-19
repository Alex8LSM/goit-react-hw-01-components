import Profile from './Profile';
import user from './user';
import Statistics from './Statistics';
import data from './data';
import FriendList from './FriendList';
import friends from './friends';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions';


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
        {/* <Statistics stats={data} /> */}
      </div>
      <h2>Task 3</h2>
      <div><FriendList friends={friends} /></div>
      <h2>Task 4</h2>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
};
