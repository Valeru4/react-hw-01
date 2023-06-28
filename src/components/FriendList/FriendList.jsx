import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListOfFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
