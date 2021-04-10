import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <NavLink exact to={routes.home}>
        Home
      </NavLink>
      <NavLink to={routes.contacts}>Contacts</NavLink>

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
