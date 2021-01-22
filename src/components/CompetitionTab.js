import { Component } from "react"

const Competitions = (props) => {
    const comps = props.characterData.map((competition, index) => {
        return (
            <div>
                {competition}
            </div>
        )
    })
    return (
        <div>{comps}</div>
    )
}
class CompetitionTab extends Component{
    render(){
        const {characterData} = this.props
        return(
            <div>
                <Competitions characterData={characterData} />
            </div>
        )
    }
}
export default CompetitionTab