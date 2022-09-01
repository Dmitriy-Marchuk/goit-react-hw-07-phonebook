import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import '../index.scss'
import ContactForm  from './ContactForm/ContactForm ';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  onDeliteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };

    const contactsNames = this.state.contacts.map(contact =>
      contact.name);
    const contactsNumbers = this.state.contacts.map(contact =>
      contact.number);
    
    if (contactsNames.find(contactsName => contactsName.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts.`)
    } if (contactsNumbers.find(contactsNumber=> contactsNumber === data.number)) {
      return alert(`${data.number} is already in contacts`)
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="main-container">
        <div>
          <h2 className="title">Phonebook</h2>
          <ContactForm name={contacts.name} onSubmit={this.formSubmitHandler} />
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList onDeliteContact={this.onDeliteContact} contacts={visibleContacts} />
        </div>
      </div>
    );
  }
};

export default App;
