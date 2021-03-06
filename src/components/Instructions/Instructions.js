import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faFutbol } from '@fortawesome/free-solid-svg-icons'

const Instructions = ({ showInstructions, handleClick }) => (
    <section className="instructions-section">
        { showInstructions ?
            <>
                <header className="instructions-header">
                    <h2>HOW IT WORKS</h2>
                    <p>Randomly select teams and track scores for football matches</p>
                </header>
                <div className="instructions-card-container">
                    <div className="instructions-card">
                        <FontAwesomeIcon icon={ faUserPlus } className="instructions-icon" size="lg"/>
                        <h5>Player entry</h5>
                        <p>Select the number of players per side then enter the players names. They will be added randomly to the pitch.</p>
                        <p>Once complete you have the option of shuffling the teams by clicking the "shuffle teams" button below the pitch.</p>
                    </div>
                    <div className="instructions-card">
                        <FontAwesomeIcon icon={ faUsers } className="instructions-icon"  />
                        <h5>Team info</h5>
                        <p>Fill out your team names or accept the defaults.</p>
                        <p>Then you're ready to play! You can click "Start Over" if you've made a mistake or don't want to save the match.</p>
                    </div>
                    <div className="instructions-card">
                        <FontAwesomeIcon 
                            icon={ faFutbol } 
                            className="instructions-icon" 
                        />
                        <h5>Score and save</h5>
                        <p>Update scores with the counters underneath the team names as you go or after the match.</p>
                        <p>Once the match is over press the "Match Complete" button to save the match format and score. View results of previous matches in the "Match History" section.</p>
                    </div>
                </div>
            </>
            :
            null
        }
        <button
            onClick={ () => handleClick() }
        >
            { showInstructions ? "Hide Instructions" : "Show Instructions" }
        </button>
    </section>
)

export default Instructions;