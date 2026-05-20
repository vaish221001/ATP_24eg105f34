import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user, index) => (
        <User 
          key={index} 
          name={user.name} 
          email={user.email} 
          image={user.image} 
        />
      ))}
    </div>
  );
};

export default UsersList;
