import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './_contactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label" htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className="form__label" htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className="form__input"
          type="tel"
          name="number"
          id={this.numberInputId}
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
