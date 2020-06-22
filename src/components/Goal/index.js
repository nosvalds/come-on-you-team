import { connect } from 'react-redux';
import Goal from './Goal';

const mapStateToProps = ( state, { team }) => {
    // use team prop to get the goalkeeper from state. For now goalkeeper is always the first player in the positions array
    return {
        keeperName: state[team].positions[0].name,
    };
}

export default connect(mapStateToProps)(Goal);