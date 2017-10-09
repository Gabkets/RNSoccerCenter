import { types } from "./actions";

const initialState = {
  loading: false,
  competitions: [],
  leagueTable: {},
  selectedTeamId: 0,
  selectedTeamName: "",
  selectedTeamPlayers: [],
  fixtureMatches: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING_DATA:
      return { ...state, loading: action.payload };
    case types.FETCH_COMPETITIONS_SUCCESS:
      const competitions = [...action.payload.competitions];
      return {
        ...state,
        competitions: competitions
      };
    case types.FETCH_LEAGUE_TABLE_SUCCESS:
      return {
        ...state,
        leagueTable: action.payload.leagueTable
      };
    case types.SELECT_TEAM_ID:
      debugger;
      return {
        ...state,
        selectedTeamId: action.payload.id,
        selectedTeamName: action.payload.name
      };
    case types.FETCH_TEAM_PLAYERS_SUCCESS:
      return {
        ...state,
        selectedTeamPlayers: action.payload.players
      };
    case types.FETCH_FIXTURE_SUCCESS:
      return {
        ...state,
        fixtureMatches: action.payload.fixtures
      };
    default:
      return state;
  }
};
export default reducer;
