import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return <>
  
    
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/contactus">Contact Us</Link>
    <Link to="/blog">Blog </Link>
    <Link to="/comment">Comments</Link>
    <Link to="/sample1">Sample 1</Link>
    <Link to="/sample2">Sample 2</Link>
    <Link to="/app2">App2</Link>

  </>;
};

export default Header;
