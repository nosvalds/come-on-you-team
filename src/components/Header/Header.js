import React from 'react';
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
    const largerThan500 = useMediaPredicate("(min-width: 500px)"); // use this react-media-hook to determine the screen width and make header responsive

    return (
        <header className="main-header">
            <h1 className="main-header-text">
                { largerThan500 ?
                    (<><span className="accent-color">C</span>ome <span className="accent-color">O</span>n <span className="accent-color">Y</span>ou _____ !</>)
                    :
                    (<span className="accent-color">COY__!</span>)
                }
            </h1>
            <p>Select your team size, add players to the pitch to assign them randomly to teams, then set your team name.</p>
        </header>
    )
}

export default Header;