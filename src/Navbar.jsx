import React from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    navigate('/');
  };
  return (
    <>
      <nav className='navbar'>
        <div className="logo-container">
          <h1 className='logo'>BINGO</h1>
          </div>
          <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        // <div className="user-link-container">
        // <Link to="/user" className="user-link">User Data</Link>
        // </div>
        <div>
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
          </div>
     </nav>
    </>
  )
}

export default Navbar;
