import React from 'react';
import BoxScoreTable from '../components/BoxScoreTable';

import { connect } from 'react-redux'
import { fetchGameBoxScore } from '../actions'

class GameBoxScore extends React.Component {

    //fetch w/ game in aboutProps
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

        let boxscore = this.props.currGame.boxscore
        let filtered
        boxscore ? filtered = this.filterBoxScore(boxscore) : filtered = false

        return (
            <div>
                {filtered ?
                    <div>
                        <h3>{date}:  {away} at {home}</h3>

                        <h4>{away}</h4>
                        <BoxScoreTable lines={filtered.away} />
                        <br></br>
                        <br></br>

                        <h4>{home}</h4>
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

