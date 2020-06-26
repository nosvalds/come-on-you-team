import axios from '../../axios/axios';
import { loadMatchHistory } from './state';

export const getMatchHistory = () => {
    return (dispatch) => {
        // now use axios to make an API request
        axios.get("/").then(({ data }) => {
                dispatch(loadMatchHistory(data.data))
        });
    };
}