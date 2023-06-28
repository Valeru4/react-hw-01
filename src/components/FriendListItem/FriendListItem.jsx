export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className="item">
      <span className={status}></span>
      <img src="{avatar} " alt="User avatar" width="48" />
      <p className={name}></p>
    </li>
  );
};
