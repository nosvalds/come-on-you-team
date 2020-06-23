import { connect } from 'react-redux';
import Defense from './Defense';

const mapStateToProps = ( state, { team }) => {
    // use team prop to get the defense players from state. 
    // calculate how many D players we have then filter non-D players out of the positions array and pass to the component
    let initial = 1; 
    let teamSize = state.teamSize;
    let numDefenders = Math.floor((teamSize - 1) / 2)

    return {
        players: state[team].positions.filter((player, i) => (
            (i >= initial && i <= initial + numDefenders - 1)
        )),
    };
}

export default connect(mapStateToProps)(Defense);