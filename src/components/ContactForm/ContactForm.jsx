import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import './ContactForm.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="input"
        />
      </label>
      <label className="label">
        Phone
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="input"
        />
      </label>
      <button type="submit" className="button">Add Contact</button>
    </form>
  );
}
