import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const MatchRow = ({ match }) => {

    let teamSize = match.team_size;
    return (
        <>
            <tr>
                <td>{ match.teamA.name }</td>
                <td>{ match.teamA.score }</td>
                <td>
                    <FontAwesomeIcon icon={ faMinus } />
                </td>
                <td>{ match.teamB.score }</td>
                <td>{ match.teamB.name }</td>
            </tr>
            <tr>
                <td>
                    <span className="match-id">{ match.id }</span> 
                    { `${teamSize} x ${teamSize}` }
                </td>
                <td></td>
                <td></td>
                <td>
                    { match.game_complete ? 
                        null 
                        : <button className="btn-primary">Resume</button>
                    }
                </td>
                <td>
                    <button className="btn-primary">
                        <FontAwesomeIcon icon={ faTrashAlt } />
                    </button>
                </td>
            </tr>
        </>
    )
}

export default MatchRow;