import React from 'react';
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
    const largeHeader = useMediaPredicate("(min-width: 730px)"); // use this react-media-hook to determine the screen width and make header text responsive

    return (
        <header className="main-header">
            <h1 className="main-header-text">
                {/* only display COY__! on smaller screens */}
                { largeHeader ?
                    // Come On You ____ !
                    (<><span className="accent-color">C</span>ome <span className="accent-color">O</span>n <span className="accent-color">Y</span>ou _____ !</>)
                    :
                    // COY_!
                    (<span className="accent-color">COY__!</span>)
                }
            </h1>
            <p>Come On You __! allows you to enter players names and randomly select teams for your pick-up football matches.</p>
            <p>You can also set team names and save match results.</p>
        </header>
    )
}

export default Header;