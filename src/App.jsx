import './App.css'
import {Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
   </>
  )
}

export default App;