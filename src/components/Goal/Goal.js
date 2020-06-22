import React from 'react';

const Goal = ({ keeperName }) => {
    return (
        <section className="goal-container">
            <h4 className="keeper-name">{ keeperName }</h4>
        </section>
    )
}

export default Goal;