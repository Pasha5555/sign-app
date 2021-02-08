import React from 'react';
import './SignIn.scss';

export const SignIn = () => {
  return (
    <div className="sign-in">
      <h2 className="sign-in__header">Sign In</h2>
      <form
        action=""
        className="sign-in__form form"
      >
        <label htmlFor="email" className="form__labels">Email</label>
        <input 
          type="text" 
          className="form__inputs" 
          id="email" 
        />
        <label htmlFor="password" className="form__labels">Password</label>
        <input 
          type="password" 
          className="form__inputs" 
          id="email" 
        />

        <button className="form__submit">Sign In</button>
      </form>
      <p className="sign-in__text-sign-up">
        Don’t have an account yet?
      </p>
      <a href="" className="sign-in__link-sign-up">Sign Up</a>
    </div>
  )
}