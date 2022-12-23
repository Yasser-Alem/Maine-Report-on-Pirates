import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Card, OutlinedInput as search, Button } from '@mui/material';
import { Img } from '../MembersCard';
import { LinkMembers } from '../../pages/Crews';
import api from '../../../services/OnePiece';
import Marine from '../../modules/assets/marine.png';

export const Header = ({ onSearch, onResetSearch }) => {
	const [localValue, setLocalValue] = React.useState();
	const [searchedValue, setSearchedValue] = React.useState();
	const { data: searchResults = [] } = api.useGetSearchByNameQuery(
		searchedValue,
		{ skip: !searchedValue?.length > 0 },
	);

	React.useEffect(() => {
		if (!localValue?.length > 0) onResetSearch();
	}, [localValue]);

	React.useEffect(() => {
		if (searchResults.length > 0) onSearch(searchResults);
	}, [searchResults]);

	return (
		<div>
			<LinkMembers to="/crews">
				<Card elevation={1} style={{ paddingTop: '5px' }}>
					<Img src={Marine} alt="" width="200px" />
					<Title>Marine Report on Pirate Crew</Title>
					<Search
						type="text"
						placeholder="search ..."
						name="search"
						value={localValue}
						onChange={e => {
							setLocalValue(e.target.value);
							setTimeout(() => setSearchedValue(e.target.value), 1000);
						}}
					/>
					{localValue && (
						<InitialiseBtn
							variant="contained"
							onClick={() => setLocalValue('')}
						>
							<Img src={Marine} alt="" width="60px" />
						</InitialiseBtn>
					)}
					{/* <SearchBar list={data} setList={setData} /> */}
				</Card>
			</LinkMembers>
		</div>
	);
};

// SCSS
const Title = styled.h1`
	color: rgb(30, 144, 255);
`;
const Search = styled(search)`
	margin: 10px;
	padding: -5px;
`;
const InitialiseBtn = styled(Button)`
	background: White;
`;

Header.propTypes = {
	onSearch: PropTypes.func,
	onResetSearch: PropTypes.func,
};
