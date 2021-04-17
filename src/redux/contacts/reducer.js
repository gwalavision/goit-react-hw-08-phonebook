import { combineReducers, createReducer } from '@reduxjs/toolkit';
import contactsActions from './actions';

console.log();

const items = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],

  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
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

const filter = createReducer('', {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

const query = createReducer(
  { name: '', number: '' },
  {
    [contactsActions.setNameQueryInput]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [contactsActions.setNumberQueryInput]: (state, { payload }) => ({
      ...state,
      number: payload,
    }),
  },
);

export default combineReducers({
  items,
  filter,
  loading,
  query,
});
