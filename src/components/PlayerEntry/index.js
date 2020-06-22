import { connect } from 'react-redux';
import PlayerEntry from './PlayerEntry';
import { addPlayer } from '../../data/actions/state';

const mapStateToProps = () => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (name) => dispatch(addPlayer(name)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEntry);