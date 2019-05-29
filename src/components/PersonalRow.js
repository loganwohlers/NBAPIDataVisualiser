import React from 'react';
import { Table, TableCell } from 'semantic-ui-react'

class PersonalRow extends React.Component {

    render() {
        let { mp, fg, fga, fg_pct, fg3, fg3a, fg3_pct, ft, fta, ft_pct, orb, drb, trb, ast, stl, blk, tov, pts, plus_minus, pf, dnp } = this.props.line

        let date = this.props.line.date

        return (
            dnp ?
                <Table.Row>
                    <TableCell>{date}</TableCell>
                    <TableCell>DNP</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>
                    <TableCell>/</TableCell>

                </Table.Row>
                :
                < Table.Row >
                    <TableCell>{date}</TableCell>
                    <TableCell>{mp}</TableCell>
                    <TableCell>{fg}</TableCell>
                    <TableCell>{fga}</TableCell>
                    <TableCell>{fg_pct || '.000'}</TableCell>
                    <TableCell>{fg3}</TableCell>
                    <TableCell>{fg3a}</TableCell>
                    <TableCell>{fg3_pct || '.000'}</TableCell>
                    <TableCell>{ft}</TableCell>
                    <TableCell>{fta}</TableCell>
                    <TableCell>{ft_pct || '.000'}</TableCell>
                    <TableCell>{orb}</TableCell>
                    <TableCell>{drb}</TableCell>
                    <TableCell>{trb}</TableCell>
                    <TableCell>{ast}</TableCell>
                    <TableCell>{stl}</TableCell>
                    <TableCell>{blk}</TableCell>
                    <TableCell>{tov}</TableCell>
                    <TableCell>{pf}</TableCell>
                    <TableCell>{pts}</TableCell>
                    <TableCell>{plus_minus}</TableCell >
                </Table.Row >
        )
    }

}


export default PersonalRow
