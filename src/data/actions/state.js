// state actions

export const addPlayer = (name) => {
    return {
        type: "ADD_PLAYER",
        name
    }
}

export const setTeamSize = (teamSize) => {
    return {
        type: "SET_TEAM_SIZE",
        teamSize
    }
}

export const setTeamNames = ({ teamA, teamB}) => {
    return {
        type: "SET_TEAM_NAMES",
        teamA,
        teamB,
    }
}

export const editTeamNames = () => {
    return {
        type: "EDIT_TEAM_NAMES",
    }
}

export const resetMatch = () => {
    return {
        type: "RESET",
    }
}

export const shuffleTeams = () => {
    return {
        type: "SHUFFLE_TEAMS",
    }
}

// pass data in as matchHistory
export const loadMatchHistory = (data) => {
    return {
        type: "LOAD_HISTORY",
        matchHistory: data,
    }
}

export const removeMatch = (id) => {
    return {
        type: "REMOVE_MATCH",
        id,
    }
}

export const changeScore = (value, team) => {
    return {
        type: "CHANGE_SCORE",
        score: +value, // make sure this is passed in as a number
        team,
    }
}

export const toggleInstructions = () => {
    return {
        type: "TOGGLE_INSTRUCTIONS",
    }
}