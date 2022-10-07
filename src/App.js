


import './App.css';
// import { BrowserRouter as Router,Route , Routes} from "react-router-dom"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Services from "./pages/Services"
import Error from './Error';
import Navbar from './Navbar';

import Teams from './pages/Teams'; 
import Watwedo from './components/Watwedo';
import Technology from './pages/Technology';
import Test from './pages/Test';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>

 

   <Navbar />
  

   <Routes>

   <Route path='/' element={<Home />} />
   <Route path='/About' element={<About />} />
   <Route path='/Test' element={<Test />} />
   <Route path='/Technology' element={<Technology />} />

   <Route path='/Services' element={<Services />} />
   <Route path='/Teams' element={<Teams />} />
   
   <Route path='*' element={<Error />} />
 


   </Routes>
  
 
 
    </>
  );
}

export default App;
