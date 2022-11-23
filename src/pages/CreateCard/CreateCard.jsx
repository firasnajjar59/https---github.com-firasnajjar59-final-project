/** @format */

import SmallInput from 'components/inputs/SmallInput';
import updateInputs from 'functions/updateInputs';
import React, { useState } from 'react';
import 'pages/CreateCard/CreateCard.scss';
import PrimaryButton from 'components/buttons/PrimaryButton';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useRequestToServer from 'hooks/useRequestToServer';
import cardSchema from 'validation/cardSchema';
import Errors from 'components/Errors/Errors';
const CreateCard = () => {
    // use state for inputs
    const [inputs, setInputs] = useState({
      title: '',
      subTitle: '',
      description: '',
      address: '',
      phone: '',
      url: '',
      alt: '',
    });
   
  // useCreateCard
  const createCard = useRequestToServer();
  const updateCard = useRequestToServer();
  // useState to hold query params
  const [id, setId] = useState('');
  // use state for error
  const [errors, setErrors] = useState();
  // useLocation to extract the qparams from the search key
  let location = useLocation();
  // onload functions
  const query = new URLSearchParams(location.search);
  useEffect(() => {
    const id = query.get('id');
    if(id!=null){setId(id)}else{
      setId("");
      setInputs({
        title: '',
        subTitle: '',
        description: '',
        address: '',
        phone: '',
        url: '',
        alt: '',
      })
    }
  }, [location]);
  //   useEffect waiting for update on query useState
  useEffect(() => {
    if(id!=""){
      let obj = query.get('obj');
      obj=obj.replaceAll("trushTrushtrush","&")
      obj=JSON.parse(obj)
      setInputs({
        title: obj.title,
        subTitle: obj.subTitle,
        description: obj.description,
        address: obj.address,
        phone: obj.phone,
        url: obj.image.url,
        alt: obj.image.alt,
      })
    }
  }, [id]);

  // function to change inputs
  const handleInputChange = ev => {
    updateInputs(ev, setInputs);
  };

  // validate inputs and createCard function
  const handleCreateCard = () => {
    setErrors(createCard(inputs, cardSchema, '/cards'));
  };

  // validate inputs and updateCard function
  const handleUpdateCard = () => {
    setErrors(updateCard(inputs, cardSchema, `/cards/${id}`,"put"));
  };

  return (
    <div className='createCard'>
    
      {id ? <h1>Update Card</h1> : <h1>Create Card</h1>}
      <SmallInput
        type='text'
        placeholder='title'
        value={inputs.title}
        onchange={handleInputChange}
        datalabel='title'
      />
      {errors && <Errors errors={errors.details} name="title"/>}
      <SmallInput
        type='text'
        placeholder='subTitle'
        value={inputs.subTitle}
        onchange={handleInputChange}
        datalabel='subTitle'
      />
      {errors && <Errors errors={errors.details} name="subTitle"/>}
      <SmallInput
        type='text'
        placeholder='description'
        value={inputs.description}
        onchange={handleInputChange}
        datalabel='description'
      />
      {errors && <Errors errors={errors.details} name="description"/>}
      <SmallInput
        type='text'
        placeholder='address'
        value={inputs.address}
        onchange={handleInputChange}
        datalabel='address'
      />
      {errors && <Errors errors={errors.details} name="address"/>}
      <SmallInput
        type='text'
        placeholder='phone'
        value={inputs.phone}
        onchange={handleInputChange}
        datalabel='phone'
      />
      {errors && <Errors errors={errors.details} name="phone"/>}
      <SmallInput
        type='text'
        placeholder='url'
        value={inputs.url}
        onchange={handleInputChange}
        datalabel='url'
      />
      {errors && <Errors errors={errors.details} name="url"/>}
      <SmallInput
        type='text'
        placeholder='alt'
        value={inputs.alt}
        onchange={handleInputChange}
        datalabel='alt'
      />
      {errors && <Errors errors={errors.details} name="alt"/>}
      <PrimaryButton
        onclick={id ? handleUpdateCard : handleCreateCard}
        placeholder={id ? 'Update' : 'Create'}
      />
    </div>
  );
};

export default CreateCard;
