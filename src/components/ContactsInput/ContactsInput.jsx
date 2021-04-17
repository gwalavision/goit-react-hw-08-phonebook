import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import contactsActions from '../../redux/contacts/actions';
import {
  getContacts,
  getNameQuery,
  getNumberQuery,
} from '../../redux/contacts/selectors';
import React from 'react';
import Button from '../Button';
import useStyles from './ContactsInput.styles';

const ContactsInput = ({ title }) => {
  const queryName = useSelector(getNameQuery);
  const queryNumber = useSelector(getNumberQuery);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name'
      ? dispatch(contactsActions.setNameQueryInput(value))
      : dispatch(contactsActions.setNumberQueryInput(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.length > 0) {
      const existedContact = contacts.find(
        contact => contact.name === queryName,
      );
      const existedNumber = contacts.find(
        contact => contact.number === queryNumber,
      );
      if (existedContact) {
        return alert(`${queryName} is already in contacts`);
      } else if (existedNumber) {
        return alert(`${queryNumber} is assigned to another user`);
      }
    }
    const newContact = {
      name: queryName,
      id: uuid4(),
      number: queryNumber,
    };

    dispatch(addContact(newContact));
    dispatch(contactsActions.setNameQueryInput(''));
    dispatch(contactsActions.setNumberQueryInput(''));
  };

  const c = useStyles();

  return (
    <div>
      <h2 className="header">{title}</h2>
      <form className={c.form} onSubmit={handleSubmit}>
        <label className={c.label}>Name</label>
        <input
          className={c.input}
          type="text"
          name="name"
          required
          value={queryName}
          onChange={handleInputChange}
        />
        <label className={c.label}>Number</label>
        <input
          className={c.input}
          type="tel"
          name="number"
          required
          value={queryNumber}
          onChange={handleInputChange}
        />
        <label>
          <Button
            text="Add contact"
            variant="contained"
            onClick={handleSubmit}
            style={{
              padding: '2px 10px',
            }}
          ></Button>
        </label>
      </form>
    </div>
  );
};

ContactsInput.defaultProps = {
  value: '',
};

ContactsInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(ContactsInput);
