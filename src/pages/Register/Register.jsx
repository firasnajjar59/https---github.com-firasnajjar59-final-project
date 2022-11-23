/** @format */

import SmallInput from 'components/inputs/SmallInput';
import React from 'react';
import 'pages/Register/Register.scss';
import PrimaryButton from 'components/buttons/PrimaryButton';
import { useState } from 'react';
import updateInputs from 'functions/updateInputs';
import registerSchema from 'validation/registerSchema';
import useRequestToServer from 'hooks/useRequestToServer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Errors from 'components/Errors/Errors';
const Register = () => {
  // useLocatin
  const location=useLocation();
  const path=location.pathname.replace("/","")
  // useLoginToServer
  const loginToServer = useRequestToServer();
  // use state for inputs
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    biz: 'false',
  });

  // use state for error
  const [errors, setErrors] = useState();
  // use state for error
  const [readyToSend, setready] = useState(false);

  // function to change inputs
  const handleInputChange = ev => {
    updateInputs(ev, setInputs);
  };

  // validate inputs and register function
  const handleRegister = () => {
    
    if(path=="businessregister"){
      setInputs(prev=>{
        prev.biz="true"
        return({
          ...prev
        })
      })
    }
    setready(true)
  };
  useEffect(()=>{
    if(readyToSend)setErrors(loginToServer(inputs, registerSchema, '/users/register'));
    
  },[readyToSend])
  // waiting for error change
  useEffect(()=>{
    setready(false)
  },[errors])

  return (
    <div className='row register'>
      <div className='col-sm-6 d-flex flex-column justify-content-center align-item-center gap-3'>
        {/* {errors?.config.response.data?<p>{errors?.config.response.data}</p>:null} */}
        <SmallInput
          datalabel='name'
          placeholder='Name'
          type='text'
          onchange={handleInputChange}
          value={inputs.name}
        />
        {errors && <Errors errors={errors.details} name="name"/>}
        <SmallInput
          datalabel='email'
          placeholder='E-mail'
          type='email'
          onchange={handleInputChange}
          value={inputs.email}
        />
        {errors && <Errors errors={errors.details} name="email"/>}
        <SmallInput
          datalabel='password'
          placeholder='Password'
          type='password'
          onchange={handleInputChange}
          value={inputs.password}
        />
        {errors && <Errors errors={errors.details} name="password"/>}
        <PrimaryButton
          type='button'
          placeholder='submit'
          onclick={handleRegister}
        />
      </div>
      <div className='col-sm-6'>
        <img
          src='https://media.istockphoto.com/vectors/welcome-to-the-team-hand-drawn-lettering-logo-icon-in-trendy-golden-vector-id1302839569?k=20&m=1302839569&s=612x612&w=0&h=rialOaZ0RMu1QsHjfUbZ0Q_d4LeAbIPz5V1SWpHi-yY='
          alt=''
        />
      </div>
    </div>
  );
};

export default Register;
