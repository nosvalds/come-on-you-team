import React from 'react';

const Defense = ({ players }) => {
    return (
        <section className="defense-container">
            { players.map((player, i) => (
                    <h4
                        key={ i }
                        className="player-name"
                    >
                        { player }
                    </h4>
                ))
            }
        </section>
    )
}

export default Defense;