import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from '../HomePage/HomePage.style';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink className='navlink' to='/'>
        Home
      </NavLink>
      <NavLink className='navlink' to='movies'>
        Movies
      </NavLink>
    </HeaderContainer>
  );
};

Header.propTypes = {};

export default Header;
