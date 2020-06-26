import React from 'react';

// Standard Components
import Pitch from '../Pitch/Pitch';

// React-Redux (state/dispatch passed from index.js)
import TeamInfo from '../TeamInfo';
import PlayerEntry from '../PlayerEntry';
import TeamSize from '../TeamSize';
import MatchOptions from '../MatchOptions';
import PitchBanner from '../PitchBanner';

const MatchPlay = ({ teamSize }) => { 
    return teamSize === 0 ?
        <TeamSize initial={ 5 } min={ 3 } max={ 11 } />
        :
        <>
            <PitchBanner />
            <PlayerEntry />
            <TeamInfo />
            <Pitch />
            <MatchOptions />
        </>
}

export default MatchPlay;