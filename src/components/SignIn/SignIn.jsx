import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { FaTimes, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SignIn.scss';

export const SignIn = ({
  email,
  setEmail,
  password,
  setPassword,
  authUser,
  handleDisplayPassword,
}) => {
  const [showErrorUser, setShowErrorUser] = useState(null);
  const [wasEmail, setWasEmail] = useState(null);
  const [wasPassword, setWasPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const isAuthTrue = useCallback((e) => {
    e.preventDefault();

    if (authUser !== undefined) {
      history.push(`/user`);
    } else {
      setWasEmail(false);
      setWasPassword(false);
      setShowErrorUser(true);
    }
  }, [password, email]);

  return (
    <div className="sign-in">
      <h2 className="sign-in__header">Sign In</h2>
      <form
        action=""
        onSubmit={isAuthTrue}
        className="sign-in__form form"
      >
        <label
          htmlFor="email"
          className="form__labels"
        >
          Email
        </label>
        <input
          type="text"
          className={classNames('form__inputs', {
            'form__wrong-fields': wasEmail === false,
          })}
          id="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
            setShowErrorUser(false);
            setWasEmail(true);
          }}
        />
        <label
          htmlFor="password"
          className="form__labels"
        >
          Password
        </label>
        <input
          type="password"
          className={classNames('form__inputs', {
            'form__wrong-fields': wasPassword === false,
          })}
          id="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
            setShowErrorUser(false);
            setWasPassword(true);
          }}
        />
        <button
          type="button"
          className="sign-in__icon-eye"
          onClick={() => {
            handleDisplayPassword(
              'password',
              setShowPassword,
              showPassword,
            );
          }}
        >
          {
            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
          }
        </button>

        <button type="submit" className="form__submit">Sign In</button>
      </form>
      <p className="sign-in__text-sign-up">
        Don’t have an account yet?
      </p>
      <Link to="/sign-up">
        <p className="sign-in__link-sign-up">Sign Up</p>
      </Link>

      {
        email && password && showErrorUser && (
          <div className="sign-in__wrong-message">
            Wrong email or password
            <button
              type="button"
              className="sign-in__button-x"
              onClick={() => setShowErrorUser(false)}
            >
              <FaTimes />
            </button>
          </div>
        )
      }
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleDisplayPassword: PropTypes.func.isRequired,
};
