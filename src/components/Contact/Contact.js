import { useDeleteContactMutation } from 'redux/contactsSlice';
import './_contact.scss';

const Contact = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { id, name, phone } = contact;

  return (
    <div className="contacts__item__strings__box">
      <div style={{ display: 'flex' }}>
        <p className="contacts__item__name">{name}:</p>
        <p className="contacts__item__number">{phone}</p>
      </div>
      <button
        onClick={() => deleteContact(id)}
        className="contacts__delete"
        type="button"
      >
        {isDeleting ? <>Deleting...</> : <>Delete</>}
      </button>
    </div>
  );
};

export default Contact;
