import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import PlayerRadar from './PlayerRadar';
import RadarTable from './RadarTable'
import { connect } from 'react-redux'
import { setComparison } from '../../actions'

class MultiDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerSeasons: this.props.playerSeasons,
            selected: []
        }
    }

    handleChange = (e, { value }) => {
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
        }, () => {
            this.props.setComparison(selectedSeasons)
        })
    }

    getSelectedSeasons(arr) {
        return arr.map((id => {
            return this.state.playerSeasons.filter(ps => ps.id === id)
        }))
    }

    radarPrep = () => {
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

    radarDisplay = (arr) => {
        const radarStats = this.radarPrep()
        const colorsInfo = {
            colorString: ["GOLD", "GREEN", "BLUE"],
            colorCode: ["gold", "green", 'cornflowerblue']
        }
        let colorMap = []
        for (let i = 0; i < arr.length; i++) {
            let data = {}
            data.colorCode = colorsInfo.colorString[i]
            data.str = (`${arr[i][0].player.name.toUpperCase()}`)
            data.stats = radarStats[i]
            colorMap.push(data)
        }
        return colorMap
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
                            {this.radarDisplay(this.state.selected).map((pc, idx) => {
                                return (
                                    <li key={idx}>
                                        <h3 style={{ color: pc.colorCode }}> {pc.str} </h3>
                                        <RadarTable stats={pc.stats} />

                                    </li>
                                )
                            })
                            }
                        </ul>

                        <PlayerRadar
                            stats={this.radarPrep(this.state.selected)}
                        />
                    </div>
                    :
                    <div>
                        <h1>Select Up to 3 Players!</h1>
                    </div>
                }

            </>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        playerComparison: state.playerComparison

    }
}



export default connect(mapStateToProps, { setComparison })(MultiDropdown)

