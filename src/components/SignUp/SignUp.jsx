import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaQuestionCircle } from 'react-icons/fa';
// import { VscTriangleDown } from 'react-icons/vsc';
import PropTypes from 'prop-types';

import './SignUp.scss';

export const SignUp = ({
  addUser,
  setEmail,
  email,
  setPassword,
  password,
  handleDisplayPassword,
}) => {
  const [fullName, setFullName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValidFullName, setIsValidFullName] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const history = useHistory();

  const isValidData = useCallback((e) => {
    e.preventDefault();

    const validFullname
      = /^([A-Z]{1})+([a-z]{2,})+\s+([A-Z]{1})+([a-z]{2,})/g;
    const validEmail
      = /^([\S]{3,})+@+([\S]{3,})+\.+([\w]{2,})/g;
    const bigLetters = /^[A-Z]{2,}/;
    const specialSymbols = /[^\d\sA-Z]{1,}/gi;

    if (fullName.match(validFullname)) {
      setIsValidFullName(true);
    } else {
      setIsValidFullName(false);
    }

    if (email.match(validEmail)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    if (password.match(specialSymbols) && password.match(bigLetters)
      && password.length > 7) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }

    if (repeatPassword && repeatPassword === password) {
      setIsValidRepeatPassword(true);
    } else {
      setIsValidRepeatPassword(false);
    }

    const newUser = {
      fullName,
      email,
      password,
    };

    const validData = isValidFullName && isValidPassword
     && isValidEmail && repeatPassword;

    if (validData) {
      addUser(newUser);
      history.push('/user');
    }
  }, [fullName, password, email, repeatPassword]);

  const validMessage = useCallback(field => (
    <span className="error-message">
      Enter valid
      {' '}
      {field}
    </span>
  ), [fullName, password, email, repeatPassword]);

  return (
    <div className="sign-up">
      <h2 className="sign-up__header">Sign Up</h2>
      <form
        action=""
        className="sign-up__form"
        onSubmit={
          isValidData
        }
      >

        <label
          htmlFor="fullName"
          className="sign-up__form-labels"
        >
          Full name
        </label>
        <input
          type="text"
          className={classNames('sign-up__form-inputs', {
            'sign-up__wrong-fields': isValidFullName === false,
          })}
          id="fullName"
          value={fullName}
          onChange={({ target }) => {
            setFullName(target.value);
            setIsValidFullName(true);
          }}

        />
        {
          isValidFullName === false && validMessage('full name')
        }

        <label
          htmlFor="email"
          className="sign-up__form-labels"
        >
          Email
        </label>
        <input
          type="text"
          className={classNames('sign-up__form-inputs', {
            'sign-up__wrong-fields': isValidEmail === false,
          })}
          id="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
            setIsValidEmail(true);
          }}
        />
        {
          isValidEmail === false && validMessage('email')
        }

        <label
          htmlFor="password"
          className="sign-up__form-labels"
        >
          Password
        </label>
        <p
          className="sign-up__icon-question"
          data-tooltip="Password must contain 8+ symbols,
           1 special and 2 capital letters"
          // onFocus={<VscTriangleDown />}
        >
          <FaQuestionCircle style={{
            color: 'grey',
            height: '12px',
            width: '12px',
            opacity: 0.6,
          }}
          />
        </p>
        <input
          type="password"
          className={classNames('sign-up__form-inputs', {
            'sign-up__wrong-fields': isValidPassword === false,
          })}
          id="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
            setIsValidPassword(true);
          }}
        />
        <button
          type="button"
          className="sign-up__icon-eye"
          onClick={() => {
            handleDisplayPassword(
              'password',
              setShowPassword,
              showPassword,
            );
          }}
        >
          {
            showPassword ? <FaRegEye /> : <FaRegEyeSlash />
          }
        </button>
        {
          isValidPassword === false && validMessage('password')
        }

        <label
          htmlFor="repeatPassword"
          className="sign-up__form-labels"
        >
          Password
        </label>
        <input
          type="password"
          className={classNames('sign-up__form-inputs', {
            'sign-up__wrong-fields': isValidRepeatPassword === false,
          })}
          id="repeatPassword"
          value={repeatPassword}
          onChange={({ target }) => {
            setRepeatPassword(target.value);
            setIsValidRepeatPassword(true);
          }}
        />
        <button
          type="button"
          className="sign-up__icon-eye"
          onClick={() => {
            handleDisplayPassword(
              'repeatPassword',
              setShowRepeatPassword,
              showRepeatPassword,
            );
          }}
        >
          {
            showRepeatPassword ? <FaRegEye /> : <FaRegEyeSlash />
          }
        </button>
        {
          isValidRepeatPassword === false && (
            <span className="error-message">
              Repeat password
            </span>
          )
        }
        <button type="submit" className="form__submit">Sign Up</button>
      </form>
      <p className="sign-up__text-sign-in">
        Don’t have an account yet?
      </p>
      <Link to="/sign-in">
        <p className="sign-up__link-sign-in">Sign In</p>
      </Link>
    </div>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleDisplayPassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
