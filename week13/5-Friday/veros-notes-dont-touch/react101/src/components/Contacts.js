
import React from 'react';

const Contacts = (props) => {

  console.log(props)
  return (
    <>
    
    <h1>{props.firstName} {props.lastName}</h1>
    {props.phoneNum} <br /> 
    {props.email}
    <br />

    
    </>
  )
}

export default Contacts





