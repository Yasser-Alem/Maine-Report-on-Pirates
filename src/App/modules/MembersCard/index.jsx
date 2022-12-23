import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Card, HeaderCard } from '../CrewsCard';
import Marine from '../../modules/assets/marine.png';

export const Img = styled.img`
	&:hover {
		transform: scale(1.05);
		transition: 0.5s;
	}
`;

export const MembersCard = ({ id, name, job, size, age, prime }) => (
	<Card key={id}>
		<NavLink to="/crews">
			<HeaderCard>
				<Img src={Marine} alt="" width="100px" />
			</HeaderCard>
		</NavLink>
		<h2>{name}</h2>
		<h3>{job}</h3>
		<h3>{age}</h3>
		<h3>{prime}</h3>
		{size && size !== 'inconnu' && <p>{size}</p>}

		{/* {children} */}
	</Card>
);

MembersCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	job: PropTypes.string,
	size: PropTypes.string,
	crewKey: PropTypes.number,
	age: PropTypes.string,
	prime: PropTypes.string,
};
