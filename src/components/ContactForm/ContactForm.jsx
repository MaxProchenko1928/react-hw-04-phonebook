import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      ...this.state,
      id: nanoid(),
    };
    // this.props.addContact(newContact);
    this.props.onSubmit(newContact);
    this.reset();
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            className={s.name}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            className={s.number}
            value={this.state.number}
            pattern="+?\d{0,4}[-.\s]??\d1,3??\d1,3??[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
