import axios from '../../axios/axios';
import { loadMatchHistory, removeMatch, resetMatch } from './state';

// api actions

export const getMatchHistory = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("").then(({ data }) => {
            dispatch(loadMatchHistory(data.data));
        });
    };
}

export const deleteMatch = (id) => {
    return (dispatch) => {
        // use axios to make DELETE request
        axios.delete(`${id}`).then(() => {
            dispatch(removeMatch(id)); // once this is complete, delete match id from history
        })
    }
}

export const postMatch = () => {
    return (dispatch, getState) => {
        // get values needed from state to post
        let { 
            teamSize,
            teamA,
            teamB,
        } = getState();

        // format data for the post request to the API
        let data = {
            team_size: teamSize,
            team_a_name: teamA.name,
            team_b_name: teamB.name,
            team_a_score: teamA.score,
            team_b_score: teamB.score,
            game_complete: true,
        }

        // use axios to make a POST request and save the match to the DB, then dispatch a reset for state
        axios.post("",data).then(() => {
            dispatch(resetMatch());
        })
    }
}