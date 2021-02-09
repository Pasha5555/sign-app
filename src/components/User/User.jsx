import React from 'react';
import './User.scss';

export const User = ({ user }) => (
  <div className="user">
    <h2 className="user__header">
      Hello,
      {' '}
      {user && user.fullName}
      !
    </h2>
  </div>
);
