import React from 'react';
import BoxScoreTable from '../components/BoxScoreTable';

class GameBoxScore extends React.Component {

    constructor() {
        super()
        this.state = {
            boxscore: {}
        }
    }

    //fetch w/ game in aboutProps
    componentDidMount() {
        fetch('http://localhost:3000/games/' + this.props.location.aboutProps.game.id)
            .then(res => res.json())
            .then(box => {
                let boxscore = this.filterBoxScore(box)
                this.setState({
                    boxscore
                })
            })
    }

    filterBoxScore = (boxscore) => {
        let team_filtered = { home: [], away: [] }
        let home = this.props.location.aboutProps.game.home_team.name
        boxscore.forEach(game => {
            game.player_season.team === home ?
                team_filtered.home.push(game)
                :
                team_filtered.away.push(game)
        })
        return team_filtered
    }

    render() {
        //could display much more game info here-- maybe a whole game header component
        let home = this.props.location.aboutProps.game.home_team.name
        let away = this.props.location.aboutProps.game.away_team.name
        let date = this.props.location.aboutProps.game.date
        return (
            <div>
                {!Object.keys(this.state.boxscore).length ?
                    <div>LOADING... </div>
                    :
                    <div>
                        <h3>{date}:  {away} at {home}</h3>

                        <h4>{away}</h4>
                        <BoxScoreTable lines={this.state.boxscore.away} />
                        <br></br>
                        <br></br>

                        <h4>{home}</h4>
                        <BoxScoreTable lines={this.state.boxscore.home} />
                    </div>
                }
            </div>
        )
    }

}

export default GameBoxScore

