import React from 'react';
import '../FilteredUsers/FilteredUsers.css';

export const FilteredUsers = ({ handleChange, value }) => (
  <div className="ui input" id="input">
    <input
      placeholder="find user"
      name="value"
      onChange={handleChange}
      vlaue={value}
    />
  </div>

);