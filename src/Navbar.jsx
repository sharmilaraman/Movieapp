import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <>
      <nav className='navbar'>
          <h1 className='logo'>BINGO</h1>
          <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>

     </nav>
    </>
  )
}

export default Navbar;
