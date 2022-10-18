import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Electrical from './components/Electrical';
 import Mechblock from './components/Mechblock';
import CSE from './components/CSE';
import KLU from './components/KLU';
import {  Routes, Route} from 'react-router';
import { Biotech } from '@mui/icons-material';
import Biotechnolgy from'./components/Biotechnolgy';
import KLlogo from'./components/images/KLlogo.jpg';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <Routes>
  <Route path='CSE' element={<CSE/>}/>
  <Route path='ECE' element={<Electrical/>}/>
  <Route path='ME' element={<Mechblock/>}/>
  <Route path ='BT' element={<Biotechnolgy/>}/>
</Routes>
    </div>
  );
}

export default App;