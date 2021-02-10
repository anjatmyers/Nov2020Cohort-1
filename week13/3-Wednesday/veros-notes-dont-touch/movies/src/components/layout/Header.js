import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return <>
  
    
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/contactus">Contact Us</Link>
    <Link to="/blog">Blog </Link>
    <Link to="/comment">Comments</Link>

  </>;
};

export default Header;
