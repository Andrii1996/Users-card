import React from 'react';

export const UserCards = ({ users }) => (
  <ul className="user">
    {users.map((user) => (
      <li key={user.cell} className="user__card">
        <img
          src={user.picture.large}
          alt="img"
          className="user__img"
        />
        <p>
          <span>Name :</span>{' ' + user.name.first + ' ' + user.name.last}
        </p>
        <p>
          Email : {' ' + user.email}
        </p>
        <p>
          Phone : {' ' + user.cell}
        </p>
      </li>
    ))}
  </ul>
);