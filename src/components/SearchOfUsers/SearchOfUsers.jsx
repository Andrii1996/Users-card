import React from 'react';
import '../SearchOfUsers/SearchOfUsers.css';

export const SearchOfUsers = ({ handleChange, value }) => (
  <div className="ui input" id="input">
    <input
      placeholder="find user"
      name="value"
      onChange={handleChange}
      value={value}
    />
  </div>

);