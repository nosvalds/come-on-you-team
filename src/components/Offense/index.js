import { connect } from 'react-redux';
import Offense from './Offense';

const mapStateToProps = ( state, { team }) => {
    // use team prop to get the Offense players from state. 
    // calculate how many Offense players we have then filter non-offense players out of the positions array and pass to the component
    let teamSize = state.teamSize;
    let numOffense = Math.ceil((teamSize - 1) / 2)

    return {
        players: state[team].positions.filter((player, i) => (
            (i >= teamSize - numOffense && i <= teamSize - 1)
        )),
    };
}

export default connect(mapStateToProps)(Offense);