import { connect } from 'react-redux';
import MatchHistory from './MatchHistory';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = ({ matchHistory }) => {
    return {
        matchHistory
    };
}

export default connect(mapStateToProps)(MatchHistory);