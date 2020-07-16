import React from 'react';

const Nav = () => {
    return (
        <nav>
            <a 
                className="nav-left-tab" 
                href="#/play"
            >
                Play
            </a>
            <a 
                className="nav-right-tab" 
                href="#/"
            >
                Match History
            </a>
        </nav>
    )
}

export default Nav;