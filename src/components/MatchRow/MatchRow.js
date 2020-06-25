import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const MatchRow = ({ match }) => {

    let teamSize = match.team_size;
    return (
        <tr>
            <td>{ match.id }</td>
            <td>{ `${teamSize} x ${teamSize}` }</td>
            <td>{ match.teamA.name }</td>
            <td>{ match.teamA.score }</td>
            <td>
                <FontAwesomeIcon icon={ faMinus } />
            </td>
            <td>{ match.teamB.score }</td>
            <td>{ match.teamB.name }</td>
            <td>
                { match.game_complete ? 
                    null 
                    : <button>Resume</button>
                }
            </td>
            <td>
                <button>
                    <FontAwesomeIcon icon={ faTrashAlt } />
                </button>
            </td>
        </tr>
    )
}

export default MatchRow;