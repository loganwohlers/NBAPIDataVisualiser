import React from 'react';

class PlayerSeasonRow extends React.Component {

    render() {
        let { age, mp_per_g, fg_per_g, fga_per_g, fg_pct, fg3_per_g, fg3a_per_g, fg3_pct, efg_pct, ft_per_g, fta_per_g, ft_pct, orb_per_g, drb_per_g, trb_per_g, ast_per_g, stl_per_g, blk_per_g, tov_per_g, pts_per_g, games, fg2_per_g, fg2a_per_g, fg2_pct, pf_per_g } = this.props.playerSeason
        return (
            <tr>
                <td>{this.props.playerSeason.player.name}</td>
                <td>{this.props.playerSeason.player.position}</td>
                <td>{age}</td>
                <td>{this.props.playerSeason.team.code}</td>
                <td>{games}</td>
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
            </tr>
        )
    }

}


export default PlayerSeasonRow