import React from 'react';

export const FilteredUsers = ({ handleChange, value }) => (
  <input
    placeholder="find user"
    name="value"
    className="input"
    onChange={handleChange}
    vlaue={value}
  />
);