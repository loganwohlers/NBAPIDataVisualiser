import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory';

class PlayerStatsVictory extends React.Component {
    mapLinestoVictory() {
        let chartData = this.props.lines.reverse().map(g => {
            return (
                {
                    x: this.readableDate(g.date),
                    y: parseInt(g.pts || 0)
                }
            )
        })
        return chartData
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
    // <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
    // <VictoryLabel text="Angled labels" x={225} y={30} textAnchor="middle" />
    // <VictoryAxis dependentAxis
    // style={{ tickLabels: { angle: -60 } }}
    // tickFormat={[
    //     "first label",
    //     "second label",
    //     "third label",
    //     "forth label",
    //     "fifth label"
    // ]}
    // // />



    render() {
        console.log(this.props.lines)
        return (
            <div className='ui container'>
                <VictoryChart domainPadding={30} height={300} width={500} theme={VictoryTheme.material}>
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

                        data={this.mapLinestoVictory()}
                    />
                    <VictoryAxis dependentAxis />
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

