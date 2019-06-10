import React from 'react'

// import { Lebron, Harden, Giannis, Durant } from '../../assets/PlayerStats'

import { connect } from 'react-redux'

import PracticeVictory from './PracticeVictory'

class PlayerComparison extends React.Component {

    //only worked w/ hardcoded games
    last10 = () => {
        let currYear = this.props.season.year
        let players = this.props.playerComparison.results.data
        console.log('players', players)

        let selectedPlayers = players.map(pl => {
            let currPlayerSeasonGames = pl.player_seasons.find(ps => {
                return ps.year === currYear
            }).games

            let sorted = currPlayerSeasonGames.sort((a, b) => {
                return parseInt(b.date) - parseInt(a.date)
            })

            return sorted.slice(0, 10)
        })
        console.log('selected players lines: ', selectedPlayers)
        return selectedPlayers
    }

    render() {
        return (
            <div className='ui container center ' >
                <div className='ui item centered'>
                    <PracticeVictory lines={this.last10()} />
                </div>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        season: state.currSeason,
        playerComparison: state.playerComparison
    }
}

export default connect(mapStateToProps)(PlayerComparison)



