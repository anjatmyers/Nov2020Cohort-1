//import data
//list of cards

import React, { Component } from 'react'
import data from '../data/libraries';
import CardDetail from './CardDetail';
import {Col} from 'react-bootstrap';

class CardList extends Component {

  render() {
    //array of CardDetail components
    let cardsArr = data.map(cardObj =>{

        return <Col md={3}>
            <CardDetail title={cardObj.title} 
            text={cardObj.text} 
            buttonText={cardObj.buttonText} />
        </Col>
    })


    return (
      <>
        {cardsArr}
      </>
    )
  }
}

export default CardList
