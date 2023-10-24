import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      alert('Please fill in all fields.');
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label className='form-input'>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className='form-input'>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className='form-button' type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;