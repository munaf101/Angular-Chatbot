import { ApexChart, ApexStroke } from 'ng-apexcharts';
// import { Color, Label } from 'ng2-charts';
export interface Apex{
    chart:ApexChart,
    stroke:ApexStroke;
    fill:{
        gradient:{
            enabled:boolean
        }
    },
    series:[{
        name:string;
        data:number[]
    }],
 
    colors:string[]
}
export interface ApexSparklines{
    series:[{
     data:number[];
    }],
    colors:string[],
    chart:ApexChart
    plotOptions:{
        bar:{
            columnWidth:string
        }
    },
    tooltip:{
        fixed:{
            enabled:boolean
        },
        x:{
            show:boolean
        },
      
        marker: {
            show: boolean;
        }
    }
}
export interface linechart{
  
    data:number[],
    label:string
}
export interface linechart1{
    maintainAspectRatio: boolean,
    legend: {
        display: boolean;
    },
    responsive: boolean,
    tooltips: {
        mode: string;
        titleFontSize: number;
        titleFontColor: string;
        bodyFontColor: string;
        backgroundColor: string;
        titleFontFamily: string;
        bodyFontFamily: string;
        cornerRadius: number;
        intersect: boolean;
    },

    title: {
        display: boolean;
    },
    elements: {
        line: {
            borderWidth: number;
        };
        point: {
            radius: number;
            hitRadius: number;
            hoverRadius: number;
        };
    }

}
export interface lineColors{
    backgroundColor: string,
    borderColor: string,
    pointBorderColor: string,
    pointBackgroundColor: string
}
export const ApexData1:Apex = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
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
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Total Revenue',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
   
    colors: ['#fa057a'],
};

export const ApexData2:Apex = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
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
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Unique Visitors',
        data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,]
    }],
   
    colors: ['#2dce89'],
};

export const ApexData3 :Apex= {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
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
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Expenses',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
  
    colors: ['#ff5b51'],
};

export const ApexData4:Apex = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
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
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Expenses',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
   
    colors: ['#ff5b51'],
};

export const ApexSparklines1:ApexSparklines = {
    series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#fa057a'],
    chart: {
        type: 'bar',
        width: 250,
        height: 25,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
      
        marker: {
            show: true
        }
    }
};

export const ApexSparklines2 :ApexSparklines = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#f7346b'],
    chart: {
        type: 'bar',
        width: 250,
        height: 25,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
      
        marker: {
            show: true
        }
    }
};

export const ApexSparklines3:ApexSparklines  = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#2dce89'],
    chart: {
        type: 'bar',
        width: 250,
        height: 25,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
      
        marker: {
            show: true
        }
    }
};

export const ApexSparklines4:ApexSparklines  = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#45aaf2'],
    chart: {
        type: 'bar',
        width: 250,
        height: 25,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
   
        marker: {
            show: true,
        }
    }
};

//Crypto Charts
export const lineChartOptions: linechart1 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    responsive: true,
    tooltips: {
        mode: 'index',
        titleFontSize: 12,
        titleFontColor: '#7886a0',
        bodyFontColor: '#7886a0',
        backgroundColor: '#fff',
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        cornerRadius: 3,
        intersect: false,
    },
    
    title: {
        display: false,
    },
    elements: {
        line: {
            borderWidth: 3
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
        }
    }
};

export const lineChartLabels: string[] = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
export const lineChartType = 'area';

export const lineChartLegend = true;
export const lineChartColors: lineColors[] = [
    {
        backgroundColor: 'rgba(68, 84, 195,0.06)',
        borderColor: 'rgba(68, 84, 195,0.6)',
        // borderWidth: 3,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent'
    }
];
export const lineChartData: linechart[] = [
    {
       
        data: [83, 56, 89, 73, 61, 75, 86, 56],
        label: 'Bitcoin',
    }
];

export const lineChartData1: linechart[] = [
    {
        data: [45, 78, 67, 78, 36, 78, 89, 84],
        label: 'Nem',
    }
];
export const lineChartData2: linechart[] = [
    {
        data: [56, 78, 36, 78, 29, 78, 37, 56],
        label: 'Ripple',
    }
];
export const lineChartData3: linechart[] = [
    {
        data: [45, 78, 98, 34, 67, 28, 89, 45],
        label: 'Neo',
    }
];

