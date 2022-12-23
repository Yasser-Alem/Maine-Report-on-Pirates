import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Card as MuiCard } from '@mui/material';
import Marine from '../../modules/assets/marine.png';

export const CrewCard = ({ id, name, romanName, bounty, totalMember }) => (
	<Card elevation={8} key={id}>
		<HeaderCard>
			<img src={Marine} alt="" width="100px" />
		</HeaderCard>
		<h2>{name}</h2>
		<h3>{romanName}</h3>
		{bounty && bounty !== 'inconnu' && <p>{bounty}</p>}
		{totalMember && totalMember !== 'inconnu' && <p>{totalMember}</p>}

		{/* {children} */}
	</Card>
);

CrewCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	romanName: PropTypes.string,
	bounty: PropTypes.string,
	totalMember: PropTypes.string,
};

// SCSS
export const Card = styled(MuiCard)`
	background: #281e18;
	border: 2px black solid;
	width: 400px;
	margin: 30px;
	color: #c38945;
	&:hover {
		border: 2px solid rgb(30, 144, 255);
		color: rgb(30, 144, 255);
		transform: scale(1.03);
		transition: 0.7s;
		background: white;
	}
`;
export const HeaderCard = styled(MuiCard)`
	background: #281e18;
	padding: 5px;
`;
