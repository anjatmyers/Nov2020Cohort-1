import React from "react";
import Grandchild from './Grandchild';

const Child = (props) => {
  return <div>
    I am a child and my name is {props.sib1}
    <br />
    <Grandchild name="Carlos" />
  </div>;
};

export default Child;
