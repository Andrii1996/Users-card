import React from 'react';

export const UserCards = ({ users, value }) => {
console.log(value);
  const filteredUsers = [...users].filter(user => {
    return user.name.first.toLowerCase().includes(value.toLowerCase())
  });

  return (
    <ul className="user">
      {filteredUsers.map((user) => (
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
}