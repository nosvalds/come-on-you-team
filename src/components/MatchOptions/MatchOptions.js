import React from "react";

const MatchOptions = ({ teamsFilled, handleReset, handleShuffle }) => (
    <section className="match-options-section">
        <button 
            className="btn-primary"
            onClick={ handleReset }
        >
            Start Over
        </button>
        { teamsFilled ?
            <button 
                className="btn-primary"
                onClick={ handleShuffle }
            >
                Shuffle Teams
            </button>
            : null
        }
    </section>
)

export default MatchOptions;