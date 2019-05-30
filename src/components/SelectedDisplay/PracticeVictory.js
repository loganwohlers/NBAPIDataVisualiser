import React from 'react'
import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    VictoryScatter,
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
            let yy
            let label = `${this.readableDate(g.date)}`
            if (g.dnp) {
                yy = 0
                label += ' (DNP)'
            } else if (this.state.selected === '+/-') {
                console.log("TEST!!")
                yy = parseInt(g['PLUS_MINUS'])
            } else {
                let stat = parseInt(g[this.state.selected])
                yy = stat
                label += ` ${this.state.selected.toUpperCase()}: ${stat}`
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
        if (selected === '+/-') {
            console.log('test')
            selected = 'PLUS_MINUS'
        }
        this.setState({ selected }, () => {
            this.mapLinestoVictory()
        })
    }

    render() {
        console.log(this.props.lines)
        return (
            <div className='ui container '>
                <div className="ui six item menu inverted">
                    <a onClick={(e) => this.onMenuClick(e)} className="item">PTS</a>
                    <a onClick={(e) => this.onMenuClick(e)} className="item">TRB</a>
                    <a onClick={(e) => this.onMenuClick(e)} className="item">AST</a>
                    <a onClick={(e) => this.onMenuClick(e)} className="item">STL</a>
                    <a onClick={(e) => this.onMenuClick(e)} className="item">BLK</a>
                    <a onClick={(e) => this.onMenuClick(e)} className="item">+/-</a>
                </div>
                <div >
                    <h1>Last 10: {this.state.selected.toLocaleUpperCase()}</h1>
                </div>


                <VictoryChart domainPadding={10} height={300} width={500} theme={VictoryTheme.grayscale}
                    containerComponent={<VictoryVoronoiContainer />}>


                    <VictoryLine
                        labelComponent={
                            <VictoryTooltip

                                flyoutStyle={{
                                    stroke: "tomato"
                                }} />}

                        interpolation="natural"
                        style={{
                            data: { stroke: '#266ee2' },
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
                            axis: { stroke: "#bac2d1" },
                            tickLabels: { stroke: "bac2d1", fontSize: 10 },
                            ticks: { stroke: "grey", size: 5 },
                            axisLabel: { padding: 50 }
                        }} />

                    <VictoryAxis independentAxis
                        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        tickFormat={() => '.'}
                        style={{
                            axis: { stroke: "#bac2d1" },
                            axisLabel: { padding: 200 },
                            ticks: { stroke: "grey", size: 5 }

                        }}
                    />
                </VictoryChart >
            </div>
        )

    }


}
export default PlayerStatsVictory


