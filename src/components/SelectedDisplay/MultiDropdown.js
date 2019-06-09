import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PlayerRadar from './PlayerRadar';

const TESTSTATS = {
    PTS: 10.0,
    REB: 3.8,
    AST: 1.8,
    STL: 0.7,
    BLK: 0.4
}

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
        // , () => console.log('STATE UPDATED!!!'))
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
        stats.push(TESTSTATS)
        console.log('sending this to RADAR: ', stats)
        return stats
    }


    render() {

        console.log("rendering")
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

