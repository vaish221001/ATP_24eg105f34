import React from 'react';

const User = ({ image, name, email }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} className="user-image" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <button className="profile-btn">Profile</button>
      </div>
    </div>
  );
};

export default User;
