import React from 'react';
import './UserCards.css';

export const UserCards = ({ users, value }) => {
  const filteredUsers = users.filter(user => {
    const fullname = user.name.first + ' ' + user.name.last;
    return fullname.toLowerCase().includes(value.toLowerCase())
    || user.email.toLowerCase().includes(value.toLowerCase())
    || user.cell.includes(value)
  });
  
  return (
    <div>
      {
        filteredUsers.length > 0
        ? (
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
                <p className="user__email">
                <span>Email :</span>{' ' + user.email}
                </p>
                <p>
                <span>Phone :</span>{' ' + user.cell}
                </p>
              </li>
            ))}
          </ul>
        )
        : (
          <div className="user__alert">
            Not found Users
          </div>
        )
      }
    </div>
  );
}
