import React from 'react';
import PersonalRow from './PersonalRow'
import { Table, TableBody } from 'semantic-ui-react'

class PersonalBoxTable extends React.Component {
    render() {
        return (
            <Table id="Games" fullWidth celled inverted selectable className="">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
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
                <TableBody>
                    {this.props.lines.map((li, idx) => {
                        return <PersonalRow line={li} key={idx} />
                    })}

                </TableBody>
            </Table>
        )


    }
}

export default PersonalBoxTable