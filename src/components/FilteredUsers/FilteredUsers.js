import React from 'react';

export const FilteredUsers = ({ handleChange, value }) => (
  <div className="ui input">
    <input
      placeholder="find user"
      name="value"
      onChange={handleChange}
      vlaue={value}
    />
  </div>

);