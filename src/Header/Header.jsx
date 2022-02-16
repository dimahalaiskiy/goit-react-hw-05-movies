import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from '../HomePage/HomePage.style';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Button color='primary' variant='contained'>
          Home
        </Button>
      </Link>
      <Link to='movies'>
        <Button color='primary' variant='contained'>
          Movies
        </Button>
      </Link>
    </HeaderContainer>
  );
};

Header.propTypes = {};

export default Header;
