import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="main-footer">
        <p>&#169; 2020 Nik Osvalds</p>
        <a className="icon-link" href="https://github.com/nosvalds/come-on-you-team">
            <FontAwesomeIcon icon={ faGithubSquare } />
        </a>
    </footer>
)

export default Footer;