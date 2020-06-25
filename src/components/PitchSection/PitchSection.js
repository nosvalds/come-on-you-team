import React from 'react';

const PitchSection = ({ players }) => {
    return (
        <section className="pitch-section-container">
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