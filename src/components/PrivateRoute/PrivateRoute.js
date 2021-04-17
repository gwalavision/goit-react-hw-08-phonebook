import { Redirect, Route } from 'react-router';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthentificated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthentificated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
