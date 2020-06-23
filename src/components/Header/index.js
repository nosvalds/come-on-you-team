import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = ( { teamSize } ) => {
    // use team prop to get the Header players from state. For now Header players are always the 4th and 5th player in the positions array
    return {
       teamSize
    };
}

export default connect(mapStateToProps)(Header);