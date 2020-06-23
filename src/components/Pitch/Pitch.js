import React from 'react';
import Goal from '../Goal';
import Defense from '../Defense';
import Offense from '../Offense';

const Pitch = () => {
    return (
        <section className="pitch-container-background">
            <div className="pitch-container-inside">
                <Goal team="team_A"/>
                <Defense team="team_A" />
                <Offense team="team_A" />
                <Offense team="team_B" />
                <Defense team="team_B" />
                <Goal team="team_B"/>
            </div>
        </section>
    )
}

export default Pitch;