import React from 'react'
import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    VictoryTheme,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';

import { Lebron } from '../../assets/PlayerStats'

import { connect } from 'react-redux'
import PlayerDisplay from '../PlayerDisplay';

//get 2 players for each season

let compare2018 = [{

}]


class PlayerComparison extends React.Component {
    constructor() {
        super()
        this.state = {
            players: [],
            selected: 'pts',
            mappedLines: []
        }
    }

    // componentDidMount() {
    //     this.mapLinestoVictory()
    // }

    // mapLinestoVictory() {
    //     let count = 0
    //     let mappedLines = this.props.lines.map(g => {
    //         let yy
    //         let label = `${this.readableDate(g.date)}`
    //         if (g.dnp) {
    //             yy = 0
    //             label += ' (DNP)'
    //         } else if (this.state.selected === '+/-') {
    //             console.log("TEST!!")
    //             yy = parseInt(g['PLUS_MINUS'])
    //         } else {
    //             let stat = parseInt(g[this.state.selected])
    //             yy = stat
    //             label += ` ${this.state.selected.toUpperCase()}: ${stat}`
    //         }
    //         count++;
    //         return (
    //             {
    //                 x: count,
    //                 y: yy,
    //                 label: label
    //             }
    //         )
    //     })
    //     this.setState({ mappedLines })
    // }

    // getDates = () => {
    //     let dates = this.props.lines.map(g => {
    //         return (this.readableDate(g.date))
    //     })
    //     return dates
    // }

    // readableDate = (date) => {
    //     return (date.substring(4, 6) + '/' + date.substring(6, 8))
    // }

    // onMenuClick = (e) => {
    //     let selected = e.target.innerText.toLowerCase()
    //     if (selected === '+/-') {
    //         console.log('test')
    //         selected = 'PLUS_MINUS'
    //     }
    //     this.setState({ selected }, () => {
    //         this.mapLinestoVictory()
    //     })
    // }


    render() {

        return (
            <div>
                <div>

                </div>
            </div>

        )

    }


}
const mapStateToProps = (state) => {
    return { season: state.currSeason }
}

export default connect(mapStateToProps)(PlayerComparison)
// playerNames = () => {
//     let source = this.props.season.playerSeasons.data.map(ps => {
//         return ps.player.name
//     })
//     return source
// }

