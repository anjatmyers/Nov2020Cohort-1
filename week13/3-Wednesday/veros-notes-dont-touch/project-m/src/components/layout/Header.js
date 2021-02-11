import React from "react";
import { Button, Navbar, Nav, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import  '../../assets/styles.css'

const Header = () => {
  return <>
     <Navbar bg="dark" variant="dark" style={{height:'30px'}}>
    <Navbar.Brand href="#home">React Lecture - Lifting Up State</Navbar.Brand>
    <Nav className="ml-auto navAnchor" style={{fontSize: '20px'}}>
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/project">Project Management</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Pricing</Link>
      </li>
    </Nav>
   
  </Navbar>
  </>;
};

export default Header;
