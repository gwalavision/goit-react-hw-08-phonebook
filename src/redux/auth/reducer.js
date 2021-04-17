import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authActions } from '.';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialState,
  [authActions.getCurrentSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.registerSuccess]: () => true,
  [authActions.getCurrentSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
