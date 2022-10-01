import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import './_contactForm.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const getContactsStore = useSelector(getContacts);

  const handleSubmit = e => {
    const form = e.target;
    const name = form.elements.name.value;

    e.preventDefault();

    if (getContactsStore) {
      getContactsStore.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
        ? alert(name + ' is already in contact book')
        : dispatch(
            addContact(form.elements.name.value, form.elements.number.value)
          );
    }
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="inputName">
        Name
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="inputName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className="form__label" htmlFor="inputNumber">
        Number
      </label>
      <input
        className="form__input"
        type="tel"
        name="number"
        id="inputNumber"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
