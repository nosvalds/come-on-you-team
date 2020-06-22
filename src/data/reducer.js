// random integer function
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


// randomly add a player to a team
const addPlayer = (state, action) => {
  // pick a random team
  let team = getRandomInt(1, 2) === 1 ? "team_A" : "team_B";
  // pick a random position 
  let i = getRandomInt(0, 4);
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
        positionsFilled: state[team].positionsFilled + 1,
        positions: state[team].positions.map((player, index) => {
          return index === i ? {...player, name: action.name} : {...player};
        })
      }
    }
  }
}

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PLAYER": return addPlayer(state, action);
      default: return state;
    }
  }
  
  export default reducer;