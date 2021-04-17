import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth/';
import { useSelector } from 'react-redux';
import useStyles from './AppBar.styles';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const c = useStyles();

  return (
    <header className={c.header}>
      <div>
        <NavLink
          className={c.link}
          activeClassName={c.linkActive}
          exact
          to={routes.home}
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            className={c.link}
            activeClassName={c.linkActive}
            to={routes.contacts}
          >
            Contacts
          </NavLink>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <AuthNav className={c.link} activeClassName={c.linkActive} />
        )}
      </div>
    </header>
  );
};

export default AppBar;
