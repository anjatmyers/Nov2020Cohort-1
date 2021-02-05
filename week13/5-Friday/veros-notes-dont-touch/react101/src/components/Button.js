import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return <>

    <Button variant={props.color} >{props.text}</Button><br />
  </>;
};

export default ButtonComponent;
