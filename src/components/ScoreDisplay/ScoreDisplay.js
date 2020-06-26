import React from 'react';

const ScoreDisplay = ({ team, score, handleChange }) => {
    return (
        <div className="score-display">
            <label 
                htmlFor={`${team}-score`}
                className="score-label"
            >
            </label>
            <input
                type="number"
                id={ `${team}-score`}
                className="score-input"
                value={ score }
                onChange={ (e) => handleChange(e.currentTarget.value, team) }
                min="0"
            >
            </input>
        </div>
    )
}

export default ScoreDisplay;