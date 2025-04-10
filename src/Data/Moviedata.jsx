import MainImage from '../Images/MainImage.png';
import XMan3img from '../Images/XMan3.webp';
import XMan4img from '../Images/XMan4.jpg';
import Xman1 from '../Images/Xman1.png';
import Xman2 from '../Images/Xman2.png';
import Xman3 from '../Images/Xman3.png';

const movieData = {
  'tomcruise-obliviation': {
    title: 'Tom Cruise Obliviation',
    language: 'Hindi',
    genre: 'Comedy, Action, Bollywood',
    year: 2015,
    artist: 'Naga Pesto',
    description: `While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, 
          slips into a 
          job interview with one of New York City's best legal closers, Harvey Specter.
          Tired of cookie-cutter law school grads,
          Harvey takes a gamble by hiring Mike on the
          spot after he recognizes his raw talent and photographic memory.`,
    image: MainImage,
    recommendations: [
      { id: 1, title: "X-Man", image: Xman3, rating: "69%" },
      { id: 2, title: "Aquaman", image: Xman2, rating: "69%" },
      { id: 3, title: "Deadpool", image: Xman1, rating: "69%" },
      { id: 4, title: "X-Man", image: Xman3, rating: "69%" },

    ],
  },
  'xmen': {
    title: 'X-Men',
    language: 'English',
    genre: 'Action, Sci-Fi, Superhero',
    year: 2000,
    artist: 'Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry',
    description: `While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a 
          job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, 
          Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.`,
    image: XMan4img,
    recommendations: [
     { id: 1, title: "X-Man", image: Xman3, rating: "69%" },
      { id: 2, title: "Aquaman", image: Xman2, rating: "69%" },
      { id: 3, title: "Deadpool", image: Xman1, rating: "69%" },
      { id: 4, title: "X-Man", image: Xman3, rating: "69%" },
    ],
  },
  'xman': {
    title: 'X-Man',
    language: 'English',
    genre: 'Action, Sci-Fi, Superhero',
    year: 2000,
    artist: 'Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry',
       description: `While running from a drug deal gone bad, Mike Ross, a 
          brilliant young college-dropout, slips into a 
          job interview with one of New York City's best legal closers, Harvey Specter.
          Tired of cookie-cutter law school grads,
          Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw
          talent and photographic memory.`,
    image: XMan3img,
    recommendations: [
     { id: 1, title: "X-Man", image: Xman3, rating: "69%" },
     { id: 2, title: "Aquaman", image: Xman2, rating: "69%" },
     { id: 3, title: "Deadpool", image: Xman1, rating: "69%" },
     { id: 4, title: "X-Man", image: Xman3, rating: "69%" },
    ],
     },
  'xman1': {
    title: 'X-Man',
    language: 'English',
    genre: 'Action, Sci-Fi, Superhero',
    year: 2000,
    artist: 'Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry',
    description: `While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, 
          slips into a job interview with one of New York City's best legal closers, Harvey Specter.
          Tired of cookie-cutter law school grads,Harvey takes a gamble by hiring Mike on the spot after
          he recognizes his raw talent and photographic memory.`,
    image: XMan4img,
    recommendations: [
     { id: 1, title: "X-Man", image: Xman3, rating: "69%" },
     { id: 2, title: "Aquaman", image: Xman2, rating: "69%" },
     { id: 3, title: "Deadpool", image: Xman1, rating: "69%" },
     { id: 4, title: "X-Man", image: Xman3, rating: "69%" },
    ],
  },
};

export default movieData;
