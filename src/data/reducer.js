import initialState from './initialState';

// random integer function
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


// randomly add a player to a team
const addPlayer = (state, action) => {
  // pick a random team
  let team = getRandomInt(1, 2) === 1 ? "teamA" : "teamB";
  // pick a random position 
  let i = getRandomInt(0, state.teamSize - 1);
  // only add the player name to the position if it's not already filled
  if (state[team].positions[i].name !== "") {
    // if already filled call this function again to try another random spot
    return addPlayer(state, action);
  } else {
    // otherwise we've found an empty spot and we can save the players name into the position
    return {
      ...state,
      [team]: {
        ...state[team],
        positionsFilled: state[team].positionsFilled + 1, // increment the number of positions filled
        positions: state[team].positions.map((player, index) => { // save the player name into the randomly selected position
          return index === i ? {...player, name: action.name} : {...player};
        })
      }
    }
  }
}

// set the team size and create initial state of position (array of objects)
const setTeamSize = (state, action) => {
  let positions = [];
  for (let i = 0; i < action.teamSize; i += 1) {
    positions[i] = { name: "" };
  }
  return {
    ...state,
    teamSize: action.teamSize,
    teamA: {
      ...state.teamA,
      positions
    },
    teamB: {
      ...state.teamB,
      positions
    }
  }
} 

// Update Team names
const setTeamNames = (state, action) => {
  return {
    ...state,
    teamA: {...state.teamA, name: action.teamA },
    teamB: {...state.teamB, name: action.teamB },
    editTeamName: false,
  }
}

// flip editTeamName to true to allow editing of the team names
const editTeamNames = (state) => {
  return {
    ...state,
    editTeamName: true,
  }
}

// knuth shuffle function
const knuthShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
    let temp = array[i];   //swap i and the random index
    array[i] = array[rand];
    array[rand] = temp;
  }

  return array;
}


// shuffle the teams randomly using knutf shuffle method
const shuffleTeams = (state) => {
  // get teams into one array
  let players = [...state.teamA.positions, ...state.teamB.positions];
  players = knuthShuffle(players); // shuffle

  return {
    ...state,
    teamA: {
      ...state.teamA,
      positions: players.slice(0,(players.length / 2)), // return first half players array
    },
    teamB: {
      ...state.teamB,
      positions: players.slice((players.length / 2)), // return second half of players array
    }
  }
}

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PLAYER": return addPlayer(state, action); // add player randomly into a position
      case "SET_TEAM_SIZE": return setTeamSize(state, action);
      case "SET_TEAM_NAMES": return setTeamNames(state, action);
      case "EDIT_TEAM_NAMES": return editTeamNames(state);
      case "SHUFFLE_TEAMS": return shuffleTeams(state);
      case "RESET": return {...initialState}; // back to initial state
      default: return state;
    }
  }
  
  export default reducer;