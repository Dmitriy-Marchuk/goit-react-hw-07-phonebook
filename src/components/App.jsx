import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import '../index.scss'
import ContactForm  from './ContactForm/ContactForm ';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = () => {

  const [contactsList, setContactsList] = useState(()=> JSON.parse(localStorage.getItem('contactsList')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contactsList));
  }, [contactsList])

  const onDeliteContact = (contactId) => {
    setContactsList(contactsList.filter(contact => contact.id !== contactId))};

  const formSubmitHandler = (data) => {
    const contactsNames = contactsList.map(contact =>
      contact.name);
    const contactsNumbers = contactsList.map(contact =>
      contact.number);
    
    if (contactsNames.find(contactsName => contactsName.toLowerCase() === data.name.toLowerCase())) {
      return alert(`${data.name} is already in contacts.`)
    } if (contactsNumbers.find(contactsNumber=> contactsNumber === data.number)) {
      return alert(`${data.number} is already in contacts`)
    }

    setContactsList([{
      id: nanoid(),
      name: data.name,
      number: data.number
    },
      ...contactsList])
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

    return (
      <div className="main-container">
        <div>
          <h2 className="title">Phonebook</h2>
          <ContactForm name={contactsList.name} onSubmit={formSubmitHandler} />
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList onDeliteContact={onDeliteContact} contacts={visibleContacts} />
        </div>
      </div>
    );
};

export default App;
