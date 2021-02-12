
import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/adjustments">Adjustments</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/animate" tabindex="-1" aria-disabled="true">As</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/attrs" tabindex="-1" aria-disabled="true">Attrs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/basic" tabindex="-1" aria-disabled="true">Basic</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/bootstrapbutton" tabindex="-1" aria-disabled="true">Boostrap Button</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/complex" tabindex="-1" aria-disabled="true">Complex</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/globalstyles" tabindex="-1" aria-disabled="true">Global Styles</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/pseudo" tabindex="-1" aria-disabled="true">Pseudo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/theme" tabindex="-1" aria-disabled="true">Theme</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/condrendering" tabindex="-1" aria-disabled="true">Conditional Rendering</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
