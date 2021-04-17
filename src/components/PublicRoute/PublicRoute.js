import { Redirect, Route } from 'react-router';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthentificated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthentificated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
