import React from 'react';
import GameRow from './GameRow';

class GameTable extends React.Component {

    render() {
        return (
            <table id="Games" className="">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Pos</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.games.map((gm, idx) => {
                        return <GameRow game={gm} key={idx} />
                    })}

                </tbody>
            </table>
        )


    }
}

export default GameTable