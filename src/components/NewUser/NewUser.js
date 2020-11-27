import React from 'react';

export const NewUser = ({ handleClick, handleChange, count }) => (
  <div>
    <input
      name="count"
      type="text"
      className="input"
      value={count}
      onChange={handleChange}
    />
    <button
      type="button"
      name="add"
      className="button"
      onClick={handleClick}
    >
      Add user
    </button>
  </div>

)