import avatar from '../../media/avatar.png';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" width="32" height="32" />
      <span>Welcome, {name}</span>
      <button type="button" onLogout={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
