import { connect } from 'react-redux';
import PlayerEntry from './PlayerEntry';
import { addPlayer } from '../../data/actions/state';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = (state) => {
    let playersASide = state.playersASide;
    return {
        teamsFilled: (state.team_A.positionsFilled === playersASide && state.team_B.positionsFilled === playersASide)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (name) => dispatch(addPlayer(name)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEntry);