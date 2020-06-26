import axios from '../../axios/axios';
import { loadMatchHistory, removeMatch } from './state';

export const getMatchHistory = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("/").then(({ data }) => {
            dispatch(loadMatchHistory(data.data));
        });
    };
}

export const deleteMatch = (id) => {
    return (dispatch) => {
        // use axios to make DELETE request
        axios.delete(`/${id}`).then(() => {
            dispatch(removeMatch(id)); // once this is complete, delete match id from history
        })
    }
}