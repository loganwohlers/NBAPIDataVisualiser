import React from 'react'

const PlayerDisplayTable = ({ player }) => {

    // let { age, mp_per_g, fg_per_g, fga_per_g, fg_pct, fg3_per_g, fg3a_per_g, fg3_pct, efg_pct, ft_per_g, fta_per_g, ft_pct, orb_per_g, drb_per_g, trb_per_g, ast_per_g, stl_per_g, blk_per_g, tov_per_g, pts_per_g, fg2_per_g, fg2a_per_g, fg2_pct, pf_per_g, gp } = playerSeason

    // let name = playerSeason.player.name

    return (
        <table id="PlayerSeason" className="">
            <thead>
                <tr>
                    <th>Player</th>
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
                {/* <tr>
                    <td >
                        {name}
                    </td>
                    <td>{playerSeason.player.position}</td>
                    <td>{age}</td>
                    <td>{playerSeason.team.code}</td>
                    <td>{gp}</td>
                    <td>{mp_per_g}</td>
                    <td>{fg_per_g}</td>
                    <td>{fga_per_g}</td>
                    <td>{fg_pct}</td>
                    <td>{fg3_per_g}</td>
                    <td>{fg3a_per_g}</td>
                    <td>{fg3_pct || '.000'}</td>
                    <td>{fg2_per_g}</td>
                    <td>{fg2a_per_g}</td>
                    <td>{fg2_pct || '.000'}</td>
                    <td>{efg_pct}</td>
                    <td>{ft_per_g}</td>
                    <td>{fta_per_g}</td>
                    <td>{ft_pct || '.000'}</td>
                    <td>{orb_per_g}</td>
                    <td>{drb_per_g}</td>
                    <td>{trb_per_g}</td>
                    <td>{ast_per_g}</td>
                    <td>{stl_per_g}</td>
                    <td>{blk_per_g}</td>
                    <td>{tov_per_g}</td>
                    <td>{pf_per_g}</td>
                    <td>{pts_per_g}</td>
                </tr> */}
            </tbody>
        </table>
    )
}
export default PlayerDisplayTable