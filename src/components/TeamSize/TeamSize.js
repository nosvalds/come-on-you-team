import React, { useState } from 'react';

// Icon imports from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const TeamSize = ({ initial, min, max, handleSubmit }) => {
    // track this state locally
    const [count, setCount] = useState(initial);

    const handleClick = (increment) => {
        let newCount = count + increment; // calculate the next value
        if (newCount <= max && newCount >= min) { // check it's within bounds, then update state with that value, otherwise don't alter state
            setCount(newCount);
        } 
    }

    return (
        <section className="team-size-section">
            <h5>Team Size</h5>
            <div className="increment-container">
                <button 
                    onClick={() => handleClick(-1)} // pass increment into handleClick
                    className="btn-increment btn-increment-l"
                >
                    <FontAwesomeIcon icon={ faMinus } />
                </button>
                <h5>{ count }</h5> {/* display the count */}
                <button 
                    onClick={() => handleClick(1)} // pass increment into handleClick
                    className="btn-increment btn-increment-r"
                >
                    <FontAwesomeIcon icon={ faPlus } />
                </button>
            </div>
            <button
                className="btn-primary"
                onClick={ () => handleSubmit(count) } // submit the final count to be saved in App state
            >
                Set
            </button>
        </section>
    );
}

export default TeamSize;