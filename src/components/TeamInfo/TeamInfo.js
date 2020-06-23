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

    return ( 
        <section className="team-info">
            { edit ?
                <form
                    className="team-entry-form"
                    onSubmit={ formSubmit }
                >
                    <section className="form-section">
                        <label
                            htmlFor="teamA"
                            className="team-name-label"
                            aria-label="Team A name"
                        >
                        </label>
                        <input
                            type="text"
                            id="teamA"
                            className="name-input"
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
                            className="team-name-label"
                            aria-label="Team B name"
                        >
                        </label>
                        <input
                            type="text"
                            id="teamA"
                            className="name-input"
                            value={ teamB }
                            onChange={ handleChangeB }
                            required
                        />
                    </section>
                </form>
                : 
                <>
                    <h3>{ teamA }</h3>
                    <h3>{ teamB }</h3> 
                </>
            }
        </section>
    )
}
export default TeamInfo;