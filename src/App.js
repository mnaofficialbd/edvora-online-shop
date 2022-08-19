import { Route, Routes } from 'react-router-dom';
import Navber from '../src/Pages/Home/Navber/Navber';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

function App() {
  return (
    <>
      <Navber />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />

          {/* <Route path='purchase/:productId' element={<RequireAuth><PurchaseDetail /></RequireAuth>} />
          <Route path='orders/:productId' element={<RequireAuth><Purchase /></RequireAuth>} />

          <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyProfile/>} />
            <Route path='orders' element={<Orders/>} />
            <Route path='addReview' element={<AddAReview/>} />
            <Route path='manageAllOrders' element={<ManageAllOrders/>} />
            <Route path='addProduct' element={<AddAProduct/>} />
            <Route path='makeAdminPanel' element={<MakeAdminPanel/>} />
            <Route path='manageProducts' element={<ManageProducts/>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} /> */}

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>

      <Footer />
    </>
  );
}

export default App;
