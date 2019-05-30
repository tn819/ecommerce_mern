import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import '../css/header.css'


function Header(props) {
  return (
    <header>
      <div>nothing to see here</div>
      <div>{props.username}</div>
      <Link to="/search">Search Page</Link>
      <Link to="/protected">Protected Page</Link>
      <Link to="/login">Login or Register</Link>

    </header>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Header);