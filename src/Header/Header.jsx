import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './Header.style';
import { Button } from '@mui/material';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<Button color='primary' variant='contained'>
					Home
				</Button>
				<Button color='primary' variant='contained'>
					Movies
				</Button>
			</HeaderContainer>
		</>
	);
};

Header.propTypes = {};

export default Header;
