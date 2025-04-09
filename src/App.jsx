import './App.css'
// import {Routes,Route } from 'react-router-dom';
// import Login from './components/Login';
import Home from './components/Home';
// import TomcruiseObliviation from './components/TomcruiseObliviation';
// import Xmen from './components/Xmen';
// import Xman from './components/Xman';
// import Xman1 from './components/Xman1';
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/movies/TomcruiseObliviation' element={<TomcruiseObliviation />} />
        <Route path='/movies/Xmen' element={<Xmen />} />
        <Route path='/movies/Xman' element={<Xman />} />
        <Route path='/movies/Xman1' element={<Xman1 />} />
      </Routes> */}
      <Home />
   </>
  )
}

export default App;