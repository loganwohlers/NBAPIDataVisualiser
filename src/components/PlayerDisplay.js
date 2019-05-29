import React from 'react';
import PersonalBoxTable from './PersonalBoxTable';
import PlayerDisplayTable from './SelectedDisplay/PlayerDisplayTable'
import PracticeVictory from './SelectedDisplay/PracticeVictory'

import { connect } from 'react-redux'
import { fetchPlayer } from '../actions'

class PlayerDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchPlayer()
    }

    getRelaventGames = () => {
        let currPlayerSeasonGames = this.props.player.data.player_seasons.find(ps => ps.year = this.props.currSeason.year).games
        return currPlayerSeasonGames.slice(0, 10)
    }

    render() {
        //get the relavent games here
        return (
            <div className="ui container center">
                <h2 className="playerShowcase">{this.props.player.name}</h2>
                <h4>Player Info Here (teams, seasons, positions, etc)</h4>

                <h2>Season Averages: </h2>
                {this.props.player.data ?
                    <div>
                        <PlayerDisplayTable player={this.props.player} />
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

