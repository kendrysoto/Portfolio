import React from 'react';
import '../style/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">
        <i class="fas fa-bars"></i>
      </button>
      <div className="dropdown-content">
        <Link to="/" >ABOUT ME</Link>
        <Link to="/Projects" >PORTFOLIO</Link>
      </div>
    </div>
  )
}

export default NavBar;
