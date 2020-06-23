import React from 'react';

const Header = ({ teamSize }) => (
    <header className="main-header">
        <h1 className="main-header-text">
            <span className="accent-color">C</span>ome <span className="accent-color">O</span>n <span className="accent-color">Y</span>ou _____ !
        </h1>
        <p>Add players to the pitch to assign them randomly to { teamSize }-a-side football teams</p>
    </header>
)

export default Header;