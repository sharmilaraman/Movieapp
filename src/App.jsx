import './App.css'
import {Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TomcruiseObliviation from './components/TomcruiseObliviation';
import Xmen from './components/Xmen';
import Xman from './components/Xman';
import Xman1 from './components/Xman1';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
<<<<<<< HEAD
        <Route path='/movies/TomcruiseObliviation' element={<TomcruiseObliviation />} />
        <Route path='/movies/Xmen' element={<Xmen />} />
        <Route path='/movies/Xman' element={<Xman />} />
        <Route path='/movies/Xman1' element={<Xman1 />} />
=======
        {/* <Route path='/TomcruiseObliviation' element={<TomcruiseObliviation />} /> */}
        <Route path='/movies/:id' element={<Xmen />} />
>>>>>>> 9311d2e3f8219b65c342a6005bc3a9df484aba94
      </Routes>
   </>
  )
}

export default App;