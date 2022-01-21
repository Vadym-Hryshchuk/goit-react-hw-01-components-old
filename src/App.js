import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
