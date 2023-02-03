import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactsList.module.css';

export class ContactsList extends Component {
  render() {
    return (
      <section className="container">
        <h2 className="title">Contacts</h2>

        {this.props.children}
        {/* Filter position */}

        <ul>
          {this.props.contacts.map(contact => {
            return (
              <li key={contact.id} className={s.contact}>
                <span className={s.contact_data}>
                  <p>{contact.name}:&nbsp;</p>
                  <p>{contact.number}</p>
                </span>
                <button
                  className={s.contact_button}
                  type="button"
                  onClick={() => {
                    this.props.deleteContact(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  children: PropTypes.node,
};
