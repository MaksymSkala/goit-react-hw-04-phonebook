import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts, saveContacts } from './LocalStorage/localStorage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
      filter: '',
      name: '',
      number: '',
    };
  }

  addContact = (name, number) => {
    const existingContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };

    this.setState(
      (prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => {
        saveContacts(this.state.contacts);
      }
    );
  };

  deleteContact = (contactId) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
      }),
      () => {
        saveContacts(this.state.contacts);
      }
    );
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;