import { connect } from 'react-redux';
import Instructions from './Instructions';
import { toggleInstructions } from '../../data/actions/state';

const mapStateToProps = ({ showInstructions }) => {
    return {
        showInstructions
    };
}

const matchDispatchToProps = (dispatch) => {
    return {
        // dispatch API action to get match history from the database
        handleClick: () => dispatch(toggleInstructions()), 
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Instructions);