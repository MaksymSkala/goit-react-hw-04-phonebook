import React from 'react';
import './Filter.css';

const Filter = ({ filter, onFilterChange }) => (
  <label>
    Find contacts by name:
    <input className='filter-input'
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
    />
  </label>
);

export default Filter;