import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchQueries = {
	name: name => `characters/search/name/${name}`,
	bounty: (gte, lte) => `characters/search?gte=${gte}&lte=${lte}`,
	crew: crewName => `crews/search/name/${crewName}`,
	boat: boatName => `boats/search/name/${boatName}`,
};

export const api = createApi({
	reducerPath: 'onePieceApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.api-onepiece.com' }),
	endpoints: builder => ({
		getCrews: builder.query({
			query: () => 'crews',
		}),
		getCrewMembers: builder.query({
			query: crewId => `characters/crew/${crewId}`,
		}),
		getCharacter: builder.query({
			query: characterId => `characters/${characterId}`,
		}),
		getCrewBoat: builder.query({
			query: () => 'boats',
		}),
		getBoatByCrew: builder.query({
			query: boatId => `boats/search/crew/${boatId}`,
		}),
		getCrewByName: builder.query({
			query: name => `crews/search/name/${name}`,
		}),
		getSearchByName: builder.query({
			query: name => `characters/search/name/${name}`,
		}),
		getSearch: builder.query({
			query: (key, ...values) => searchQueries[key](...values),
		}),
	}),
});

export default api;
