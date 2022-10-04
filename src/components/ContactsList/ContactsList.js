import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import './_contactsList.scss';
import { useEffect } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <ul className="contacts__list">
          {contacts.map(contact => (
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
