import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory';

class PlayerStatsVictory extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'pts',
            mappedLines: []
        }
    }

    componentDidMount() {
        this.mapLinestoVictory()
    }

    mapLinestoVictory() {
        // debugger
        let mappedLines = this.props.lines.map(g => {
            return (
                {
                    x: this.readableDate(g.date),
                    y: parseInt(g[this.state.selected])
                }
            )
        })
        this.setState({ mappedLines })
    }

    getDates = () => {
        let dates = this.props.lines.map(g => {
            return (this.readableDate(g.date))
        })
        return dates
    }

    readableDate = (date) => {
        return (date.substring(4, 6) + '/' + date.substring(6, 8))
    }

    onMenuClick = (e) => {
        let selected = e.target.innerText.toLowerCase()
        this.setState({ selected }, () => {
            this.mapLinestoVictory()
        })
    }

    render() {
        console.log(this.props.lines)
        console.log(this.state)
        return (
            <div className='ui container'>
                <div className="ui six item menu">
                    <div onClick={(e) => this.onMenuClick(e)} className="item">PTS</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">TRB</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">AST</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">STL</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">BLK</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">PLUS_MINUS</div>
                </div>
                <VictoryChart domainPadding={10} height={300} width={500} theme={VictoryTheme.material}>
                    <VictoryLabel text="Last 10 Games" x={225} y={30} textAnchor="middle" />
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 2000 }
                        }}

                        data={this.state.mappedLines}
                    />
                    <VictoryAxis dependentAxis
                        style={{
                            tickLabels: { angle: -50 },
                            axisLabel: { padding: 50 }
                        }} />

                    <VictoryAxis independentAxis
                        style={{
                            tickLabels: { angle: -50 },
                            axisLabel: { padding: 50 }
                        }}
                    />
                </VictoryChart >
            </div>
        )

    }


}
export default PlayerStatsVictory

