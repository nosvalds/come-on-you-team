import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const MatchRow = ({ match, handleDelete }) => {
    let teamSize = match.team_size;
    return (
        <>
            <tr>
                <td aria-label="match id and team size">
                    <span className="match-id">Game { match.id }</span> 
                    { `${teamSize} x ${teamSize}` }
                </td>
                <td></td>
                <td>
                </td>
                <td></td>
                <td>
                    <button 
                        className="btn-primary" 
                        aria-label="delete game button"
                        onClick={ () => handleDelete(match.id) }
                    >
                        <FontAwesomeIcon icon={ faTrashAlt } />
                    </button>
                </td>
            </tr>
            <tr>
                <td aria-label="Team A name">{ match.teamA.name }</td>
                <td aria-label="Team A score">{ match.teamA.score }</td>
                <td>
                    <FontAwesomeIcon icon={ faMinus } />
                </td>
                <td aria-label="Team B score">{ match.teamB.score }</td>
                <td aria-label="Team B name">{ match.teamB.name }</td>
            </tr>
        </>
    )
}

export default MatchRow;