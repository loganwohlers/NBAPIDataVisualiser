import React from 'react';
import GameRow from './GameRow';

class GameTable extends React.Component {

    render() {
        return (
            <table id="Games" className="">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Start</th>
                        <th>Home</th>
                        <th>Pts</th>
                        <th>Away</th>
                        <th>Pts</th>


                    </tr>

                </thead>
                <tbody>
                    {this.props.seasonGames.map(gm => {
                        return <GameRow game={gm} key={gm.id} />
                    })}

                </tbody>
            </table>
        )


    }
}

export default GameTable