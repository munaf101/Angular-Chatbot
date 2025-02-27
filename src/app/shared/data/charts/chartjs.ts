/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
import { ChartConfiguration, ChartType } from "chart.js";

//Line Charts
export const lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
    y: {
      ticks: {
        color: '#77778e',
      },
      display: true,
      grid: {
        color: 'rgba(119, 119, 142, 0.2)',
      },
    },
  },
};

export const lineChartType: ChartType = 'line';
export const lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [20, 420, 210, 354, 580, 320, 480],
      label: 'Profits',
      backgroundColor: 'transparent',
      borderColor: '#6259ca',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#6259ca',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#6259ca',
      fill: 'origin',
    },
  ],
  labels: ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'],
};
//BarChart1
export const  barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins:{
    legend: {
      display: true,
      labels: {
        color: '#77778e'
      }
    },
  },
  scales: {
    y: {
      ticks: {
        // beginAtZero: true,
        stepSize: 150,
        color: '#77778e'
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)'
      }
    },
    x: {
      ticks: {
        display: true,
        color: '#77778e'
      },
      grid: {
        display: false,
        color: 'rgba(119, 119, 142, 0.2)'
      }
    }
  }
};
export const barChartType: ChartType = 'bar'
export const barChartLegend = true
export const barChartPlugins = []
export const barChartData: ChartConfiguration['data'] = {datasets:[
  {
    data: [200, 450, 290, 367, 256, 543, 345],
    label: 'Sales',
    borderWidth: 2,
    backgroundColor: '#9877f9',
    borderColor: '#9877f9',
    pointBackgroundColor: '#ffffff',
  }
],
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
//Bar Chart 2
export const barChart2Options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins:{
    legend: {
      labels: {
        color: "#77778e"
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#77778e",
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)'
      }
    },
    y: {
      ticks: {
        // beginAtZero: true,
        color: "#77778e",
      },
      grid: {
        color: 'rgba(119, 119, 142, 0.2)'
      },
    }
  },
}
export const barChart2Type: ChartType = 'bar';
export const barChart2Legend = true;
export const barChart2Plugins = []
export const barChart2Data: ChartConfiguration['data'] = {datasets:[
  {
    label: "Data1",
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: "#6259ca",
    borderWidth: 0,
    backgroundColor: "#6259ca"
  },
  {
    label: "Data2",
    data: [28, 48, 40, 19, 86, 27, 90],
    borderColor: "#53caed",
    borderWidth: 0,
    backgroundColor: "#53caed"
  }
],
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
}
//Area Chart
export const AreaChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    x: {
      ticks: {
        color: '#77778e',
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)'
      }
    },
    y: {
      ticks: {
        // beginAtZero: true,
        color: '#77778e'
      },
      grid: {
        color: 'rgba(119,119,142, 0.2)'
      }
    }
  },
  plugins:{
  legend: {
    labels: {
      color: '#77778e'
    }
  },
  tooltip: {
    mode: 'index',
    intersect: false
  },
}

}
export const AreaChartType: ChartType = 'line';
export const AreaChartData: ChartConfiguration['data'] = {datasets:[
  {
    label: "Data1",
    data: [22, 44, 67, 43, 76, 45, 12],
    borderColor: "rgba(113, 76, 190, 0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(113, 76, 190, 0.5)",
    pointBorderColor: 'rgba(113, 76, 190, 0.5)',
    tension: 0.4,
    fill: 'origin'
  },
  {
    label: "Data2",
    data: [16, 32, 18, 26, 42, 33, 44],
    borderColor: "rgba(235, 111, 51 ,0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(	235, 111, 51, 0.7)",
    pointBorderColor: "rgba(	235, 111, 51, 0.7)",
    tension: 0.4,
    fill: 'origin'
  }
],
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July']
}
//DoughNut Chart and Pie chart data
export const PieChartData: ChartConfiguration['data'] = {datasets: [
  {
    data: [20, 20, 30, 5, 25],
    backgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb']
  }

],
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
}
export const PieChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  plugins:{
    legend: {
      display: false,
    },
  },
}
export const DoughnutChartType: ChartType = 'doughnut';
export const PieChartType: ChartType = 'pie';
//Radar Chart
export const radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins:{
    legend: {
      display: false
    },
  }
}
export const radarChartType: ChartType = 'radar';
export const radarChartData: ChartConfiguration['data'] = {datasets:[
  {
    label: "Data1",
    data: [65, 59, 66, 45, 56, 55, 40],
    borderColor: "rgba(113, 76, 190, 0.9)",
    borderWidth: 1,
    backgroundColor: "rgba(113, 76, 190, 0.5)"
  },
  {
    label: "Data2",
    data: [28, 12, 40, 19, 63, 27, 87],
    borderColor: "rgba(235, 111, 51,0.8)",
    borderWidth: 1,
    backgroundColor: "rgba(235, 111, 51,0.4)"
  }
],
labels: ["Eating", "Dinner", "Drinking", "Water", "Sleeping", "Designing", "Graphics"]
}

//Polar Chart
export const polarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins:{
    legend: {
      labels: {
        color: "#77778e"
      },
    },
  },
  scales: {
  
  },
}
export const polarChartType: ChartType = 'polarArea';
export const polarChartData: ChartConfiguration['data'] = {datasets:[
  {
    data: [18, 15, 9, 6, 19],
    backgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    hoverBackgroundColor: ['#6259ca', '#53caed', '#01b8ff', '#f16d75', '#29ccbb'],
    borderColor: 'transparent',
  }
],
labels: ["Data1", "Data2", "Data3", "Data4"]
}

