import { connect } from 'react-redux';
import MatchPlay from './MatchPlay';

const mapStateToProps = ( { teamSize } ) => {
    return {
        teamSize
    }
}

export default connect(mapStateToProps)(MatchPlay);