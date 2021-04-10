import { Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import { routes } from './routes';
import AppBar from './components/AppBar';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.contacts} component={ContactsView} />
        <Route path={routes.signup} component={SignupView} />
        <Route path={routes.login} component={LoginView} />
      </Switch>
    </>
  );
}

export default App;
