import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

export const Filter = ({ filter, toFilterContacts }) => {
  return (
    <section>
      <h3 className={s.prompt}>Find contact by name</h3>
      <input
        className={s.filter}
        type="text"
        name="filter"
        value={filter}
        onChange={toFilterContacts}
      />
    </section>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  toFilterContacts: PropTypes.func.isRequired,
};
