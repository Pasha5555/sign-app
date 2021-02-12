import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import arrow from '../Images/IconArrow.png';

export const Home = () => (
  <div className="home">
    <h2 className="home__header">Ready for a great User experience?</h2>
    <p className="home__text">Bring your media to the next level!</p>
    <div className="home__button-container">
      <Link to="sign-up">
        <button
          type="button"
          className="home__button home__button--sign-up"
        >
          Sign Up
        </button>
      </Link>
      <Link to="sign-in">
        <button
          type="button"
          className="home__button home__button--sign-in"
        >
          <img src={arrow} alt="icon arrow" />
        </button>
      </Link>
    </div>
  </div>
);
