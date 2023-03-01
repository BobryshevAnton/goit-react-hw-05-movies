import { useState } from 'react';
import css from './searchForm.module.css';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    e.target.reset();
    setValue('');
  };

  return (
    <Section>
      <div className={css.searchStyle}>
        <form autoComplete="on" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={css.searchInput}
            placeholder="Enter any film name"
            required
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </form>
      </div>
    </Section>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
