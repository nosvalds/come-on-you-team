import React from 'react';
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
    const largeHeader = useMediaPredicate("(min-width: 730px)"); // use this react-media-hook to determine the screen width and make header responsive

    return (
        <header className="main-header">
            <h1 className="main-header-text">
                { largeHeader ?
                    (<><span className="accent-color">C</span>ome <span className="accent-color">O</span>n <span className="accent-color">Y</span>ou _____ !</>)
                    :
                    (<span className="accent-color">COY__!</span>)
                }
            </h1>
            <p>Select your team size, add players to the pitch, then set your team name.</p>
            <p>Players will be assigned randomly.</p>
        </header>
    )
}

export default Header;