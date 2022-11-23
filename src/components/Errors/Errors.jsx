import React from 'react'

const Errors = (props) => {
  return (
    <ul>
    {props.errors.map((item, indx) => {
      return item.context.label === props.name ? (
        <li
          key={indx}
          className='text-danger'>
          {item.message}
        </li>
      ) : null;
    })}
  </ul>
  )
}

export default Errors