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