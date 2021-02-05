//card from boostraps

import React from 'react';
import {Card, Button} from 'react-bootstrap';

const CardDetail = (props) => {
  return (
    <>
    <Card>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
            
            <Card.Text>
            {props.text}
            </Card.Text>
            <Button variant="primary">{props.buttonText}</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default CardDetail
