import React from 'react';
import BoxScoreTable from '../components/BoxScoreTable';

import { connect } from 'react-redux'
import { fetchGameBoxScore } from '../actions'

class GameBoxScore extends React.Component {

    componentDidMount() {
        this.props.fetchGameBoxScore()
    }

    filterBoxScore = (boxscore) => {
        let team_filtered = { home: [], away: [] }
        let home = this.props.currGame.home_team.name
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
        let home = this.props.currGame.home_team.name
        let away = this.props.currGame.away_team.name
        let date = this.props.currGame.date
        let convertedDate = (date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4))

        let boxscore = this.props.currGame.boxscore
        let filtered
        boxscore ? filtered = this.filterBoxScore(boxscore) : filtered = false

        return (
            <div>
                {filtered ?
                    <div>
                        <h3>{convertedDate}:  {away} at {home}</h3>

                        <h2>{away}</h2>
                        <BoxScoreTable lines={filtered.away} />
                        <br></br>

                        <h2>{home}</h2>
                        <BoxScoreTable lines={filtered.home} />
                    </div>
                    :
                    <div>LOADING... </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currGame: state.currGame }
}


export default connect(mapStateToProps, { fetchGameBoxScore })(GameBoxScore)

