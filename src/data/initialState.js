// If you don't have the back-end set up and would like some test data, uncomment the below line and set matchHistory equal to this in initialState
// import matchHistory from './testMatchData'; 

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
    matchHistory: [],
    matchHistoryLoaded: true, 
  };
  
  export default initialState;