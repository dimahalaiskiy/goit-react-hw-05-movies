import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';

const Searchbar = ({ getQuery }) => {
	const [query, setQuery] = useState('');
	return (
		<div>
			<TextField
				sx={{
					marginTop: '15px',
				}}
				onChange={(e) => setQuery(e.target.value)}
				id='outlined-basic'
				label='Search Film'
				variant='outlined'
				size='small'
			/>
			<Button
				sx={{
					marginTop: '17px',
				}}
				onClick={() => getQuery(query)}
				color='primary'
				variant='contained'>
				Submit
			</Button>
		</div>
	);
};

Searchbar.propTypes = {};

export default Searchbar;
