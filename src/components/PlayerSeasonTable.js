import React from 'react';
import PlayerSeasonRow from './PlayerSeasonRow';
import { Table } from 'semantic-ui-react'

class PlayerSeasonTable extends React.Component {
    render() {
        return (
            <div>
                <Table fullWidth celled inverted selectable textAlign='center'
                    style={{
                        tableLayout: 'fixed',
                        maxWidth: '100%',
                        fontSize: '75%',
                        whiteSpace: 'nowrap'
                    }}>
                    <Table.Header >
                        <Table.Row>
                            <Table.HeaderCell width={2}>NAME</Table.HeaderCell>
                            <Table.HeaderCell>POS</Table.HeaderCell>
                            <Table.HeaderCell>AGE</Table.HeaderCell>
                            <Table.HeaderCell>TM</Table.HeaderCell>
                            <Table.HeaderCell>G</Table.HeaderCell>
                            <Table.HeaderCell>MP</Table.HeaderCell>
                            <Table.HeaderCell>FG</Table.HeaderCell>
                            <Table.HeaderCell>FGA</Table.HeaderCell>
                            <Table.HeaderCell>FG%</Table.HeaderCell>
                            <Table.HeaderCell>3P</Table.HeaderCell>
                            <Table.HeaderCell>3PA</Table.HeaderCell>
                            <Table.HeaderCell>3P%</Table.HeaderCell>
                            <Table.HeaderCell>2P</Table.HeaderCell>
                            <Table.HeaderCell>2PA</Table.HeaderCell>
                            <Table.HeaderCell>2P%</Table.HeaderCell>
                            <Table.HeaderCell>eFG%</Table.HeaderCell>
                            <Table.HeaderCell>FT</Table.HeaderCell>
                            <Table.HeaderCell>FTA</Table.HeaderCell>
                            <Table.HeaderCell>FT%</Table.HeaderCell>
                            <Table.HeaderCell>ORB</Table.HeaderCell>
                            <Table.HeaderCell>DRB</Table.HeaderCell>
                            <Table.HeaderCell>TRB</Table.HeaderCell>
                            <Table.HeaderCell>AST</Table.HeaderCell>
                            <Table.HeaderCell>STL</Table.HeaderCell>
                            <Table.HeaderCell>BLK</Table.HeaderCell>
                            <Table.HeaderCell>TOV</Table.HeaderCell>
                            <Table.HeaderCell>PF</Table.HeaderCell>
                            <Table.HeaderCell>PTS</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.playerSeasons.map((ps, idx) => {
                            return <PlayerSeasonRow id={ps.id} key={idx} />
                        })}

                    </Table.Body>
                </Table>
            </div>
        )


    }
}

export default PlayerSeasonTable