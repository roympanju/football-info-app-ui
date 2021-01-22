import React, { Component } from 'react';
import CompetitionTab from './components/CompetitionTab';
import Table from './components/Table';
import Tabs from './components/Tabs';
//import './App.css'

class App extends Component{
    state = {
        standings: [],
        competitions: []
    }
    componentDidMount() {
         const url1 = "http://localhost:8090/football/leaguestanding/PL/standings"
         const url2 = "http://localhost:8090/football/competitions"
        // fetch(url)
        // .then((response) => {
        //     return response.json()
        // })
        // .then((result) => {
        //     this.setState({
        //         standings: result
        //     })
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        Promise.all([
            fetch(url1),
            fetch(url2)
        ])
        .then(([res1, res2]) => {
            return Promise.all([res1.json(), res2.json()])
        })
        .then(([res1, res2]) => {
            this.setState({
                standings: res1,
                competitions: res2
            })
        });

    }
    removeCharacter = (index) => {
        const {standings} = this.state
        this.setState({
            standings: standings.filter((team, i) => {
                return i !== index
            }),
        })
    }
    render(){
        const {standings, competitions} = this.state
        return (
            <div>
                <h1>Welcome To Football</h1>
                <Tabs>
                    <div label="Home">
                        This is Home Tab
                    </div>
                    <div label="Competitions">
                        <span>
                            <CompetitionTab characterData={competitions}/>
                        </span>
                    </div>
                    <div label="Standings" className="container">
                        <Table characterData={standings} removeCharacter={this.removeCharacter} />
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default App