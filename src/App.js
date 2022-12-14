import { Route, Routes } from 'react-router-dom';
import Navber from '../src/Pages/Home/Navber/Navber';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Orders from './Pages/Dashboard/Orders';
import Users from './Pages/Dashboard/Users';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import AllProduct from './Pages/Products/AllProduct';

function App() {
  return (
    <>
      <Navber />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='dashboard' element={<Dashboard />} >
            <Route index element={<DashboardHome /> } />
            <Route path='orders' element={<Orders />} />
            <Route path='users' element={<Users />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} /> 
        </Routes>

      <Footer />
    </>
  );
}

export default App;
