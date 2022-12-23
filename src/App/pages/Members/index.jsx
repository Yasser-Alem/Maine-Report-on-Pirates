import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/OnePiece';
import { MembersCard } from '../../modules/MembersCard';
import { ParentCard } from '../Crews';

export const Members = () => {
	const { id } = useParams();
	const { data: members = [] } = api.useGetCrewMembersQuery(id);

	React.useEffect(() => {
		console.log(members);
	});
	return (
		<div>
			<div>
				<ParentCard>
					{members.map(member => (
						<MembersCard
							key={member.id}
							name={member.french_name}
							job={member.job}
							size={member.size}
							age={member.age}
							prime={member.bounty}
							crewKey={member.crewId}
						/>
					))}
				</ParentCard>
			</div>
		</div>
	);
};
