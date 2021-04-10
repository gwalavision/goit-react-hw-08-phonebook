import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/actions';
import { getFilterValue } from '../../redux/contacts/selectors';

const ContactsFinderInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const onChange = e => dispatch(filterContacts(e.target.value));

  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </form>
  );
};

export default ContactsFinderInput;
