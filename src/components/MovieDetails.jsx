import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import VideoImage from '../images/Video.png';
import MovieData from '../Data/Moviedata';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams(); 
  const movie = MovieData[id]; 

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className='movie-details-container'>
      <Navbar />
      <div className='top-container'>
        <p className="breadcrumb">Home &gt;&gt; Movies &gt;&gt; {movie.title}</p>
        <h2 className="title">{movie.title}</h2>
      </div>
      <main className="content">
        <div className='left-section'>
          <p className="info">
            <span className="language">{movie.language}</span> | 
            <span className="genre"> {movie.genre}</span> | 
            <span className="year"> {movie.year}</span>
          </p>
          <div className='button-group'>
            <button className="play-button">Play Movie</button>
            <p>ADD TO WATCHLIST</p>
            <p className='share'>SHARE</p>
          </div>
          <div className="movie-data">
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Artist:</strong> {movie.artist}</p>
          </div>
          <div className="movie-description">
            <p>{movie.description}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="movie-image-container">
            <img src={movie.image} className="movie-image" alt={movie.title} />
            <div className="play-over">
              <img src={VideoImage} alt="Play Button" />
            </div>
          </div>
        </div>
      </main>

      <div className="recommendations-section">
        <h3>Recommendations</h3>
        <div className="recommendations-container">
          {movie.recommendations.map((rec) => (
            <div className="recommendation-card" key={rec.id}>
              <img src={rec.image} alt={rec.title} className="recommendation-image" />
              <div className='movie'>
                <p className="movie-title">{rec.title}</p>
                <p className="movie-rating">{rec.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
