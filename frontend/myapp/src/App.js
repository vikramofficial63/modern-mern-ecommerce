import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './component/Home';
import Products from './component/Assets/ProductList';
import AddProduct from './component/Assets/AddProduct';
import UpdateProduct from './component/Assets/UpdateProduct';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateComponent />}>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#12121a', color: '#f5f5f7', border: '1px solid rgba(255,255,255,0.08)' },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
