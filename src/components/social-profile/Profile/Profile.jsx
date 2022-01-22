import PropTypes from 'prop-types';
import {
  ContainerProfile,
  Description,
  Avatar,
  UserName,
  UserDescription,
  StatsList,
  StatsItem,
  StatsText,
  StatsValue,
} from './Profile.styled';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserDescription>@{tag}</UserDescription>
        <UserDescription>{location}</UserDescription>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </StatsList>
    </ContainerProfile>
  );
};
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
