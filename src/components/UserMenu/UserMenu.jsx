import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../media/avatar.png';
import Button from '../Button';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import { useStyles } from './UserMenu_styles';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const c = useStyles();

  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logout());

  return (
    <div className={c.userContainer}>
      <img
        className={c.avatar}
        src={avatar}
        alt="avatar"
        width="32"
        height="32"
      />
      <span className={c.name}>Welcome, {name}</span>
      <Button
        text="Logout"
        variant="contained"
        color="primary"
        onClick={onLogout}
        style={{
          backgroundColor: '#2196F3',
        }}
      ></Button>
    </div>
  );
};

export default UserMenu;
