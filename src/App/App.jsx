import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MembersCard } from './modules/MembersCard';
import { Header } from './modules/Header/index';
// import { Dialog } from '@mui/material';
import { Members } from './pages/Members';
import { Crews } from './pages/Crews';
// import { Boats } from './pages/Boats';
import './App.css';

const App = () => {
	const [searchResults, setSearchResults] = React.useState([]);
	const onSearch = results => {
		console.log(results);
		setSearchResults(results);
	};

	return (
		<div className="App">
			<Header onSearch={onSearch} onResetSearch={() => setSearchResults([])} />

			{/* {searchResults.length > 0 && (
				<Dialog open={true} onClose={() => setSearchResults([])}>
					{searchResults.map(result => (
						<MembersCard
							key={result.id}
							id={result.id}
							name={result.french_name}
							job={result.job}
							size={result.size}
							age={result.age}
						/>
					))}
				</Dialog>
			)} */}
			{searchResults.length > 0 ? (
				searchResults.map(result => (
					<MembersCard
						key={result.id}
						id={result.id}
						name={result.french_name}
						job={result.job}
						size={result.size}
						age={result.age}
					/>
				))
			) : (
				<Routes>
					<Route path="/crews" element={<Crews />} />
					{/* <Route path="/boats/:id" element={<Boats />} /> */}
					<Route path="/crews/:id" element={<Members />} />
				</Routes>
			)}
		</div>
	);
};

export default App;
