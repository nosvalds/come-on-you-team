import { connect } from 'react-redux';
import TeamSize from './TeamSize';
import { setTeamSize } from '../../data/actions/state';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (value) => dispatch(setTeamSize(value)), // dispatch the setTeamSize action to set the team size in state
    };
}

export default connect("", mapDispatchToProps)(TeamSize);