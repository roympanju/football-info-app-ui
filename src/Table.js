import React, { Component } from 'react';

const TableHead = () => { 
    return (
        <thead>
            <tr>
                <th>Team</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.characterData.map((team, index) => {
        return (
            <tr key={index}>
                <td>{team}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
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