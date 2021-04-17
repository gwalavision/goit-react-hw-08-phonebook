import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import contactsActions from '../contacts/actions';

const type = createReducer('', {
  [authActions.registerRequest]: () => 'register',
  [authActions.loginRequest]: () => 'login',
  [authActions.logoutRequest]: () => 'logout',
  [authActions.getCurrentRequest]: () => 'getCurrent',
  [contactsActions.addContactRequest]: () => 'add',
  [contactsActions.deleteContactRequest]: () => 'delete',
  [contactsActions.fetchContactRequest]: () => 'fetch',
});

const isLoading = createReducer('', {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.logoutRequest]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,

  [authActions.getCurrentRequest]: () => true,
  [authActions.getCurrentSuccess]: () => false,
  [authActions.getCurrentError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactFailure]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactFailure]: () => false,

  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactFailure]: () => false,
});

export default combineReducers({
  type,
  isLoading,
});
