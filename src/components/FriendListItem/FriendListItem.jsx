import PropTypes from 'prop-types';

import { ItemOfFriends, Status, Image, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <ItemOfFriends>
      <Status status={status} />
      <Image src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </ItemOfFriends>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
