// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/api'
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPlayers` endpoint is a "query" operation that returns data
    getPlayers: builder.query({
      // The URL for the request is '/api/players'
      query: () => '/players'
    }),
    // The 'getPlayer' endpoint is a query operation that returns data
    getPlayer: builder.query({
      query: playerId => `/players/${playerId}`
    }),
    getTeams: builder.query({
      query: () => '/teams'
    }),
    getTeam: builder.query({
      query: () => '/singleTeam'
    }),
  }),
})

// Export the auto-generated hook for the `getPlayers` query endpoint
export const { useGetPlayersQuery, useGetPlayerQuery, useGetTeamsQuery, useGetTeamQuery } = apiSlice
