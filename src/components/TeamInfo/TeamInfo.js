import React, { useState } from 'react';

const TeamInfo = ({ edit, handleSubmit, initialTeamA, initialTeamB }) => {
    const [teamA, setTeamA] = useState(initialTeamA);
    const [teamB, setTeamB] = useState(initialTeamB);

    // inputs are controlled components
    const handleChangeA = (e) => {
        setTeamA(e.currentTarget.value);
    }
    // inputs are controlled components
    const handleChangeB = (e) => {
        setTeamB(e.currentTarget.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            teamA,
            teamB
        });
        
    }

    return ( edit ?
        <form
            className="team-entry-form"
            onSubmit={ formSubmit }
        >
            <section className="form-section">
                <label
                    htmlFor="teamA"
                    className="player-name-label"
                >
                    Team A
                </label>
                <input
                    type="text"
                    id="teamA"
                    className="team-name-input"
                    value={ teamA }
                    onChange={ handleChangeA }
                    required
                />
            </section>
            <button
                className="btn-primary"
            >
                Set
            </button>
            <section className="form-section">
                <label
                    htmlFor="teamA"
                    className="player-name-label"
                >
                    Team B
                </label>
                <input
                    type="text"
                    id="teamA"
                    className="team-name-input"
                    value={ teamB }
                    onChange={ handleChangeB }
                    required
                />
            </section>
        </form>
        :
        <section className="team-info">
            <h3>{ teamA }</h3>
            <h3>{ teamB }</h3>
        </section>
    )
}
export default TeamInfo;