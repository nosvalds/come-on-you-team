import { connect } from 'react-redux';
import MatchOptions from './MatchOptions';
import { resetMatch, shuffleTeams } from '../../data/actions/state';
import { postMatch } from '../../data/actions/api';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = (state) => {
    let teamSize = state.teamSize;
    return {
        teamsFilled: (state.teamA.playersFilled === teamSize && state.teamB.playersFilled === teamSize)
    };
}

// dispatch the addPlayer action to assign the player to a team
const mapDispatchToProps = (dispatch, state) => {
    return {
        handleReset: () => dispatch(resetMatch()),
        handleShuffle: () => dispatch(shuffleTeams()),
        handleComplete: () => dispatch(postMatch(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchOptions);