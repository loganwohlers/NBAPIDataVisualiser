import React from 'react';
import BoxRow from './BoxRow'

import { Table } from 'semantic-ui-react'

class BoxScoreTable extends React.Component {
    render() {
        //table ordered by minutes played
        let ordered = this.props.lines.sort((a, b) => {
            let aa = parseInt(a.mp) || -1
            let bb = parseInt(b.mp) || -1
            return bb - aa
        })
        return (
            <Table id="Games" fullWidth celled inverted selectable >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player</Table.HeaderCell>
                        <Table.HeaderCell>MP</Table.HeaderCell>
                        <Table.HeaderCell>FG</Table.HeaderCell>
                        <Table.HeaderCell>FGA</Table.HeaderCell>
                        <Table.HeaderCell>FG%</Table.HeaderCell>
                        <Table.HeaderCell>3P</Table.HeaderCell>
                        <Table.HeaderCell>3PA</Table.HeaderCell>
                        <Table.HeaderCell>3P%</Table.HeaderCell>
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
                        <Table.HeaderCell>+/-</Table.HeaderCell>
                    </Table.Row>

                </Table.Header>
                <Table.Body>
                    {ordered.map((li, idx) => {
                        return <BoxRow line={li} key={idx} />
                    })}

                </Table.Body>
            </Table>
        )


    }
}

export default BoxScoreTable