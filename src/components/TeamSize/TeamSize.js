import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const TeamSize = ({ initial, min, max, handleSubmit }) => {
    const [count, setCount] = useState(initial);

    const handleClick = (increment) => {
        let newCount = count + increment; // calculate the next value
        if (newCount <= max && newCount >= min) { // check it's within bounds, then update state with that value, otherwise don't alter state
            setCount(newCount);
        } 
    }

    return (
        <>
            
            <section className="team-size-section">
                <h5>Team Size</h5>
                <div className="increment-container">
                    <button 
                        onClick={() => handleClick(-1)} // pass increment into handleClick
                        className="btn-increment btn-increment-l"
                    >
                        <FontAwesomeIcon icon={ faMinus } />
                    </button>
                    <h5>{ count }</h5>
                    <button 
                        onClick={() => handleClick(1)}
                        className="btn-increment btn-increment-r"
                    >
                        <FontAwesomeIcon icon={ faPlus } />
                    </button>
                </div>
                <button
                    className="btn-primary"
                    onClick={ () => handleSubmit(count) }
                >
                    Set
                </button>
            </section>
        </>
    );
}

export default TeamSize;