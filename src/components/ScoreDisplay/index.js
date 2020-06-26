import { connect } from 'react-redux';
import ScoreDisplay from './ScoreDisplay';
import { changeScore } from '../../data/actions/state';

// calculate and pass in whether or not the teams have full rosters of players
const mapStateToProps = (state, { team }) => {
    return {
        score: state[team].score // using the team prop passed in send the right teams score to ScoreDisplay
    }
}

// dispatch the updateScore 
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value, team) => dispatch(changeScore(value, team)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreDisplay);