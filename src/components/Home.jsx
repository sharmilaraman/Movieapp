import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import XManimg from '../Images/XMan.jpg';
import XMan3img from '../Images/XMan3.webp';
import Banner from '../Images/Banner.png';
import Banner3 from '../Images/Banner3.png';
import Banner2 from '../Images/Banner2.png';

import XMan4img from '../Images/XMan4.jpg';
import MainImg from '../Images/MainImage.png';
import Jaibhim1 from '../Images/Jaibheem1.png';
import Jaibhim2 from '../Images/jaibhim2.jpg';
import Jaibhim3 from '../Images/jaibhim3.jpeg';
import TheHeights from '../Images/theheights.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import '../components/Home.css';


const Home = () => {
  const category = [
    { id: 1, category: "Romantic" },
    { id: 2, category: "Comedy" },
    { id: 3, category: "Thriller" },
    { id: 4, category: "Horror" },
    { id: 5, category: "Action" },
    { id: 6, category: "Emotional" },
  ];
  const newlyreleased = [{ id: 1, image: Jaibhim1 },
  { id: 2, image: Jaibhim2 },
  { id: 3, image: Jaibhim3 },
  { id: 4, image: TheHeights }];
  const navigate = useNavigate();

  const movies = [
    { id: 'tomcruise-obliviation', title: 'Tom Cruise Obliviation', image: MainImg, rating: '69%' },
    { id: 'xmen', title: 'X-Men', image: XMan4img, rating: '69%' },
    { id: 'xman', title: 'X-Man', image: XMan3img, rating: '69%' },
    { id: 'xman1', title: 'X-Man', image: XManimg, rating: '69%' },
  ];

  return (
    <div className='home-container'>
      <Navbar />
      <div className='banner-section'>
        <div className="banner">
        <img src={Banner3} className="banner-img" />

          <img src={Banner} className="banner-img" />
          <img src={Banner2} className="banner-img" />

        </div>
        <div className="categories">
          <h2>
            Choose from tons of <span className="highlight">Categories</span> to Watch
          </h2>
          <div className="category-buttons">
            {category.map((movie) => (
              <button  className="category-btn" key={movie.id}>{movie.category}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="movies-section">
        <h2>Based on previous watch</h2>
        <div className="movies-list">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movies/${movie.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className='image-container'>
                <img src={movie.image}  />
                <div className='movie-info'>
                  <p>{movie.title}</p>
                  <span>{movie.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newly-released">
        <h2>Newly Released Movies</h2>
        <div className="newly-released-card">
        {newlyreleased.map((movie) => (
          <img src={movie.image} alt="Newly Released Movies" />
        ))}
        </div>
      </section>

      <footer className="footer">
  <div className="footer-content">
    <div className="footer-caption">
      <p>
        Copyright @ Epsilon team. All Rights Reserved, Pesto. All contents and website
        codes are copyright of Pesto Epsilon team abd unfair use may lead to actions.
        All rights Reserved.
      </p>
    </div>
    <div className="footer-icon">
      <p>Connect with us</p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebookF} className="footer-font-icon" />
        <FontAwesomeIcon icon={faTwitter} className="footer-font-icon" />
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;
