/** @format */

import React from 'react';
import "components/Card/Card.scss"
const Card = (props) => {
  const handledelete=()=>{
    props.onclickDeleteBtn(props.id)
  }
  return (
    <>
      <div className='card mb-3'>
        <h3 className='card-header'>{props.title}</h3>
        <div className='card-body'>
          <h5 className='card-title'>{props.subTitle}</h5>
        </div>
        <img src={props.url} alt={props.alt} />
        <div className='card-body'>
          <p className='card-text'>
          {props.description}
          </p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{props.address}</li>
          <li className='list-group-item'>{props.phone}</li>
        </ul>
        <div className='card-body d-flex'>
          {props.btn1?<p 
            className='card-link text-color pointer' onClick={props.onclickMoreInfo}>
            More info
          </p>:null}
          {props.btn2?<>
          <p
            className='card-link text-color pointer' onClick={props.onclickEditBtn}>
            Edit
          </p>
          <p
            className='card-link text-color pointer' onClick={handledelete}>
            Delete
          </p>
          </>
          :null}
        </div>
      </div>
    </>
  );
};

export default Card;
