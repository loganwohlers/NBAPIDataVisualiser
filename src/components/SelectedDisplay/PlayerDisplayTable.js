import React from 'react'

import { Table, TableCell } from 'semantic-ui-react'

const PlayerDisplayTable = (props) => {
    return (
        <Table id="PlayerSeason" celled inverted selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>YR</Table.HeaderCell>
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
                {props.player.data.player_seasons.map(ps => {
                    return (
                        <Table.Row key={ps.id}>
                            <TableCell>{ps.year}</TableCell>
                            <TableCell>{ps.position}</TableCell>
                            <TableCell>{ps.age}</TableCell>
                            <TableCell>{ps.team}</TableCell>
                            <TableCell>{ps.gp}</TableCell>
                            <TableCell>{ps.mp_per_g}</TableCell>
                            <TableCell>{ps.fg_per_g}</TableCell>
                            <TableCell>{ps.fga_per_g}</TableCell>
                            <TableCell>{ps.fg_pct}</TableCell>
                            <TableCell>{ps.fg3_per_g}</TableCell>
                            <TableCell>{ps.fg3a_per_g}</TableCell>
                            <TableCell>{ps.fg3_pct || '.000'}</TableCell>
                            <TableCell>{ps.fg2_per_g}</TableCell>
                            <TableCell>{ps.fg2a_per_g}</TableCell>
                            <TableCell>{ps.fg2_pct || '.000'}</TableCell>
                            <TableCell>{ps.efg_pct}</TableCell>
                            <TableCell>{ps.ft_per_g}</TableCell>
                            <TableCell>{ps.fta_per_g}</TableCell>
                            <TableCell>{ps.ft_pct || '.000'}</TableCell>
                            <TableCell>{ps.orb_per_g}</TableCell>
                            <TableCell>{ps.drb_per_g}</TableCell>
                            <TableCell>{ps.trb_per_g}</TableCell>
                            <TableCell>{ps.ast_per_g}</TableCell>
                            <TableCell>{ps.stl_per_g}</TableCell>
                            <TableCell>{ps.blk_per_g}</TableCell>
                            <TableCell>{ps.tov_per_g}</TableCell>
                            <TableCell>{ps.pf_per_g}</TableCell>
                            <TableCell>{ps.pts_per_g}</TableCell>
                        </Table.Row>
                    )
                })}

            </Table.Body>


        </Table>
    )
}
export default PlayerDisplayTable







