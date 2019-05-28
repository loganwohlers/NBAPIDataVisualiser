import React from 'react'

const PlayerDisplayTable = (props) => {
    return (
        <table id="PlayerSeason" className="">
            <thead>
                <tr>
                    <th>Season</th>
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
                {props.player.data.player_seasons.map(ps => {
                    return (
                        <tr key={ps.id}>
                            <td>{ps.year}</td>
                            <td>{ps.position}</td>
                            <td>{ps.age}</td>
                            <td>{ps.team}</td>
                            <td>{ps.gp}</td>
                            <td>{ps.mp_per_g}</td>
                            <td>{ps.fg_per_g}</td>
                            <td>{ps.fga_per_g}</td>
                            <td>{ps.fg_pct}</td>
                            <td>{ps.fg3_per_g}</td>
                            <td>{ps.fg3a_per_g}</td>
                            <td>{ps.fg3_pct || '.000'}</td>
                            <td>{ps.fg2_per_g}</td>
                            <td>{ps.fg2a_per_g}</td>
                            <td>{ps.fg2_pct || '.000'}</td>
                            <td>{ps.efg_pct}</td>
                            <td>{ps.ft_per_g}</td>
                            <td>{ps.fta_per_g}</td>
                            <td>{ps.ft_pct || '.000'}</td>
                            <td>{ps.orb_per_g}</td>
                            <td>{ps.drb_per_g}</td>
                            <td>{ps.trb_per_g}</td>
                            <td>{ps.ast_per_g}</td>
                            <td>{ps.stl_per_g}</td>
                            <td>{ps.blk_per_g}</td>
                            <td>{ps.tov_per_g}</td>
                            <td>{ps.pf_per_g}</td>
                            <td>{ps.pts_per_g}</td>
                        </tr>
                    )
                })}

            </tbody>


        </table>
    )
}
export default PlayerDisplayTable







