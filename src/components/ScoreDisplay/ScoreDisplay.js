import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ScoreDisplay = ({ team, score, handleChange }) => {
    const handleClick = (increment) => {
        let newScore = score + increment; // calculate the next value
        if (newScore >= 0) { // check it's within bounds, then call handleChange function to dispatch a change to state with that value, otherwise don't alter state
            handleChange(newScore, team);
        } 
    }
    
    return (
        <div className="score-display">
            <div className="increment-container">
                <button 
                    onClick={() => handleClick(-1)} // pass increment into handleClick
                    className="btn-increment btn-increment-l"
                >
                    <FontAwesomeIcon icon={ faMinus } />
                </button>
                <h5>{ score }</h5>
                <button 
                    onClick={() => handleClick(1)}
                    className="btn-increment btn-increment-r"
                >
                    <FontAwesomeIcon icon={ faPlus } />
                </button>
            </div>
        </div>
    )
}

export default ScoreDisplay;