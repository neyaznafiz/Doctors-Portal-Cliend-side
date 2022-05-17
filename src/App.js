
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Singup from './Pages/Login/Singup';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>

      <Routes>

<Route path='/' element={<Home></Home>} />
<Route path='/about' element={<About></About>} />

<Route path='/appointment' element={
<RequireAuth>
<Appointment></Appointment>
</RequireAuth> } />

{/* dashboard */}
<Route path='/dashboard' element={
<RequireAuth> <Dashboard></Dashboard> </RequireAuth> }>
<Route index element={<MyAppointments></MyAppointments>} ></Route>
<Route path='/dashboard/myreview' element={<MyReview></MyReview>} ></Route>
<Route path='/dashboard/myhistory' element={<MyHistory></MyHistory>} ></Route>
<Route path='/dashboard/allusers' element={<RequireAdmin> <AllUsers></AllUsers> </RequireAdmin>} ></Route>
<Route path='/dashboard/addadoctor' element={<RequireAdmin> <AddDoctor></AddDoctor> </RequireAdmin>} ></Route>
<Route path='/dashboard/managedoctors' element={<RequireAdmin> <ManageDoctors></ManageDoctors> </RequireAdmin>} ></Route>
</Route>

<Route path='/reviews' element={<Reviews></Reviews>} />
<Route path='/login' element={<Login></Login>} />
<Route path='/signup' element={<Singup></Singup>} />
<Route path='/contactus' element={<ContactUs></ContactUs>} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
