import Profile from './components/social-profile/Profile/Profile';
import user from './incoming-data/user.json';
import Statistics from './components/statistics/Statistics/Statistics';
import data from './incoming-data/data.json';
import FriendList from './components/friend-list/FriendList/FriendList';
import friends from './incoming-data/friends.json';
import TransactionHistory from './components/transaction-history/TransactionHistory/TransactionHistory';
import transactions from './incoming-data/transactions.json';

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
