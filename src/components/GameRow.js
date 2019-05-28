import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setGame } from '../actions'

class GameRow extends React.Component {

    render() {
        let { id, date, start_time, home_team, home_pts, away_team, away_pts } = this.props.game

        // 20190410

        let convertedDate = (date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4))
        return (
            <tr>
                <td>{convertedDate}</td>
                <td>{start_time}</td>
                <td>{home_team.name}</td >
                <td>{home_pts}</td>
                <td>{away_team.name}</td>
                <td>{away_pts}</td>
                <td>
                    <Link onClick={() => this.props.setGame(this.props.game)} to={`/gamebox/${id}`}> Box Score</Link>
                </td>
            </tr>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        game: state.currSeason.seasonGames.data.find((sg) => {
            return sg.id === ownProps.id
        })
    }

}

export default connect(mapStateToProps, { setGame })(GameRow)



