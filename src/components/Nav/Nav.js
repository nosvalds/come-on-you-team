import React from 'react';

const Nav = () => {
    return (
        <nav>
            <a 
                className="nav-left-tab" 
                href="#/"
            >
                Play
            </a>
            <a 
                className="nav-right-tab" 
                href="#/match-history"
            >
                Match History
            </a>
        </nav>
    )
}

export default Nav;