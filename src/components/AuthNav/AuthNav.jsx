import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const AuthNav = () => {
  return (
    <>
      <NavLink to={routes.signup}>Sign Up</NavLink>
      <NavLink to={routes.login}>Log In</NavLink>
    </>
  );
};

export default AuthNav;
