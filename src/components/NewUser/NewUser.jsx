import React from 'react';

export const NewUser = ({ handleClick, handleChange, count }) => (
  <div>
    <div className="ui input">
      <input
        name="count"
        type="number"
        value={count}
        onChange={handleChange}
      />
    </div>
    <button
      type="button"
      name="button"
      className="ui button"
      onClick={handleClick}
    >
      Add user
    </button>
  </div>

)