import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  formSubmitHandler = user => {
    if (
      this.state.contacts.find(el => el.name.includes(user.name)) !== undefined
    ) {
      alert(`${user.name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, user],
      }));
    }
  };
  setFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  filterInputHandler = () =>
    this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  removeUser = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };
  render() {
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactList
          users={this.filterInputHandler()}
          removeUser={this.removeUser}
        />
      </div>
    );
  }
}
