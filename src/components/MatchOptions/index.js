import { connect } from 'react-redux';
import MatchOptions from './MatchOptions';
import { resetMatch, shuffleTeams } from '../../data/actions/state';

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
        handleReset: () => dispatch(resetMatch()),
        handleShuffle: () => dispatch(shuffleTeams()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchOptions);