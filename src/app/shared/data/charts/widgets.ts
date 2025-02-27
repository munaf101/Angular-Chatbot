export const ApexData6 = {
    chart: {
        type: 'line',
        background:'rgba(68, 84, 195,0.06)',
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
        colors: '#82a1ff',
        width: 6,
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
        data: [83, 56, 89, 73, 61, 75, 86, 56],

    }],
    yaxis: {
        min: 0
    },
    colors: ['rgba(68, 84, 195,0.06)'],
};

export const ApexData2 = {
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
        data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 31]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#2dce89'],
};

export const ApexData3 = {
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
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#ff5b51'],
};
