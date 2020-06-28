import { connect } from 'react-redux';
import TeamInfo from './TeamInfo';
import { setTeamNames, editTeamNames } from '../../data/actions/state';

const mapStateToProps = (state) => {
    let teamSize = state.teamSize;
    return {
        // edit flag: if both editTeamName and players are filled are true then show form input. The second part makes it so that edit team names is show after the players are filled out. the manual edit flag is for future editing.
        edit: (state.editTeamName && (state.teamA.playersFilled === teamSize && state.teamB.playersFilled === teamSize)),
        initialTeamA: state.teamA.name,
        initialTeamB: state.teamB.name,
    };
}

// dispatch the addPlayer action to assign the player to a team
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (names) => dispatch(setTeamNames(names)), // sets team name in state
        handleClick: () => dispatch(editTeamNames()), // flips the editTeamName flag in state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo);