import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../components/Xman.css';
import XManimg from '../Images/XMan.jpg';


import VideoImage from '../Images/Video.png';
import Xman1 from '../Images/Xman1.png';
import Xman2 from '../Images/Xman2.png';
import Xman3 from '../Images/Xman3.png';

const Xmen = () => {
     const recommendations = [
          { id: 1, title: "X-Man", image:Xman3, rating: "69%" },
          { id: 2, title: "Aquaman", image:Xman2, rating: "69%" },
          { id: 3, title: "Deadpool", image:Xman1, rating: "69%" },
          { id: 4, title: "X-Man", image:Xman3, rating: "69%" },
        ];
        
  return (
    <div className='movie-details-container'>
      <nav className='navbar'>
                <h1 className='logo'>BINGO</h1>
                <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Search" className="search-bar" />
              </div>
                <button className="logout-btn">Log Out</button>
      
      </nav>
      <div className='top-container'>
      <p className="breadcrumb">Home &gt;&gt; Movies &gt;&gt;X-Man</p>
      <h2 className="title">X-Man</h2>
      </div>
      <main className="content">
          <div className='left-section'>
        <p className="info">
          <span className="language">Hindi</span> | <span className="genre">Comedy</span> | <span className="year">2015</span>
        </p>
        <div className='button-group'>
        <button className="play-button">Play Movie</button>
        <p>ADD TO WATCHLIST</p>
        <p className='share'>SHARE</p>
        </div>
        <div className="movie-data">
          <p>
            <strong>Language:</strong> English
          </p>
          <p>
            <strong>Genre:</strong> Action, Sci-Fi, Superhero
          </p>
          <p>
            <strong>Year:</strong> 2000
          </p>
          <p>
            <strong>Artist:</strong> Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry
          </p>
        </div>
        <div className="movie-description">
          <p>
           While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a
           job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads,
           Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.
          </p>
        </div>
        </div>
        <div className="right-section">
          <div className="movie-image-container">
            <img src={XManimg}  className="movie-image" />
            <div className="play-over">
              <img src={VideoImage} alt="Play Button" />
            </div>
          </div>
        </div>
      </main>
      <div className="recommendations-section">
    <h3>Recommendations</h3>
    <div className="recommendations-container">
      {recommendations.map((movie) => (
        <div className="recommendation-card" key={movie.id}>
          <img src={movie.image} alt={movie.title} className="recommendation-image" />
          <div className='movie'>
          <p className="movie-title">{movie.title}</p>
          <p className="movie-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default Xmen;