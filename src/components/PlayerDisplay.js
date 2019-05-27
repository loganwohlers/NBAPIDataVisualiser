import React from 'react';
import PlayerSeasonRow from './PlayerSeasonRow'
import PersonalBoxTable from './PersonalBoxTable';
import { connect } from 'react-redux'
import { fetchOnePlayerSeason } from '../actions'

class PlayerDisplay extends React.Component {

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
                        <PlayerSeasonRow id={this.props.currPlayerSeason.id} />
                    </tbody>
                </table>
                <br>
                </br>

                {this.props.currPlayerSeason.games ?
                    <div>
                        <h3>Last 10 Games</h3>
                        <PersonalBoxTable lines={this.props.currPlayerSeason.games} />
                    </div> :
                    <div>Loading</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currPlayerSeason: state.currPlayerSeason }
}


export default connect(mapStateToProps, { fetchOnePlayerSeason })(PlayerDisplay)