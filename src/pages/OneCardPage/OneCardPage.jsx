/** @format */

import React, { useEffect } from 'react';
import 'pages/OneCardPage/OneCardPage.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import "pages/OneCardPage/OneCardPage.scss"
const OneCardPage = () => {
  const { id } = useParams();
  const [bizCard, setBizCard] = useState({});
  useEffect(() => {
    axios.get(`/cards/card/${id}`).then(res => {
      setBizCard(res.data);
    });
  }, []);

  return (
    <div className='d-flex w-100 flex-column justify-content-center align-items-center oneCardPage'>
      <div className='row w-100 mb-3'>
        <div className='col-sm'>
          <Link
            to='/'
          >back to home</Link>
        </div>
      </div>
      <div className='row w-100 d-flex align-items-center'>
        {bizCard.image ? (
          <div className='col-sm-6'>
            <img
              src={bizCard.image.url}
              alt=''
            />
          </div>
        ) : null}
        <div className='col-sm-6'>
          <div className='row'>
            <div className='col'>
              <h1>{bizCard.title}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h4>{bizCard.subTitle}</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>{bizCard.phone}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>{bizCard.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCardPage;
