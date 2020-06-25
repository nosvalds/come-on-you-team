import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ( { teamSize } ) => {
    return {
        teamSize
    }
}

export default connect(mapStateToProps)(App);