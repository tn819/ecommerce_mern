import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthButton from './authbutton';

import '../css/header.css'


function Header(props) {
  return (
    <header>
    {/* let's use NavLink here eventually, not urgent */}
      <div>nothing to see here</div>
      <NavLink to="/profile">{props.username}</NavLink>
      <NavLink to="/search">Search Page</NavLink>
      <NavLink to="/protected">Protected Page</NavLink>
      <NavLink to="/login">Login or Register</NavLink>
      <NavLink to="/addnew">Add New Item</NavLink>
      <AuthButton/>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Header);