import React from 'react'

import { Table, TableCell } from 'semantic-ui-react'

const RadarTable = ({ stats }) => {
    console.log(stats)
    return (
        <Table id="RadarTable" celled inverted selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>PTS</Table.HeaderCell>
                    <Table.HeaderCell>REB</Table.HeaderCell>
                    <Table.HeaderCell>AST</Table.HeaderCell>
                    <Table.HeaderCell>STL</Table.HeaderCell>
                    <Table.HeaderCell>BLK</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row key={stats.PTS}>
                    <TableCell>{stats.PTS}</TableCell>
                    <TableCell>{stats.REB}</TableCell>
                    <TableCell>{stats.AST}</TableCell>
                    <TableCell>{stats.STL}</TableCell>
                    <TableCell>{stats.BLK}</TableCell>
                </Table.Row>
            </Table.Body>


        </Table>
    )
}
export default RadarTable







