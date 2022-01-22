import FriendListItem from '../FriendListItem/FriendListItem';
import { Section, FriendsList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Section>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </Section>
  );
};

export default FriendList;
