import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthButton from './authbutton';
import styled from 'styled-components';

const activeClassName = 'nav-item-active'
const NavItem = styled(NavLink).attrs({
    activeClassName
})`
  color: #FFF587;

  &.${activeClassName} {
    color: #FF665A;
  }
`;
const NavHeader = styled.header`
  height: 5rem;
  background: #A3A1A8;
  display: flex;
  align-items: center;
`;


function Header(props) {
  return (
    <NavHeader>
    {/* let's use NavLink here eventually, not urgent */}
      <NavItem to="/profile">{props.username}</NavItem>
      <NavItem to="/search">Search Page</NavItem>
      <NavItem to="/protected">Protected Page</NavItem>
      <NavItem to="/login">Login or Register</NavItem>
      <NavItem to="/addnew">Add New Item</NavItem>
      <AuthButton/>
    </NavHeader>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Header);