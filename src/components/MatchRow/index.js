import { connect } from 'react-redux';
import MatchRow from './MatchRow';
import { deleteMatch } from '../../data/actions/api';

// dispatch the addPlayer action to assign the player to a team
const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(deleteMatch(id)),
    }
}

export default connect("", mapDispatchToProps)(MatchRow);