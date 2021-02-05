
import React from 'react'
import Child from './Child';

const Parent = (props) => {
  return (
    <>
      My name is {props.firstName}
      <Child sib1="Mario" sib2="Dauro"  />
    </>
  )
}

export default Parent



