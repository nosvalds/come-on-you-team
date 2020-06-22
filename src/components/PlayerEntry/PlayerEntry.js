import React, { useState } from 'react';

const PlayerEntry = ({ handleSubmit, teamsFilled }) => {
    // useState for the form input control
    const [playerName, setPlayerName] = useState("");
    const handleChange = (e) => {
        setPlayerName(e.currentTarget.value);
    }

    // call handleSubmit and pass the playerName from the input field
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(playerName);
        setPlayerName("");
    }

    return ( !teamsFilled ?
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
                    onChange={ handleChange }
                />
            </section>
            <button
                className="btn-primary"
            >
                Add Player
            </button>
        </form>
        :
        <h2>
            Teams Filled: Game On!
        </h2>
    )
}

export default PlayerEntry;
