import React from 'react';

// Standard Components
import Pitch from '../Pitch/Pitch';
import Scores from '../Scores/Scores';

// React-Redux Components (state/dispatch passed from index.js)
import TeamInfo from '../TeamInfo';
import PlayerEntry from '../PlayerEntry';
import TeamSize from '../TeamSize';
import MatchOptions from '../MatchOptions';
import PitchBanner from '../PitchBanner';

const MatchPlay = ({ teamSize }) => { 
    // If teamSize equals 0 then show the TeamSize component to set the team size. If teamsize is set, then show the match play components.
    return teamSize === 0 ?
        <TeamSize initial={ 5 } min={ 3 } max={ 11 } />
        :
        <>
            <PitchBanner />
            <PlayerEntry />
            <TeamInfo />
            <Scores />
            <Pitch />
            <MatchOptions />
        </>
}

export default MatchPlay;