import { connect } from 'react-redux';
import Defense from './Defense';

const mapStateToProps = ( state, { team }) => {
    // use team prop to get the defense players from state. For now D players are always the 2nd and 3rd player in the positions array
    return {
        players: [state[team].positions[1].name, state[team].positions[2].name ],
    };
}

export default connect(mapStateToProps)(Defense);