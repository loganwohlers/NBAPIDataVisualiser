import React from 'react'
import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
    VictoryTheme,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';

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
        let count = 0
        let mappedLines = this.props.lines.map(g => {
            let xx = this.readableDate(g.date)
            let yy
            let label = this.readableDate(g.date)
            if (g.dnp) {
                yy = 0
                label += ' (DNP)'
                xx += ' (DNP)'
            } else {
                yy = parseInt(g[this.state.selected])
            }
            count++;
            return (
                {
                    x: count,
                    y: yy,
                    label: label
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
            <div className='ui container inverted'>
                <div className="ui six item menu">
                    <div onClick={(e) => this.onMenuClick(e)} className="item">PTS</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">TRB</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">AST</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">STL</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">BLK</div>
                    <div onClick={(e) => this.onMenuClick(e)} className="item">PLUS_MINUS</div>
                </div>
                <VictoryChart domainPadding={10} height={300} width={500} theme={VictoryTheme.material}
                    containerComponent={<VictoryVoronoiContainer />}>

                    {/* need to make this diff color- style not working */}
                    <VictoryLabel text={`Last 10 Games ${this.state.selected.toUpperCase()}`} x={225} y={30} textAnchor="middle"
                        style={{
                            data: { color: 'red' }
                        }} />

                    <VictoryLine
                        labelComponent={<VictoryTooltip />}
                        //smooth out lines
                        // interpolation="natural"
                        style={{
                            data: { stroke: "blue" },
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
                            tickLabels: { angle: 0 },
                            axisLabel: { padding: 50 }
                        }} />

                    <VictoryAxis independentAxis
                        tickFormat={() => ''}
                        style={{
                            axisLabel: { padding: 200 },
                            tickLabels: { fontSize: 10, padding: 1, angle: 50, verticalAnchor: 'middle', textAnchor: 'start' }

                        }}
                    />
                </VictoryChart >
            </div>
        )

    }


}
export default PlayerStatsVictory



