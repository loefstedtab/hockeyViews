import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { fetchUserAsync } from '../user/userSlice';

const Navbar = () => {
  const { first_Name, last_Name } = useSelector((state) => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="top">
      <div className="top-left">
        <h1>Hockey Views</h1>
        <div className='top-center'>
          <Link className='top-item' to="/home">Home</Link>
          <Link className='top-item' to="/players">AllPlayers</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
