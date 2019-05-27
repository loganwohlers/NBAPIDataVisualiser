import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setGame } from '../actions'

class GameRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.game.date}</td>
                <td>{this.props.game.start_time}</td>
                <td>{this.props.game.home_team.name}</td >
                <td>{this.props.game.home_pts}</td>
                <td>{this.props.game.away_team.name}</td>
                <td>{this.props.game.away_pts}</td>
                <td>
                    <Link onClick={() => this.props.setGame(this.props.game)} to={`/gamebox/${this.props.game.id}`}> Box Score</Link>
                </td>
            </tr>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        game: state.seasonGames.data.find((sg) => {
            return sg.id === ownProps.id
        })
    }

}

export default connect(mapStateToProps, { setGame })(GameRow)



