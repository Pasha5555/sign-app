import React from 'react';
import './Home.scss';

import arrow from '../Images/IconArrow.png'

export const Home = () => {
  return (
    <div className="home">
      <h2 className="home__header">Ready for a great User experience?</h2>
      <p className="home__text">Bring your media to the next level!</p>
      <div className="home__button-container">
        <button className="home__button home__button--sign-up">Sign Up</button>
        <button className="home__button home__button--sign-in">
          <img src={arrow} alt="icon arrow" />
        </button>
      </div>
    </div>
  )
}