import React, { useState } from 'react';

const PlayerEntry = ({ handleSubmit }) => {
    // useState for the form input control
    const [playerName, setPlayerName] = useState("");
    const handleChange = (e) => {
        setPlayerName(e.currentTarget.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(playerName);
    }

    return (
        <form
            className="player-entry-form"
            onSubmit={ handleFormSubmit } 
        >
            <section className="form-section">
                <label
                    htmlFor="playerName"
                >
                    Player Name:
                </label>
                <input
                    type="text"
                    id="playerName"
                    value={ playerName }
                    onChange={ (e) => handleChange(e) }
                />
            </section>
            <button
                className="button"
            >
                Add Player
            </button>
        </form>
    )
}

export default PlayerEntry;
