// import { EChartOption } from 'echarts';
import * as echarts from 'echarts';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexFill
  } from "ng-apexcharts";
  export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    colors: string[];
    legend: ApexLegend;
    fill: ApexFill;
  };
export let ApexData1 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        enabled: false,
    },
    series: [{
        name: 'Total Sales',
        data: [0, 15, 24, 18, 26, 24, 25, 11, 27, 19, 12, 21, 15, 31, 35, 27, 33, 23, 41, 27, 24, 23, 19, 26]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#fa057a'],
};

export let ApexData2 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        enabled: false,
    },
    series: [{
        name: 'Total User',
        data: [0, 45, 13, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 95, 31]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#2dce89'],
};

export let ApexData3 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        enabled: false,
    },
    series: [{
        name: 'Total Income',
        data: [0, 35, 41, 35, 27, 13, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 91, 37, 39, 62, 51]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#ff5b51'],
};

export let ApexData4 = {
    chart: {
        type: 'area',
        height: 60,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        enabled: false,
    },
    series: [{
        name: 'Total Tax',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#fcbf09'],
}

export let echartLineBarOption: any = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25'
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer: {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        },

    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'Total Units Sold',
            type: 'line',
            smooth: true,
            data: [8, 5, 15, 10, 10, 8, 9, 12, 5, 15, 10, 10, 8, 16],
            // itemStyle: {
            //     barBorderRadius: [50, 50, 0, 0],
            //     color: ''
            // }
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#fd6f82' },
                            { offset: 1, color: '#fb1c52' }
                        ]
                    )
                }
            },
        },
        {
            name: 'Total Sales',
            symbolSize: 20,
            barWidth: 20,
            type: 'bar',
            data: [13, 17, 19, 22, 17, 11, 19, 20, 17, 19, 25, 17, 11, 19],
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#705ec8' },
                            { offset: 1, color: '#20c2fa' }

                        ]
                    )
                }
            },
        }
    ],
    color: ['#ef6430', '#2205bf']
}

