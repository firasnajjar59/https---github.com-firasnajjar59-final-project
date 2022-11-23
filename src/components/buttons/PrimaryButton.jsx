import React from 'react'

const PrimaryButton = (props) => {
  return (
    <button type={props.type} className="btn btn-primary" onClick={props.onclick}>{props.placeholder}</button>

  )
}

export default PrimaryButton