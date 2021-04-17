import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactFailure = createAction('contacts/fetchContactFailure');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactFailure = createAction('contacts/addContactFailure');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactFailure = createAction('contacts/deleteContactFailure');

const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/filter');

const setNameQueryInput = createAction('contacts/setNameQueryInput');
const setNumberQueryInput = createAction('contacts/setNumberQueryInput');

// eslint-disable-next-line
export default {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFailure,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactFailure,
  deleteContact,
  filterContacts,
  setNameQueryInput,
  setNumberQueryInput,
};
