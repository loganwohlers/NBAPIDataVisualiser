import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setGame } from '../actions'
import { Table, TableCell } from 'semantic-ui-react';

class GameRow extends React.Component {

    render() {
        let { id, date, start_time, home_team, home_pts, away_team, away_pts } = this.props.game

        let convertedDate = (date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4))
        return (
            <Table.Row>
                <TableCell>{convertedDate}</TableCell>
                <TableCell>{start_time}</TableCell>
                <TableCell>{home_team.name}</TableCell >
                <TableCell>{home_pts}</TableCell>
                <TableCell>{away_team.name}</TableCell>
                <TableCell>{away_pts}</TableCell>
                <TableCell>
                    <Link onClick={() => this.props.setGame(this.props.game)} to={`/gamebox/${id}`}> Box Score</Link>
                </TableCell>
            </Table.Row>
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



