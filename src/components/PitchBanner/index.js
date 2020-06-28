import { connect } from 'react-redux';
import PitchBanner from './PitchBanner';

// calculate and pass in whether or not the teams have full rosters of players, as well as the editTeamName flag
const mapStateToProps = ({ teamSize, editTeamName, teamA, teamB}) => {
    return {
        teamsFilled: (teamA.playersFilled === teamSize && teamB.playersFilled === teamSize),
        editTeamName,
    };
}

export default connect(mapStateToProps)(PitchBanner);