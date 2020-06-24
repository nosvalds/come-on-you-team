import React from 'react';
import PitchSection from '../PitchSection';

const Pitch = () => {
    let positions = ["GK", "D", "F"]; // could have this in state and allow modification for future functionality

    return (
        <section className="pitch-container-background">
            <div className="pitch-container-inside">
                {/* loop over positions array to render a pitch section with players */}
                { positions.map((position, i) => (
                    <PitchSection key={ i } team={ "teamA" } position={ position }/>
                ))}
                {/* Have to reverse the positions for team B as page is rendered left to right */}
                { positions.reverse().map((position, i) => (
                    <PitchSection key={ i } team={ "teamB" } position={ position }/>
                ))}
            </div>
        </section>
    )
}

export default Pitch;