import { connect } from 'react-redux';
import MatchHistory from './MatchHistory';

// pass in the match history from state
const mapStateToProps = ({ matchHistory }) => {
    return {
        matchHistory
    };
}

export default connect(mapStateToProps)(MatchHistory);