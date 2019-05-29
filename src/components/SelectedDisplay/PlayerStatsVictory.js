import React from 'react'
import { VictoryChart, VictoryLine } from 'victory';

const PlayerStatsVictory = (props) => {
    let chartData = props.lines.map(g => {
        return (
            {
                x: g.date,
                y: parseInt(g.pts || 0)
            }
        )
    })

    return (
        < VictoryChart >
            <VictoryLine
                data={chartData}
            />
        </VictoryChart >
    )

}
export default PlayerStatsVictory

