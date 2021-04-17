import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import ContactsFinderInput from '../ContactsFinderInput';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/contacts/selectors';
import useStyles from './ContactsList.styles';

const ContactsList = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getVisibleContacts = (allContacts, value) => {
    const normalizedFilter = value.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContacts = getVisibleContacts(contacts, filter);

  const c = useStyles();

  return (
    <div className={c.container}>
      <h2 className="header">{title}</h2>
      <ContactsFinderInput />

      {contacts.length === 0 ? (
        <b>Add your first contact</b>
      ) : (
        <ul className={c.list}>
          {filteredContacts.map(({ name, id, number }) => (
            <ContactsListItem name={name} number={number} key={id} id={id} />
          ))}
        </ul>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
