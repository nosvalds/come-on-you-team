import { connect } from 'react-redux';
import PitchSection from './PitchSection';

const mapStateToProps = ( state, { team, position }) => {
    // use team and position props to get the correct players from state to pass to the Pitch Section
    return {
       players: state[team].players.filter((player) => (player.position === position)),
    };
}

export default connect(mapStateToProps)(PitchSection);