import React from 'react';
import Goal from '../Goal';
import Defense from '../Defense';
import Offense from '../Offense';

const Pitch = () => {
    return (
        <section className="pitch-container-background">
            <div className="pitch-container-inside">
                <Goal team="teamA"/>
                <Defense team="teamA" />
                <Offense team="teamA" />
                <Offense team="teamB" />
                <Defense team="teamB" />
                <Goal team="teamB"/>
            </div>
        </section>
    )
}

export default Pitch;