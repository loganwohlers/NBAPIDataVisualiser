import React from 'react'

import { Lebron, Harden, Giannis, Durant } from '../../assets/PlayerStats'

import { connect } from 'react-redux'
import MultiDropdown from './MultiDropdown'

class PlayerComparison extends React.Component {

    last10 = () => {
        let currYear = this.props.season.year
        let players

        currYear === 2018 ? players = [Lebron, Durant] : players = [Giannis, Harden]

        let twoPlayers = players.map(pl => {
            let currPlayerSeasonGames = pl.player_seasons.find(ps => {
                return ps.year === currYear
            }).games

            let sorted = currPlayerSeasonGames.sort((a, b) => {
                return parseInt(b.date) - parseInt(a.date)
            })

            return sorted.slice(0, 10)
        })
        return twoPlayers
    }

    radarPrep = () => {
        let currYear = this.props.season.year
        let players

        currYear === 2018 ? players = [Lebron, Durant] : players = [Giannis, Harden]

        let stats = players.map(pl => {
            let currPS = pl.player_seasons.filter(ps => {
                return ps.year === currYear
            })[0]

            let playerObj = {
                PTS: parseFloat(currPS['pts_per_g']),
                REB: parseFloat(currPS['trb_per_g']),
                AST: parseFloat(currPS['ast_per_g']),
                STL: parseFloat(currPS['stl_per_g']),
                BLK: parseFloat(currPS['blk_per_g'])
            }

            return playerObj
        })
        return stats
    }

    render() {
        return (
            <div>
                <MultiDropdown playerSeasons={this.props.season.playerSeasons.data} />
            </div>


        )

    }


}
const mapStateToProps = (state) => {
    return { season: state.currSeason }
}

export default connect(mapStateToProps)(PlayerComparison)

    // < PracticeVictory lines = { this.getRelaventGames().reverse() } />
    //     <h2 className="ui item centered">Last 10 Games</h2>
    //     <PersonalBoxTable lines={this.getRelaventGames()} />



