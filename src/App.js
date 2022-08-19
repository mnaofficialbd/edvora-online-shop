import { Route, Routes } from 'react-router-dom';
import Navber from '../src/Pages/Home/Navber/Navber';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Orders from './Pages/Dashboard/Orders';
import Users from './Pages/Dashboard/Users';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import AllProduct from './Pages/Products/AllProduct';

function App() {
  return (
    <>
      <Navber />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />

           {/* <Route path='purchase/:productId' element={<RequireAuth><PurchaseDetail /></RequireAuth>} /> */}
          {/* <Route path='orders/:productId' element={<RequireAuth><Purchase /></RequireAuth>} /> */}

          <Route path='dashboard' element={<Dashboard />} >
            <Route index element={<DashboardHome /> } />
            <Route path='orders' element={<Orders />} />
            <Route path='users' element={<Users />} />
          </Route>
          {/* <Route path='login' element={<Login />} /> */}
          {/* <Route path='register' element={<Register />} />  */}

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

      <Footer />
    </>
  );
}

export default App;
