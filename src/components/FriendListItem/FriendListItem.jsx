import PropTypes from 'prop-types';

import { ItemOfFriends, Status, Image, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <ItemOfFriends>
      <Status>{status}</Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Text>{name}</Text>
    </ItemOfFriends>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};
