import React from 'react';
import ScoreDisplay from '../ScoreDisplay';

const Scores = () => (
    <section className="score-section">
        <ScoreDisplay team="teamA"/>
        <ScoreDisplay team="teamB"/>
    </section>
)

export default Scores;