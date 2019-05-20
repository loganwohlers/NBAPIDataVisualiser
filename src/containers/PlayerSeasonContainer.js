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
                        {this.state.player_seasons.map(ps => {
                            return <PlayerSeasonRow player_season={ps} />
                        })}

                    </tbody>
                </table>
            </div>
        )
    }

}


export default PlayerSeasonContainer
