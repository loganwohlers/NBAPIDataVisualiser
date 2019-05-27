import React from 'react';
import GameRow from './GameRow';
import { connect } from 'react-redux'


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
                    {this.props.seasonGames.data.map(gm => {
                        return <GameRow id={gm.id} key={gm.id} />
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStatetoProps = (state) => {
    return { seasonGames: state.seasonGames }
}

export default connect(mapStatetoProps)(GameTable)
