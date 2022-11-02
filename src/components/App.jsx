import { nanoid } from 'nanoid'
import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: ''
  }

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  addContact = ({ name, number }) => {
    const isNameAdded = name.toUpperCase();
    let isAdded = false;

    this.state.contacts.forEach(el => {
      if (el.name.toUpperCase() === isNameAdded) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

  }

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const isAddedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(isAddedFilter)
    );
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    const { filter } = this.state;
    const getContacts = this.getContacts();
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.contact_title}>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          contacts={getContacts}
          onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
