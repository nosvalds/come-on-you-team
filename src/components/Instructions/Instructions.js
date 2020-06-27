import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faFutbol } from '@fortawesome/free-solid-svg-icons'

const Instructions = () => (
    <section className="instructions-section">
        <header className="instructions-header">
            <h2>HOW IT WORKS</h2>
            <p>Randomly select teams and track scores for football matches</p>
        </header>
        <div className="instruction-card">
            <FontAwesomeIcon icon={ faUserPlus } className="instructions-icon" />
            <h4>Player entry</h4>
            <p>Select the number of players per side you would like. Then enter the players names. They will be added randomly to the pitch. Once complete you have the option of shuffling the teams by clicking the "shuffle teams" button below the pitch.</p>
        </div>
        <div className="instruction-card">
            <FontAwesomeIcon icon={ faUsers } className="instructions-icon" />
            <h4>Team info</h4>
            <p>Fill out your team names or accept the defaults. Then you're ready to play! You can click "Start Over" if you've made a mistake or don't want to save the match.</p>
        </div>
        <div className="instruction-card">
            <FontAwesomeIcon icon={ faFutbol } className="instructions-icon" />
            <h4>Score and save</h4>
            <p>Update scores with the counters underneath the team names as you go or after the match. Once the match is over press the "Match Complete" button to save the match format and score. View results of previous matches on the "Match History" tab.</p>
        </div>
    </section>
)

export default Instructions;