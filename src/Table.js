import React, { Component } from 'react';

const TableHead = () => { 
    return (
        <thead>
            <tr>
                <th>Team</th>
                <th>Position</th>
                <th>PlayedGames</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>Points</th>
                <th>GoalsFor</th>
                <th>GoalsAgainst</th>
                <th>GoalDifference</th>
                <th>Form</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.characterData.map((position, index) => {
        return (
            <tr key={index}>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>{position.team.name}</button>
                </td>
                <td>{position.position}</td>
                <td>{position.playedGames}</td>
                <td>{position.won}</td>
                <td>{position.draw}</td>
                <td>{position.lost}</td>
                <td>{position.points}</td>
                <td>{position.goalsFor}</td>
                <td>{position.goalsAgainst}</td>
                <td>{position.goalDifference}</td>
                <td>{position.form}</td>
            </tr>
        )
    })
    return(
        <tbody>{rows}</tbody>
    )
}

class Table extends Component{
    render(){
        const {characterData, removeCharacter} = this.props
        return (
            <table>
                <TableHead />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}
export default Table