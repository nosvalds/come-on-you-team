// state actions

export const addPlayer = (name) => {
    return {
        type: "ADD_PLAYER",
        name
    }
}

export const setTeamSize = (teamSize) => {
    return {
        type: "SET_TEAMSIZE",
        teamSize
    }
}