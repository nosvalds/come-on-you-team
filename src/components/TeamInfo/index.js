import { connect } from 'react-redux';
import TeamInfo from './TeamInfo';
import { setTeamNames, editTeamNames } from '../../data/actions/state';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = (state) => {
    let teamSize = state.teamSize;
    return {
        edit: (state.editTeamName && (state.teamA.positionsFilled === teamSize && state.teamB.positionsFilled === teamSize)),
        initialTeamA: state.teamA.name,
        initialTeamB: state.teamB.name,
    };
}

// dispatch the addPlayer action to assign the player to a team
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (names) => dispatch(setTeamNames(names)),
        handleClick: () => dispatch(editTeamNames()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo);