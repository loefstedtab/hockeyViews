import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import SingleProduct from '../features/singleproduct/singleProduct'
import { fetchAllProducts } from '../features/allProducts/allProductsSlice';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import Register from '../features/auth/Register';
import Login from '../features/auth/Login';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, []);

  return (
    <div>
      {/* {isLoggedIn ? ( */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
        </Routes>
       {/* ) : ( */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/signup" element={<Register name="signup"/>} />
        </Routes>
    </div>
  );
};

export default AppRoutes;
