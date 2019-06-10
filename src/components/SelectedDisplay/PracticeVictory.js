import React from 'react'
import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    VictoryTheme,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';

const colorCodes = ["gold", "green", 'cornflowerblue']

class PlayerStatsVictory extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'pts'
        }
    }

    mapLinestoVictory() {
        let count
        return this.props.lines.map(pls => {
            count = 0
            let ml = pls.map(g => {
                let yy
                let label = `${this.readableDate(g.date)}`
                if (g.dnp) {
                    yy = 0
                    label += ' (DNP)'
                } else if (this.state.selected === '+/-') {
                    yy = parseInt(g['plus_minus'])
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
            return ml
        })
    }

    //not used right now
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
            selected = 'plus_minus'
        }
        this.setState({ selected })
    }

    render() {
        let mappedLines = this.mapLinestoVictory()

        return (
            <div className='ui container '>
                <div className="ui six item menu inverted">
                    <button onClick={(e) => this.onMenuClick(e)} className="item">PTS</button>
                    <button onClick={(e) => this.onMenuClick(e)} className="item">TRB</button>
                    <button onClick={(e) => this.onMenuClick(e)} className="item">AST</button>
                    <button onClick={(e) => this.onMenuClick(e)} className="item">STL</button>
                    <button onClick={(e) => this.onMenuClick(e)} className="item">BLK</button>
                    <button onClick={(e) => this.onMenuClick(e)} className="item">+/-</button>
                </div>
                <div >
                    <h1>Last 10: {this.state.selected.toLocaleUpperCase()}</h1>
                </div>

                <div className='victory'>

                    <VictoryChart domainPadding={10} height={300} width={500} theme={VictoryTheme.grayscale}
                        containerComponent={<VictoryVoronoiContainer />}>

                        {mappedLines.map((lines, idx) => {
                            return (
                                <VictoryLine
                                    key={idx}
                                    labelComponent={
                                        <VictoryTooltip

                                            flyoutStyle={{
                                                stroke: "tomato"
                                            }} />}

                                    interpolation="natural"
                                    style={{
                                        data: { stroke: colorCodes[idx] },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 2000 }
                                    }}

                                    //data of them needs to be the index**
                                    data={lines}
                                />)
                        })}

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
            </div >
        )

    }


}
export default PlayerStatsVictory
