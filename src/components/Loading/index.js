import { connect } from 'react-redux';
import Loading from './Loading';
import {getMatchHistory} from '../../data/actions/api';

const mapStateToProps = ({ matchHistoryLoaded }) => {
    return {
        loaded: matchHistoryLoaded,
    };
}

const matchDispatchToProps = (dispatch) => {
    return {
        // dispatch API action to get match history from the database
        handleLoad: () => dispatch(getMatchHistory()), 
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Loading);