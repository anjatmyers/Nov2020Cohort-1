import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import CardList from './components/CardList';

class App2 extends Component {
  render() {
    return <>

        <Container fluid>

            <Row>
                
                    <CardList />
               
            </Row>

        </Container>
    </>;
  }
}

export default App2;
