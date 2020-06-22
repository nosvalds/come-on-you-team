const initialState = {
    playersASide: 5,
    team_A: {
        name: "Team A",
        positionsFilled: 0,
        positions: [
            {
                id: 1,
                name: ""
            },
            {
                id: 2,
                name: ""
            },
            {
                id: 3,
                name: ""
            },
            {
                id: 4,
                name: ""
            },
            {
                id: 5,
                name: ""
            },
        ]
    },
    team_B: {
        name: "Team B",
        rosterFull: false,
        positionsFilled: 0,
        positions: [
            {
                id: 1,
                name: ""
            },
            {
                id: 2,
                name: ""
            },
            {
                id: 3,
                name: ""
            },
            {
                id: 4,
                name: ""
            },
            {
                id: 5,
                name: ""
            },
        ]
    }
  };
  
  export default initialState;