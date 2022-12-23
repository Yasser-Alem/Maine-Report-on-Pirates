import React from 'react';
import styled from '@emotion/styled';
import { NavLink as linkMembers } from 'react-router-dom';
import { CrewCard } from '../../modules/CrewsCard';
import api from '../../../services/OnePiece';

export const ParentCard = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, auto));
	justify-content: center;
	gap: 10px;
	color: red;
`;
export const LinkMembers = styled(linkMembers)`
	text-decoration: none;
`;

export const Crews = () => {
	const { data: crews = [] } = api.useGetCrewsQuery();
	React.useEffect(() => {
		console.log(crews);
	});
	return (
		<div>
			<ParentCard>
				{crews.map((crew, key) => (
					<LinkMembers key={key} to={`/crews/${crew.id}`}>
						<CrewCard
							key={crew.id}
							name={crew.french_name}
							romanName={crew.roman_name}
							bounty={crew.total_prime}
							totalMember={crew.number}
						/>
					</LinkMembers>
				))}
			</ParentCard>
		</div>
	);
};
