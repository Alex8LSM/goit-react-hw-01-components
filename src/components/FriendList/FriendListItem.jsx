import PropTypes from 'prop-types';
// import './FriendList.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="list">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'Green' : 'Red' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
