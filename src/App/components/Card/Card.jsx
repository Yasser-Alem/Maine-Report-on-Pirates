// import React from 'react';
// import { Card } from '@mui/material';
// import styled from '@emotion/styled';
// import Marine from '../../modules/Card/assets/marine.png';

// export const Card = () => {
// const { data: crews } = api.useGetCrewsQuery()
// const { data: boats} = api.useGetCrewBoatQuery()

// const Bloc = styled.div`
// display: grid;
// grid-template-columns:repeat(auto-fit,minmax(400px, auto));
// justify-content: center;
// gap: 10px;
// color: red;
// `

// const CardGrid = styled(Card)`
// background:#281E18;
// border: 2px black solid;
// width: 400px;
// margin: 30px;
// color: #C38945;
// &:hover{
//     border: 2px solid rgb(30,144,255);
//     color : rgb(30,144,255);
//     transform: scale(1.3);
//     transition: 1s;
// }
// `

// return (
// 	<div>
// 		<Card elevation={1}>
// 			<img src={Marine} alt="" width="200px" />
// 			<Title>Marine Report on Pirate Crew</Title>
// 		</Card>
// 			{/* <Bloc>
//                 {crews && crews.map(({id, french_name , roman_name, total_prime,number }) =>(
//                     <CardGrid elevation={8} key={id}>
//                     <h2> {french_name ? french_name : "s"}</h2>
//                     <h3>{roman_name ? roman_name : "s"}</h3>
//                     <p>{total_prime ? total_prime : "s"} berrys</p>
//                     <p>{number ? number : "s"} Membre d'équipage</p>
//                     </CardGrid>
//                 ))}

//             </Bloc> */}
// 			{/* {dataCrewsCharacters && dataCrewsCharacters.map(({id, french_name, job, bounty }) =>(
//                 <div key={id}>
//                 <h4>{french_name}</h4>
//                 <h5>{job}</h5>
//                 <p>{bounty}</p>
//                 </div>
//             ))}
//             <div>
//             {data && data.map(({id, french_name, job, bounty }) =>(
//                 <div key={id}>
//                 <h4>{french_name}</h4>
//                 <h5>{job}</h5>
//                 <p>{bounty}</p>
//                 <p>{countCharacter}s</p>
//                 </div>
//             ))}
//             </div>     */}
// 			{/* <div>
//             {dataIdCharacters && dataIdCharacters.map(({id, french_name, job, bounty }) =>(
//                 <div key={id}>
//                 <h4>{french_name}</h4>
//                 <h5>{job}</h5>
//                 <p>{bounty}</p>
//                 </div>
//             ))}
//             </div>   */}
// // 		</div>
// // 	);
// // };

// // {data && data.map( character => <div>{character.id} : {character.job}: {character.french_name} : {character.bounty}</div>)}
