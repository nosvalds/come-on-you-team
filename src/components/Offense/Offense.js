import React from 'react';

const Offense = ({ players }) => {
    return (
        <section className="offense-container">
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

export default Offense;