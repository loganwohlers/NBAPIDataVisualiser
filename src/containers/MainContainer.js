import React from 'react';

class MainContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            player_seasons: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/player_seasons')
            .then(res => res.json())
            .then(player_seasons => {
                this.setState({
                    player_seasons
                })
            })
    }
    // <ol>
    //     {this.state.players.map(pl => {
    //         return <li>{pl.name} : {pl.position}</li>
    //     })}
    // </ol>

    render() {
        return (
            <div>
                <table className="ui selectable celled table">
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
                    </tbody>
                </table>
            </div>
        )
    }

}


export default MainContainer