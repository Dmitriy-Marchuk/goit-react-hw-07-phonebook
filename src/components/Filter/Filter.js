import React from 'react';
import './_filter.scss';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor="filterInput" className="filter__label">
      Find contacts by name
    </label>
    <input
      className="filter__input"
      id="filterInput"
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
