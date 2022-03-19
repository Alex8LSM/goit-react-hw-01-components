import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
  <div>    
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
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
