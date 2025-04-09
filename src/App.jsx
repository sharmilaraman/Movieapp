import './App.css'
import {Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TomcruiseObliviation from './components/TomcruiseObliviation';
import Xmen from './components/Xmen';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path='/TomcruiseObliviation' element={<TomcruiseObliviation />} /> */}
        <Route path='/movies/:id' element={<Xmen />} />
      </Routes>
   </>
  )
}

export default App;