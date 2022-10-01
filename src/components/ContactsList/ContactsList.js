import { useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';
import Contact from 'components/Contact/Contact';
import './_contactsList.scss';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const getNames = useSelector(getFilters).filter.toLowerCase().trim();

  const filteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(getNames)
    );
  };

  return (
    <ul className="contacts__list">
      {filteredContact().map(contact => (
        <li key={contact.id} className="contacts__item">
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
