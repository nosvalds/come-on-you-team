import React from "react";

const MatchOptions = ({ teamsFilled }) => (
    <section className="match-options-section">
        <button className="btn-primary">
            Start Over
        </button>
        { teamsFilled ?
            <button className="btn-primary">
                Shuffle Teams
            </button>
            : null
        }
    </section>
)

export default MatchOptions;