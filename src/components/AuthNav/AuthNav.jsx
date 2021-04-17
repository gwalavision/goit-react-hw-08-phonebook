import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const AuthNav = ({ className, activeClassName }) => {
  return (
    <>
      <NavLink
        className={className}
        activeClassName={activeClassName}
        to={routes.signup}
      >
        Sign Up
      </NavLink>
      <NavLink
        className={className}
        to={routes.login}
        activeClassName={activeClassName}
      >
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
