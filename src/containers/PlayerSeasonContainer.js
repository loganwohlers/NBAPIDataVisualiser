import React from 'react';
import PlayerSeasonRow from '../components/PlayerSeasonRow';

class PlayerSeasonContainer
    extends React.Component {

    constructor() {
        super()
        this.state = {
            player_seasons: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/player_seasons')
            .then(res => res.json())
            .then(seasons => {
                let player_seasons = seasons.filter(ps => {
                    return ps.age
                })

                this.setState({
                    player_seasons
                })
            })
    }
    render() {
        return (
            <div>
                <table id="PlayerSeason" className="ui striped table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Pos</th>
                            <th>Age</th>
                            <th>Team</th>
                            <th>G</th>
                            <th>GS</th>
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
                        <tr>
                            <td>Player</td>
                            <td>Pos</td>
                            <td>Age</td>
                            <td>Team</td>
                            <td>G</td>
                            <td>GS</td>
                            <td>MP</td>
                            <td>FG</td>
                            <td>FGA</td>
                            <td>FG%</td>
                            <td>3P</td>
                            <td>3PA</td>
                            <td>3P%</td>
                            <td>2P</td>
                            <td>2PA</td>
                            <td>2P%</td>
                            <td>eFG%</td>
                            <td>FT</td>
                            <td>FTA</td>
                            <td>ORB</td>
                            <td>DRB</td>
                            <td>TRB</td>
                            <td>AST</td>
                            <td>STL</td>
                            <td>BLK</td>
                            <td>TOV</td>
                            <td>PF</td>
                            <td>PTS</td>
                        </tr>
                        <PlayerSeasonRow />
                    </tbody>
                </table>
            </div>
        )
    }

}


export default PlayerSeasonContainer
