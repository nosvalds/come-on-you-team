import React from "react";

const MatchOptions = ({ teamsFilled, handleReset, handleShuffle, handleComplete }) => (
    <section className="match-options-section">
        <button 
            className="btn-primary"
            onClick={ handleReset }
        >
            Start Over
        </button>
        {/* Only show these buttons once the teams are filled with players */}
        { teamsFilled ?
            <>
                <button 
                    className="btn-primary"
                    onClick={ handleComplete }
                >
                    Match Complete
                </button>
                <button 
                    className="btn-primary"
                    onClick={ handleShuffle }
                >
                    Shuffle Teams
                </button>
            </>
            : null
        }
    </section>
)

export default MatchOptions;