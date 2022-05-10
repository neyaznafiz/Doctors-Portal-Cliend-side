
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>

<Route path='/' element={<Home></Home>} />
<Route path='/about' element={<About></About>} />
<Route path='/appointment' element={<Appointment></Appointment>} />
<Route path='/reviews' element={<Reviews></Reviews>} />

      </Routes>
    </div>
  );
}

export default App;
