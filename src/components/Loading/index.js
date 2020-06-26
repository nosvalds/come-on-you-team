import { connect } from 'react-redux';
import Loading from './Loading';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = ({ matchHistoryLoaded }) => {
    return {
        loaded: matchHistoryLoaded,
    };
}

export default connect(mapStateToProps)(Loading);