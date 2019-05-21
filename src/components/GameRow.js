import React from 'react';
import GameBoxScore from '../containers/GameBoxScore';
import { withRouter, Link } from 'react-router-dom'


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
                    <Link to={{ pathname: "/gamebox", aboutProps: { game: this.props.game } }} > TEST</Link>
                </td>
            </tr>
        )
    }

}

export default GameRow

