import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PlayerRadar from './PlayerRadar';

class MultiDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerSeasons: this.props.playerSeasons,
            selected: []
        }
    }

    handleChange = (e, { value }) => {
        console.log("player selected")
        let selected
        const maxSelect = 3
        if (value.length > maxSelect) {
            selected = value.slice(0, 3)
        } else {
            selected = value
        }

        let selectedSeasons = this.getSelectedSeasons(selected)
        this.setState({
            selected: selectedSeasons
        })
    }

    getSelectedSeasons(arr) {
        return arr.map((id => {
            return this.state.playerSeasons.filter(ps => ps.id === id)
        }))
    }

    radarPrep = () => {
        console.log('radar prep')
        console.log('current state: ', this.state.selected)
        let stats = this.state.selected.map(ps => {
            let nums = ps[0]
            let playerObj = {
                PTS: parseFloat(nums['pts_per_g']),
                REB: parseFloat(nums['trb_per_g']),
                AST: parseFloat(nums['ast_per_g']),
                STL: parseFloat(nums['stl_per_g']),
                BLK: parseFloat(nums['blk_per_g'])
            }

            return playerObj
        })
        return stats
    }


    render() {
        return (
            <>
                <Dropdown
                    onChange={this.handleChange}
                    placeholder='Select a Player'
                    fluid
                    multiple
                    search
                    selection
                    options={
                        this.state.playerSeasons.map((ps, idx) => {
                            return ({
                                key: idx,
                                text: ps.player.name,
                                value: ps.id
                            })
                        })
                    }
                />
                {this.state.selected.length > 0 ?
                    <div>
                        <ul>
                            {this.state.selected.map((ps, idx) => {
                                let ps2 = ps[0]
                                return <li key={idx}>{ps2.player.name}</li>
                            })}
                        </ul>

                        <PlayerRadar
                            stats={this.radarPrep(this.state.selected)}
                        />
                    </div>
                    :
                    <div>
                        Select up to 3 players!!!
                    </div>
                }

            </>
        )
    }
}


export default MultiDropdown

