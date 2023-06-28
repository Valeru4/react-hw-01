import PropTypes from 'prop-types';

import {
  ContainerProfile,
  DescriptionProfile,
  Image,
  TextName,
  Text,
  ListProfile,
  ItemProfile,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ContainerProfile>
      <DescriptionProfile>
        <Image src={avatar} alt="User avatar" />
        <TextName>{username}</TextName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </DescriptionProfile>

      <ListProfile>
        <ItemProfile>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{followers}</ItemQuantity>
        </ItemProfile>
        <ItemProfile>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{views}</ItemQuantity>
        </ItemProfile>
        <ItemProfile>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{likes}</ItemQuantity>
        </ItemProfile>
      </ListProfile>
    </ContainerProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
