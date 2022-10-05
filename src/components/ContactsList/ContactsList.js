import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import './_contactsList.scss';
import { useFetchContactsQuery } from 'redux/contactsSlice';

const ContactsList = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts?.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ul className="contacts__list">
          {filteredContacts.map(contact => (
            <li key={contact.id} className="contacts__item">
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
