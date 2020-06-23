import { connect } from 'react-redux';
import TeamSize from './TeamSize';
import { setTeamSize } from '../../data/actions/state';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (value) => dispatch(setTeamSize(value)),
    };
}

export default connect("", mapDispatchToProps)(TeamSize);