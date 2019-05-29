import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';



class PlayerStatsVictory extends React.Component {
    mapLinestoVictory() {
        let chartData = this.props.lines.map(g => {
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
        return (date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4))
    }



    render() {
        console.log(this.props.lines)
        return (
            <VictoryChart domainPadding={20}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={this.mapLinestoVictory()}
                />
                <VictoryAxis tickValues={this.getDates()} />
            </VictoryChart >
        )

    }


}
export default PlayerStatsVictory

