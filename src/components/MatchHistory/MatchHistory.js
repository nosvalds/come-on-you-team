import React from 'react';
import MatchRow from '../MatchRow/'
import Loading from '../Loading/';

const MatchHistory = ({ matchHistory }) => (
    <section className="match-hist-section">
        <header>
            <h3 className="match-hist-header">Match History</h3>
        </header>
        {/* wrap with Loading component so user sees loading spinner while waiting for response from the API */}
        <Loading>
            <table className="match-hist-table">
                <thead>
                </thead>
                <tbody>
                    { matchHistory.map((match, i) => (
                        <MatchRow key={ i } match={ match } />
                    ))}
                </tbody>
            </table>
        </Loading>
    </section>
)

export default MatchHistory;