import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !number) {
      alert('Please fill in all fields.');
      return;
    }

    onAddContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='form-input'>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className='form-input'>
        Number:
        <input
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>
      <button className='form-button' type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;