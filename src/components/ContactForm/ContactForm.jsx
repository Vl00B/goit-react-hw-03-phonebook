import { PropTypes } from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetState();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={`${s.phonebook} container`}>
        <h1 className="title">Phonebook</h1>
        <label>
          <span className={s.contact_property}>Name</span>
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <span className={s.contact_property}>Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <label>
          <button type="submit">Add contact</button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
