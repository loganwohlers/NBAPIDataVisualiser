import React from 'react';
import PersonalBoxTable from './PersonalBoxTable';
import PlayerDisplayTable from './SelectedDisplay/PlayerDisplayTable'
import PracticeVictory from './SelectedDisplay/PracticeVictory'
import PlayerRadar from './SelectedDisplay/PlayerRadar'

import { connect } from 'react-redux'
import { fetchPlayer } from '../actions'

class PlayerDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchPlayer()
    }

    getRelaventGames = () => {
        let currPlayerSeasonGames = this.props.player.data.player_seasons.find(ps => ps.year = this.props.currSeason.year).games
        let sorted = currPlayerSeasonGames.sort((a, b) => {
            return parseInt(b.date) - parseInt(a.date)
        })
        return sorted.slice(0, 10)
    }

    radarPrep = () => {
        let stats = [{
            PTS: 10.2,
            REB: 4.1,
            AST: 2.0,
            STL: 0.7,
            BLK: 0.4
        }]
        let currPS = this.props.player.data.player_seasons.filter(ps => {
            return ps.year === this.props.currSeason.year
        })[0]
        let playerObj = {
            PTS: parseFloat(currPS['pts_per_g']),
            REB: parseFloat(currPS['trb_per_g']),
            AST: parseFloat(currPS['ast_per_g']),
            STL: parseFloat(currPS['stl_per_g']),
            BLK: parseFloat(currPS['blk_per_g'])
        }
        stats.push(playerObj)
        return stats
    }

    render() {
        return (
            <div className="ui container center">
                <h2 className="playerShowcase">{this.props.player.name}</h2>

                {this.props.player.data ?
                    <div>
                        <h2>Season Averages: </h2>
                        <PlayerDisplayTable player={this.props.player} />
                        <div>
                            <h2>Radar</h2>
                            <h3>Yellow: League Avg </h3>
                            <h3>Blue: Selected Player </h3>
                        </div>
                        <PlayerRadar stats={this.radarPrep()} />
                        <br></br>
                        <PracticeVictory lines={this.getRelaventGames().reverse()} />
                        <h2 className="ui item centered">Last 10 Games</h2>
                        <PersonalBoxTable lines={this.getRelaventGames()} />
                    </div>
                    :
                    <div>
                        LOADING....
                    </div>

                }
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        player: state.currPlayer,
        currSeason: state.currSeason
    }
}


export default connect(mapStateToProps, { fetchPlayer })(PlayerDisplay)

