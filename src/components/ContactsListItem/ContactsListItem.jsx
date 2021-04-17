import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Button from '../Button';
import useStyles from './ContactsListItem.styles';

const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteItem = e => {
    e.preventDefault();

    dispatch(deleteContact(id));
  };

  const c = useStyles();

  return (
    <li className={c.listItem}>
      <div className={c.data}>
        <span>{name}:</span>
        <span>{number}</span>
      </div>

      <Button
        text="Delete"
        variant="outlined"
        color="primary"
        onClick={deleteItem}
        style={{
          color: '#2196F3',
          borderColor: '#2196F3',
          fontSize: '10px',
          padding: '2px 10px',
          marginLeft: 'auto',
        }}
      ></Button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactsListItem;
