import './_contactForm.scss';
import { useCreateContactMutation } from 'redux/contactsSlice';
import { useState } from 'react';

const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, phone };
    createContact(contact);
    reset();
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
        value={name}
        onChange={handleChange}
      />
      <label className="form__label" htmlFor="inputNumber">
        Number
      </label>
      <input
        className="form__input"
        type="tel"
        name="phone"
        id="inputNumber"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={handleChange}
      />
      <button className="form__button" type="submit">
        {isLoading ? <>Adding...</> : <>Add contact</>}
      </button>
    </form>
  );
};

export default ContactForm;
