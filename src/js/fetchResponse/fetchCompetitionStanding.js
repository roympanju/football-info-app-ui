import { fetchSuccess } from '../actions/index'

export function fetchStandings(data) {
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