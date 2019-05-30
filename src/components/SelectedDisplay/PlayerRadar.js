import React from 'react'
import { VictoryChart, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel, VictoryTheme } from 'victory';

let season2019 = [
    {
        PTS: 10.2,
        REB: 4.1,
        AST: 2.0,
        STL: 0.7,
        BLK: 0.4
    },
    {
        PTS: 20.2,
        REB: 4.1,
        AST: 8.0,
        STL: 3.7,
        BLK: 1.4
    }]

class PlayerRadar extends React.Component {
    // this.props.player.data.player_seasons
    constructor(props) {
        super(props);
        this.state = {
            data: this.processData(this.props.stats),
            maxima: this.getMaxima(this.props.stats)
        };
    }

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map((d) => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = Math.max(...groupedData[key]);
            return memo;
        }, {});
    }

    processData(data) {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
        return (
            <div className='ui container'>
                <VictoryChart polar
                    theme={VictoryTheme.material}
                    domain={{ y: [0, 1] }}
                >
                    <VictoryGroup colorScale={["gold", '#266ee2', "tomato"]}
                        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                    >
                        {this.state.data.map((data, i) => {
                            return <VictoryArea key={i} data={data} />;
                        })}
                    </VictoryGroup>
                    {
                        Object.keys(this.state.maxima).map((key, i) => {
                            return (
                                <VictoryPolarAxis key={i} dependentAxis
                                    style={{
                                        axisLabel: { padding: 10 },
                                        axis: { stroke: "none" },
                                        grid: { stroke: "white", strokeWidth: 0.25, opacity: 1 }
                                    }}
                                    tickLabelComponent={
                                        <VictoryLabel labelPlacement="vertical" />
                                    }
                                    labelPlacement="perpendicular"
                                    axisValue={i + 1} label={key}
                                    tickValues={[0.25, 0.5, 0.75]}
                                    tickFormat={(t) => {
                                        let num = Math.ceil((t * this.state.maxima[key]))
                                        return num > 1 ? num :
                                            Math.round((t * this.state.maxima[key]) * 10) / 10
                                    }}
                                />
                            );
                        })
                    }
                    <VictoryPolarAxis
                        labelPlacement="parallel"
                        tickFormat={() => ""}
                        style={{
                            tickLabels: { stroke: "red" },
                            axis: { stroke: "none" },
                            grid: { stroke: "white", opacity: 0.5 }
                        }}
                    />

                </VictoryChart>
            </div >
        );
    }
}
export default PlayerRadar

    // componentDidMount() {

    //     let season2019 = [
    //         {
    //             PTS: 10.2,
    //             REB: 4.1,
    //             AST: 2.0,
    //             STL: 0.7,
    //             BLK: 0.4
    //         }]
    //     console.log(this.props.player)
    //     //2019 season

    //     let currSeason = this.props.player.data.player_seasons[0]
    //     let playerObj = {
    //         PTS: parseFloat(currSeason['pts_per_g']),
    //         REB: parseFloat(currSeason['trb_per_g']),
    //         AST: parseFloat(currSeason['ast_per_g']),
    //         STL: parseFloat(currSeason['stl_per_g']),
    //         BLK: parseFloat(currSeason['blk_per_g'])
    //     }

    //     console.log(season2019)

    //     season2019.push(playerObj)

    //     this.setState = {
    //         data: this.processData(season2019),
    //         maxima: this.getMaxima(season2019)
    //     }

    // };