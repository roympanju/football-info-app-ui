import React, { Component } from 'react';
import Table from './components/Table';
import Tabs from './components/Tabs';
import './App.css'

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
            <div>
                <h1>Welcome To Football</h1>
                <Tabs>
                    <div label="Competions">
                        This is Home Tab
                    </div>
                    <div label="Standings" className="container">
                        <Table characterData={data} removeCharacter={this.removeCharacter} />
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default App