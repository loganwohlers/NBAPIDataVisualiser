import React from 'react'
import { VictoryChart, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel, VictoryTheme } from 'victory';

class PlayerRadar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: this.props.stats,
            data: this.processData(this.props.stats),
            maxima: this.getMaxima(this.props.stats)
        };
    }

    componentDidUpdate(prevProps) {
        console.log(this.props)
        console.log(prevProps)
        if (this.props.stats !== prevProps.stats) {

        }

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
        let statData = this.processData(this.props.stats)
        let statMaxima = this.getMaxima(this.props.stats)
        return (
            <div className='ui container victory2'>
                <VictoryChart polar
                    theme={VictoryTheme.material}
                    domain={{ y: [0, 1] }}
                >
                    <VictoryGroup colorScale={["gold", "green", '#266ee2']}
                        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
                    >
                        {statData.map((data, i) => {
                            return <VictoryArea key={i} data={data} />;
                        })}
                    </VictoryGroup>

                    {
                        Object.keys(statMaxima).map((key, i) => {
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
                                        let num = Math.ceil((t * statMaxima[key]))
                                        return num > 1 ? num :
                                            Math.round((t * statMaxima[key]) * 10) / 10
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

