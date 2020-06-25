import matchHistory from './testMatchData';

const initialState = {
    teamSize: 0,
    editTeamName: true,
    teamA: {
        name: "Team A",
        playersFilled: 0,
        players: [],
    },
    teamB: {
        name: "Team B",
        playersFilled: 0,
        players: [],
    },
    matchHistory, 
  };
  
  export default initialState;