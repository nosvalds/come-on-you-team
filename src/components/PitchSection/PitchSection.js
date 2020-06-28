import React from 'react';

const PitchSection = ({ players }) => {
    return (
        <section className="pitch-section-container">
            {/* map over the players array and output their name on the pitch */}
            { players.map((player, i) => (
                    <h4
                        key={ i }
                        className="player-name"
                    >
                        { player.name }
                    </h4>
                ))
            }
        </section>
    )
}

export default PitchSection;