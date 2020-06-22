import { connect } from 'react-redux';
import Offense from './Offense';

const mapStateToProps = ( state, { team }) => {
    // use team prop to get the Offense players from state. For now Offense players are always the 4th and 5th player in the positions array
    return {
        players: [state[team].positions[3].name, state[team].positions[4].name ],
    };
}

export default connect(mapStateToProps)(Offense);