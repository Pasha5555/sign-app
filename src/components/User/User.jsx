import React from 'react';
import PropTypes from 'prop-types';
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

User.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
};
