import React from 'react';
import * as echarts from 'echarts';


class Line extends React.Component {
    constructor(props) {
        super(props);
        this.dom = React.createRef();
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    componentDidMount() {
        if (!this.dom.current) return false;
        let chart = echarts.init(this.dom.current);
        chart.setOption(
            {
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [{
                    type: 'category'
                }],
                yAxis: [{
                    type: 'value'
                }],
                dataset: [{
                    source: [
                        {
                            name: 'A',
                            value: 10
                        },
                        {
                            name: 'B',
                            value: 30
                        },
                        {
                            name: 'C',
                            value: 70
                        },
                        {
                            name: 'D',
                            value: 40
                        },
                        {
                            name: 'E',
                            value: 80
                        },
                        {
                            name: 'F',
                            value: 20
                        }
                    ]
                }],
                series: [
                    {
                        type: 'line',
                        label: {
                            show: true,
                            formatter: (param) => {
                                return `{${param.name}|${param.data.name}}\n{b|${param.data.value}}`;
                            },
                            rich: {
                                a: {
                                    //backgroundColor: '#3e00fb',
                                    height: 20
                                },
                                b: {
                                    color: 'red',
                                    //backgroundColor: '#dd0e0e',
                                    height: 20
                                },
                                A: {
                                    color: 'blue',
                                    backgroundColor: 'grey'
                                }
                            }
                        },
                        encode: {
                            x: 'name',
                            y: 'value'
                        }
                    }
                ]
            }
        );
    }

    render() {
        return (
            <div ref={this.dom} style={{width: '800px', height: '600px', border: '1px solid red'}}>
            </div>
        );
    }
}

export default Line;