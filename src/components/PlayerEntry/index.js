import { connect } from 'react-redux';
import PlayerEntry from './PlayerEntry';
import { addPlayer } from '../../data/actions/state';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = (state) => {
    let teamSize = state.teamSize;
    return {
        teamsFilled: (state.teamA.playersFilled === teamSize && state.teamB.playersFilled === teamSize)
    };
}

// dispatch the addPlayer action to assign the player to a team
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (name) => dispatch(addPlayer(name)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEntry);