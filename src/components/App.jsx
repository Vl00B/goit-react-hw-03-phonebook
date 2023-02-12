import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './ContactFilter/ContactFilter';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
      { name: 'Hermione Kline', number: '443-89-12', id: nanoid() },
      { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
      { name: 'Annie Copeland', number: '227-91-26', id: nanoid() },
    ],
    filter: '',
  };

  toAddContact = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };

    const found = this.state.contacts.find(
      element =>
        element.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );

    if (found) {
      alert('There is already contact with this name.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  toFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  toRemoveContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactID !== contact.id),
    }));
  };

  onFilter = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(
        contact =>
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
  };

  render() {
    return (
      <>
        <ContactForm onSubmitForm={this.toAddContact} />

        {this.state.contacts.length ? (
          <ContactsList
            contacts={this.onFilter()}
            children={
              <Filter
                toFilterContacts={this.toFilter}
                filter={this.state.filter}
              />
            }
            deleteContact={this.toRemoveContact}
          />
        ) : (
          <div className="container">
            <h2>There are no contacts yet.</h2>
          </div>
        )}
      </>
    );
  }
}
