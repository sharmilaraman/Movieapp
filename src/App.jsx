import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/User';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute>}  />
        <Route path='/movies/:id' element={<ProtectedRoute> <MovieDetails /></ProtectedRoute>} />
        <Route path="/user" element={<User />} />
      </Routes>
   </>
  )
}

export default App;