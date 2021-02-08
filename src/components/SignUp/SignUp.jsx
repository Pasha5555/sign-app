import React, { useCallback, useState } from 'react';
import './SignUp.scss';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValidFullName, setIsValidFullName] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(null);

  const isValidData = useCallback((e) =>{
    e.preventDefault()

    const validFullname = 
      /^([A-Z]{1})+([a-z]{2,})+\s+([A-Z]{1})+([a-z]{2,})/g
    const validEmail = 
      /^([\S]{3,})+@+([\S]{3,})+\.+([\w]{2,})/g
    const bigLetters = /^[A-Z]{2,}/;
    const specialSymbols = /[^\d\sA-Z]{1,}/gi;

    if(fullName.match(validFullname)) {
      setIsValidFullName(true)
    } else setIsValidFullName(false)

    if(email.match(validEmail)) {
      setIsValidEmail(true)
    } else setIsValidEmail(false)

    if(password.match(specialSymbols) && password.match(bigLetters) 
      && password.length > 7) {
      setIsValidPassword(true)
    } else setIsValidPassword(false)

    if(repeatPassword && repeatPassword === password) {
      setIsValidRepeatPassword(true)
    } else setIsValidRepeatPassword(false)


  }, [fullName, password, email, repeatPassword])

  const validMessage = useCallback((field)=>{
    return (<span className="error-message">Enter valid {field}</span>)
  },[fullName, password, email, repeatPassword])

  console.log(password, repeatPassword)
  return (
    <div className="sign-up">
      <h2 className="sign-up__header">Sign Up</h2>
      <form
        action=""
        className="sign-up__form"
        onSubmit={isValidData}
      >

        <label htmlFor="fullName" className="sign-up__form-labels">Full name</label>
        <input 
          type="text" 
          className="sign-up__form-inputs" 
          id="fullName" 
          value={fullName}
          onChange={({target})=>{
            setFullName(target.value)
            setIsValidFullName(true)
          }}
        />
        {
          isValidFullName === false && validMessage('full name')
        }

        <label htmlFor="email" className="sign-up__form-labels">Email</label>
        <input 
          type="text" 
          className="sign-up__form-inputs" 
          id="email" 
          value={email}
          onChange={({target})=>{
            setEmail(target.value)
            setIsValidEmail(true)
          }}
        />
                {
          isValidEmail === false && validMessage('email')
        }

        <label htmlFor="password" className="sign-up__form-labels">Password</label>
        <input 
          type="password" 
          className="sign-up__form-inputs" 
          id="password" 
          value={password}
          onChange={({target})=>{
            setPassword(target.value)
            setIsValidPassword(true)
          }}
        />
        {
          isValidPassword === false && validMessage('password')
        }

        <label htmlFor="repeatPassword" className="sign-up__form-labels">Password</label>
        <input 
          type="password" 
          className="sign-up__form-inputs" 
          id="repeatPassword" 
          value={repeatPassword}
          onChange={({target})=>{
            setRepeatPassword(target.value)
            setIsValidRepeatPassword(true)
          }}
        />
        {
          isValidRepeatPassword === false && validMessage('repeated password')
        }

        <button className="form__submit">Sign Up</button>
      </form>
      <p className="sign-up__text-sign-in">
        Don’t have an account yet?
      </p>
      <a href="" className="sign-up__link-sign-in">Sign Up</a>
    </div>
  )
}