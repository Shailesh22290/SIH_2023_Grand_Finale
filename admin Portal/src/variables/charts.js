
// export const barChartData = [
//   {
//     name: "Height",
//     data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
//   },
// ];

export const HeightHistogramData = {
  series: [
    {
      name: "No. of Users",
      data: [170, 180, 190, 200, 190,130, 120,170, 180, 190, 200, 190,130, 120,170, 180, 190, 200, 190,130, 120,0,0],
    },
  ],
}

// export const barChartOptions = {
//   chart: {
//     toolbar: {
//       show: false,
//     },
//   },
//   tooltip: {
//     style: {
//       backgroundColor: "red",
//       fontSize: "12px",
//       fontFamily: undefined,
//     },
//     onDatasetHover: {
//       style: {
//         backgroundColor: "red",
//         fontSize: "12px",
//         fontFamily: undefined,
//       },
//     },
//     theme: "dark",
//   },
//   xaxis: {
//     categories: ["145", "150", "155", "160", "165", "170", "175", "180", "185"],
//     show: true,
//     labels: {
//       show: true,
//       style: {
//         colors: "#000",
//         fontSize: "12px",
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: true,
//     color: "#000",
//     labels: {
//       show: true,
//       style: {
//         colors: "#000",
//         fontSize: "14px",
//       },
//     },
//   },
//   grid: {
//     show: false,
//   },
//   fill: {
//     colors: "#000",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 8,
//       columnWidth: "12px",
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 768,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 0,
//           },
//         },
//       },
//     },
//   ],
// };

export const HeightHistogramOptions = {
  chart: {
    height: 350,
    width: "100%" ,
    type: "bar",
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
  },
  xaxis: {
    categories: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur",
     "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", 
     "Pathankot", "Patiala", "Ropar", "Mohali", "Sangrur", "Nawanshahr", "Tarn Taran"],
  },
  yaxis: {
    title: {
      text: "Number of Users",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " Users";
      },
    },
  },
};


// bowling action types : 1) hip dominant 2) knee dominant 3) Inbetween 
export const BowlingActionPieChartTypeData = {
  series: [45, 25, 30],
  options: {
    chart: {
      type: "pie",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Got Job", "Not Applied", "Applied"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const BowlingAPieChartTypeData = {
  series: [24, 16, 22,12,15,18,2],
  options: {
    chart: {
      type: "pie",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Facebook", "Whatsapp", "Instagram","naukri.com","LinkedIn","Youtube","Others"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const GenderPiechartData = {
  series: [44, 55],
  options: {
    chart: {
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Male", "Female","Transgender"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
}

// height distribution bar chart, dark mode compatible





// add data const for age group pie chart, slices should be 0-18, 19-25, 26-35, 36-45, 46-55, 56-65, 66+
export const AgeGroupPieChartData = {
  options: {
    chart: {
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};


export const HandedPieChartData = {
  series: [22, 20,10,25,15,8],
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return "test";
        },
      },
  },
    chart: {
      type: "pie",
    },
    legend: {
      position: "bottom",
    },
    labels: ["IT", "Electrcian","Cosmetology", "Household","Mechanic","Others"],
    text:["fggfc"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },

      },
  }],
  },
};



export const lineChartData = [
  {
    name: "Mobile apps",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Websites",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#4FD1C5", "#2D3748"],
  },
  colors: ["#4FD1C5", "#2D3748"],
};
