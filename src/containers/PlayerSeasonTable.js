import React from 'react';
import PlayerSeasonRow from '../components/PlayerSeasonRow';

class PlayerSeasonTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table id="PlayerSeason" className="">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Pos</th>
                        <th>Age</th>
                        <th>Tm</th>
                        <th>G</th>
                        <th>MP</th>
                        <th>FG</th>
                        <th>FGA</th>
                        <th>FG%</th>
                        <th>3P</th>
                        <th>3PA</th>
                        <th>3P%</th>
                        <th>2P</th>
                        <th>2PA</th>
                        <th>2P%</th>
                        <th>eFG%</th>
                        <th>FT</th>
                        <th>FTA</th>
                        <th>FT%</th>
                        <th>ORB</th>
                        <th>DRB</th>
                        <th>TRB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>TOV</th>
                        <th>PF</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.player_seasons.map(ps => {
                        return <PlayerSeasonRow player_season={ps} />
                    })}

                </tbody>
            </table>
        )


    }
}

export default PlayerSeasonTable