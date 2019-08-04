import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class PredictChart extends Component {

    componentDidMount() {}

    getOption() {
        let labelRight = {
            normal: {
                position: 'right'
            }
        };

        let labelLeft = {
            normal: {
                position: 'left'
            }
        }
        return {
            title: {
                text: '交错正负轴标签'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: 80,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
            },
            series: [{
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}'
                    }
                },
                data: [{
                    value: -0.07,
                    label: labelRight
                },
                {
                    value: -0.09,
                    label: labelRight
                },
                    0.2, 0.44,
                {
                    value: -0.23,
                    label: labelRight
                },
                    0.08,
                {
                    value: -0.17,
                    label: labelRight
                },
                    0.47,
                {
                    value: -0.36,
                    label: labelRight
                },
                    0.18
                ]
            }]
        }

    };

    render() {
        return (
            <div>
                <p>实例图表</p>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        )
    }
}

export default PredictChart;