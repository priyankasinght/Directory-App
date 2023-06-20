import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <h2>Priyanka's Directory App</h2>
      <nav className="navbar-container">
        <ul>
          <li>
            <Link to="/add">Add New Person</Link>
          </li>
          <li>
            <Link to="/find">Retrieve Information</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
