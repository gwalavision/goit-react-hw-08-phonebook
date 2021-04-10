import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsInput from '../components/ContactsInput';
import ContactsList from '../components/ContactsList';
import { fetchContacts } from '../redux/contacts/operations';

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []); //eslint-disable-line
  return (
    <>
      <ContactsInput title="Phonebook" />
      <ContactsList title="Contacts" />
    </>
  );
};

export default ContactsView;
