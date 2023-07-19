import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Details from './Components/Details.js';
import Errror from './Components/Errror.js';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
