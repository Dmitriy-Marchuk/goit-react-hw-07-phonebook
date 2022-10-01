import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import './_contact.scss';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className="contacts__item__strings__box">
      <div style={{ display: 'flex' }}>
        <p className="contacts__item__name">{contact.name}:</p>
        <p className="contacts__item__number">{contact.number}</p>
      </div>
      <button onClick={handleDelete} className="contacts__delete" type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
