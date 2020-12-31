import React, { Component } from 'react';
import Table from './Table';

class App extends Component{
    state = {
        data: []
    }
    componentDidMount() {
        const url = "https://cors-anywhere.herokuapp.com/http://localhost:8090/football/PL/teams"
        fetch(url)
        .then((result) => result.json)
        .then((result) => {
            this.setState({
            data: result,
            })
        })
    }
    removeCharacter = (index) => {
        const {data} = this.state
        this.setState({
            data: data.filter((team, i) => {
                return i !== index
            }),
        })
    }
    render(){
        const {data} = this.state
        return (
            <div className="container">
                <Table characterData={data} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}
export default App