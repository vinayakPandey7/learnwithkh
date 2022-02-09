import React from 'react';
import './userList.css';

function UserList(props) {
  const { users } = props;
  return (
    <div className="App">
      {Array.isArray(users) && users.map(user => <p key={`user-${user.id}`}>{user.name}</p>)}
    </div>
  );
}

export default UserList;
