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