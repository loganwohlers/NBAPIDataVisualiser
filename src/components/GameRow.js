import React from 'react';

class GameRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.playerSeason.player.name}</td>
                <td>{this.props.playerSeason.player.position}</td>

            </tr>
        )
    }

}

export default GameRow