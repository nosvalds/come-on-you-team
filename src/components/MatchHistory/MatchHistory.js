import React from 'react';
import MatchRow from '../MatchRow/MatchRow'

const MatchHistory = ({ matchHistory }) => {

    return (
        <section className="match-hist-section">
            <header>
                <h3 className="match-hist-header">Match History</h3>
            </header>
            <table className="match-hist-table">
                <thead>
                    {/* <tr>
                        <th aria-label="Team A name">Team</th>
                        <th aria-label="Team A score"></th>
                        <th></th>
                        <th aria-label="Team B score"></th>
                        <th aria-label="Team B name">Team</th>
                    </tr> */}
                    {/* <tr>
                        <th aria-label="match ID">#</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> */}
                </thead>
                <tbody>
                    { matchHistory.map((match, i) => (
                        <MatchRow key={ i } match={ match } />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default MatchHistory;