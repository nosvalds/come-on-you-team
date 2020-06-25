import React from 'react';

// Option 1: teams filled = true and editTeamName = true, then direct user to edit the team names
// Option 2: teams filled = true and editTeamName = false, Game On!
// Option 3: teams filled = false - teams are not filled - show nothing
const PitchBanner = ({ teamsFilled, editTeamName }) => (
    (teamsFilled && editTeamName) ?
        (
            <h3 className="pitch-header">
                Players set, now name your teams!
            </h3>
        )
        : (
            (teamsFilled) ? 
                (
                    <h3 className="pitch-header">
                        Teams Complete, Game On!
                    </h3>
                )
            :
            null
        )
)

export default PitchBanner;