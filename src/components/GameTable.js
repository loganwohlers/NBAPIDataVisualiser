import React from 'react';
import GameRow from './GameRow';
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'


class GameTable extends React.Component {

    render() {
        return (
            <Table id="Games" fullwidth celled inverted selectable textAlign='center'
                style={{
                    tableLayout: 'fixed',
                    maxWidth: '100%',
                    fontSize: '75%',
                    whiteSpace: 'nowrap'
                }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Start</Table.HeaderCell>
                        <Table.HeaderCell>Home</Table.HeaderCell>
                        <Table.HeaderCell>Pts</Table.HeaderCell>
                        <Table.HeaderCell>Away</Table.HeaderCell>
                        <Table.HeaderCell>Pts</Table.HeaderCell>
                        <Table.HeaderCell>Box</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.seasonGames.data.map(gm => {
                        return <GameRow id={gm.id} key={gm.id} />
                    })}
                </Table.Body>
            </Table>
        )
    }
}

const mapStatetoProps = (state) => {
    return { seasonGames: state.currSeason.seasonGames }
}

export default connect(mapStatetoProps)(GameTable)
