import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button className='contacts-button' type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;