import React from 'react';
import PlayerSeasonRow from './PlayerSeasonRow'
import PersonalBoxTable from './PersonalBoxTable';
import { connect } from 'react-redux'
import { fetchOnePlayerSeason } from '../actions'

class PlayerDisplay extends React.Component {



    //get last 10 boxscores--  player season show includes their games
    componentDidMount() {
        this.props.fetchOnePlayerSeason()
    }


    render() {
        return (
            <div>
                <h1>SEASON AVERAGES:</h1>
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
                        <PlayerSeasonRow playerSeason={this.props.currPlayerSeason} />

                    </tbody>
                </table>
                <br>
                </br>

                {this.state.games.length === 0 ?
                    null :
                    <div>
                        <h3>Last 10 Games</h3>
                        <PersonalBoxTable lines={this.state.games} />
                    </div>
                }


            </div>
        )


    }
}

const mapStateToProps = (state) => {
    return { currPlayerSeason: state.currPlayerSeason }
}


export default connect(mapStateToProps, { fetchOnePlayerSeason })(PlayerDisplay)