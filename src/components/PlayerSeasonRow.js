import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPlayer } from '../actions'
import { Table } from 'semantic-ui-react'

class PlayerSeasonRow extends React.Component {
    render() {
        let { age, mp_per_g, fg_per_g, fga_per_g, fg_pct, fg3_per_g, fg3a_per_g, fg3_pct, efg_pct, ft_per_g, fta_per_g, ft_pct, orb_per_g, drb_per_g, trb_per_g, ast_per_g, stl_per_g, blk_per_g, tov_per_g, pts_per_g, gp, fg2_per_g, fg2a_per_g, fg2_pct, pf_per_g, position } = this.props.playerSeason

        let name = this.props.playerSeason.player.name
        let id = this.props.playerSeason.player.id

        return (
            <Table.Row>
                <Table.Cell >
                    <Link onClick={() => this.props.setPlayer(this.props.playerSeason.player)} to={`/player/${id}`}>
                        {name}
                    </Link>
                </Table.Cell>
                <Table.Cell>{position}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{this.props.playerSeason.team.code}</Table.Cell>
                <Table.Cell>{gp}</Table.Cell>
                <Table.Cell>{mp_per_g}</Table.Cell>
                <Table.Cell>{fg_per_g}</Table.Cell>
                <Table.Cell>{fga_per_g}</Table.Cell>
                <Table.Cell>{fg_pct}</Table.Cell>
                <Table.Cell>{fg3_per_g}</Table.Cell>
                <Table.Cell>{fg3a_per_g}</Table.Cell>
                <Table.Cell>{fg3_pct || '.000'}</Table.Cell>
                <Table.Cell>{fg2_per_g}</Table.Cell>
                <Table.Cell>{fg2a_per_g}</Table.Cell>
                <Table.Cell>{fg2_pct || '.000'}</Table.Cell>
                <Table.Cell>{efg_pct}</Table.Cell>
                <Table.Cell>{ft_per_g}</Table.Cell>
                <Table.Cell>{fta_per_g}</Table.Cell>
                <Table.Cell>{ft_pct || '.000'}</Table.Cell>
                <Table.Cell>{orb_per_g}</Table.Cell>
                <Table.Cell>{drb_per_g}</Table.Cell>
                <Table.Cell>{trb_per_g}</Table.Cell>
                <Table.Cell>{ast_per_g}</Table.Cell>
                <Table.Cell>{stl_per_g}</Table.Cell>
                <Table.Cell>{blk_per_g}</Table.Cell>
                <Table.Cell>{tov_per_g}</Table.Cell>
                <Table.Cell>{pf_per_g}</Table.Cell>
                <Table.Cell>{pts_per_g}</Table.Cell>
            </Table.Row>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        playerSeason: state.currSeason.playerSeasons.data.find((ps) => {
            return ps.id === ownProps.id
        })
    }

}

export default connect(mapStateToProps, { setPlayer })(PlayerSeasonRow)