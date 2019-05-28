import React from 'react';
import PersonalBoxTable from './PersonalBoxTable';
import PlayerDisplayTable from './SelectedDisplay/PlayerDisplayTable'

import { connect } from 'react-redux'
import { fetchPlayer } from '../actions'

class PlayerDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchPlayer()
    }

    render() {
        return (
            <div>
                <h2>{this.props.player.name}</h2>
                <h4>Player Info Here (teams, seasons, positions, etc):</h4>

                <h2>Season Averages: </h2>
                {this.props.player.data ?
                    <PlayerDisplayTable player={this.props.player} />
                    : null}

                <br>
                </br>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return { player: state.currPlayer }
}


export default connect(mapStateToProps, { fetchPlayer })(PlayerDisplay)


                //     this.props.currPlayerSeason.games ?
                //         <div>
                //             <h3>Last 10 Games</h3>
                //             <PersonalBoxTable lines={this.props.currPlayerSeason.games} />
                //         </div> :
                //         <div>Loading</div>