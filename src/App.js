import { Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { routes } from './routes';

import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ModalLoader from './components/ModalLoader';
import useStyles from './App.styles';
import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const SignupView = lazy(() =>
  import('./views/SignupView' /* webpackChunkName: "signup-page" */),
);

function App() {
  const dispatch = useDispatch();
  const c = useStyles();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []); //eslint-disable-line

  return (
    <div className={c.app}>
      <ModalLoader />
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsView}
            redirectTo={routes.login}
          />
          <PublicRoute
            path={routes.signup}
            component={SignupView}
            redirectTo={routes.contacts}
            restricted
          />
          <PublicRoute
            path={routes.login}
            component={LoginView}
            redirectTo={routes.contacts}
            restricted
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
