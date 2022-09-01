import './_contactsList.scss';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeliteContact }) => (
  <ul className="contacts__list">
    {contacts.map(contact => (
      <li key={contact.id} className="contacts__item">
        <div className="contacts__item__strings__box">
          <p className="contacts__item__name">{contact.name}:</p>
          <p className="contacts__item__number">{contact.number}</p>
          <button
            onClick={() => onDeliteContact(contact.id)}
            className="contacts__delete"
            type="button"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeliteContact: PropTypes.func,
};
