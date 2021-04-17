import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import { getFilterValue, getContacts } from '../../redux/contacts/selectors';
import useStyles from './ContactsFinderInput.styles';

const ContactsFinderInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const onChange = e =>
    dispatch(contactsActions.filterContacts(e.target.value));

  const c = useStyles();

  return (
    contacts.length > 0 && (
      <form className={c.form}>
        <label className={c.label}>Find contacts by name</label>
        <input
          className={c.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Enter name"
        />
      </form>
    )
  );
};

export default ContactsFinderInput;
