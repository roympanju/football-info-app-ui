import React, { Component } from 'react';
import Table from './Table';

class App extends Component{
    state = {
        data: []
    }
    componentDidMount() {
        const url = "http://localhost:8090/football/leaguestanding/PL/standings"
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            this.setState({
                data: result
            })
        })
        .catch((err) => {
            console.log(err)
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