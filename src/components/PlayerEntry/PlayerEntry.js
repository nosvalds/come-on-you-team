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
        setPlayerName("");
    }

    return (
        <form
            className="player-entry-form"
            onSubmit={ handleFormSubmit } 
        >
            <section className="form-section">
                <label
                    htmlFor="playerName"
                    class="player-name-label"
                >
                    Player Name
                </label>
                <input
                    type="text"
                    id="playerName"
                    class="player-name-input"
                    value={ playerName }
                    onChange={ (e) => handleChange(e) }
                />
            </section>
            <button
                className="btn-primary"
            >
                Add Player
            </button>
        </form>
    )
}

export default PlayerEntry;
