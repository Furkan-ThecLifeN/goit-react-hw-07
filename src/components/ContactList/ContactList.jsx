import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import './ContactList.css';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className="list">
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className="item">
          <span>{name}: {phone}</span>
          <button onClick={() => dispatch(deleteContact(id))} className="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
