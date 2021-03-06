import React, { useState } from 'react';

const PlayerEntry = ({ handleSubmit, teamsFilled }) => {
    // useState for the form input control to manage state locally rather than at the app level
    const [playerName, setPlayerName] = useState("");

    // input is a controlled component
    const handleChange = (e) => {
        setPlayerName(e.currentTarget.value);
    }

    // call handleSubmit and pass the playerName from the input field
    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevent page refresh default browser behavior
        handleSubmit(playerName);
        setPlayerName(""); // clear out input field once submitted so user can type next player name
    }

    return ( !teamsFilled ? // if the teams are not full, then show the player entry form
        <form
            className="player-entry-form"
            onSubmit={ handleFormSubmit } 
        >
            <section className="form-section">
                <label
                    htmlFor="playerName"
                    className="player-name-label"
                >
                    Player Name
                </label>
                <input
                    type="text"
                    id="playerName"
                    className="name-input"
                    value={ playerName }
                    onChange={ handleChange }
                    required
                />
            </section>
            <button
                className="btn-primary"
            >
                Add Player
            </button>
        </form>
        : 
        null
    )
}

export default PlayerEntry;
