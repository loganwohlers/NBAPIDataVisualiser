import React from 'react';

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

            </tr>
        )
    }

}

export default GameRow

