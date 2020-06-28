import { connect } from 'react-redux';
import MatchPlay from './MatchPlay';

const mapStateToProps = ({ teamSize }) => {
    // pass teamSize from state into MatchPlay
    return {
        teamSize
    }
}

export default connect(mapStateToProps)(MatchPlay);