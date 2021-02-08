import React from 'react';
import './SignUp.scss';

export const SignUp = () => {
  return (
    <div className="sign-up">
      <h2 className="sign-up__header">Sign Up</h2>
      <form
        action=""
        className="sign-up__form"
      >
        <label htmlFor="fullName" className="sign-up__form-labels">Full name</label>
        <input 
          type="text" 
          className="sign-up__form-inputs" 
          id="fullName" 
        />
        <label htmlFor="email" className="sign-up__form-labels">Email</label>
        <input 
          type="text" 
          className="sign-up__form-inputs" 
          id="email" 
        />
        <label htmlFor="password" className="sign-up__form-labels">Password</label>
        <input 
          type="password" 
          className="sign-up__form-inputs" 
          id="email" 
        />
        <label htmlFor="repeatPassword" className="sign-up__form-labels">Password</label>
        <input 
          type="password" 
          className="sign-up__form-inputs" 
          id="repeatPassword" 
        />

        <button className="form__submit">Sign Up</button>
      </form>
      <p className="sign-up__text-sign-in">
        Don’t have an account yet?
      </p>
      <a href="" className="sign-up__link-sign-in">Sign Up</a>
    </div>
  )
}