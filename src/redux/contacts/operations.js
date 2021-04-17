import { axios } from '../../services';
import contactsActions from './actions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactFailure(error));
  }
};

export const addContact = contact => dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactFailure(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactFailure(error)));
};
