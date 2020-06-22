import React from 'react';
import Goal from '../Goal';
import Defense from '../Defense';

const Pitch = () => {
    return (
        <section className="pitch-container">
            <Goal team="team_A"/>
            <Defense team="team_A" />
            {/* <Offense team="team_A" />
            <Offense team="team_B" /> */}
            <Defense team="team_B" />
            <Goal team="team_B"/>
        </section>
    )
}

export default Pitch;