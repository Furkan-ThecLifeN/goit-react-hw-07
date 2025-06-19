import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
import { deleteContact } from '../redux/contactsOps';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
