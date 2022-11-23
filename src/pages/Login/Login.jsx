/** @format */

import React, { useEffect } from 'react';
import 'pages/Login/Login.scss';
import SmallInput from 'components/inputs/SmallInput';
import PrimaryButton from 'components/buttons/PrimaryButton';
import { useState } from 'react';
import updateInputs from 'functions/updateInputs';
import useRequestToServer from 'hooks/useRequestToServer';
import loginSchema from 'validation/loginSchema';
import Errors from 'components/Errors/Errors';
const Login = () => {
  // useLoginToServer
  const loginToServer = useRequestToServer();
  // use state for inputs
  const [inputs, setInputs] = useState({ email: '', password: '' });
  // use state for error
  const [errors, setErrors] = useState();
  // function to change inputs
  const handleInputChange = ev => {
    updateInputs(ev, setInputs);
  };
  // validate inputs and login function
  const handleLogin = () => {
    setErrors(loginToServer(inputs, loginSchema, '/users/login'));
  };
 
  return (
    <div className='row login'>
      <div className='col-sm-5 d-flex flex-column justify-content-center gap-3'>
        <SmallInput
          type='email'
          datalabel='email'
          value={inputs.email}
          placeholder='E-mail'
          onchange={handleInputChange}
        />
        {errors && <Errors errors={errors.details} name="email"/>}
        <SmallInput
          type='password'
          datalabel='password'
          value={inputs.password}
          placeholder='Password'
          onchange={handleInputChange}
        />
        {errors && <Errors errors={errors.details} name="password"/>}
        <PrimaryButton
          type='button'
          onclick={handleLogin}
          placeholder='login'
        />
      </div>
      <div className='col-sm-7'>
        <img
          src='https://us.123rf.com/450wm/azindialany/azindialany2006/azindialany200600057/150352824-welcome-back-handwritten-lettering-hand-drawn-typography-good-for-scrap-booking-posters-greeting-car.jpg?ver=6'
          alt=''
        />
      </div>
    </div>
  );
};

export default Login;
