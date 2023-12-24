import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useColorModeValue } from "@chakra-ui/react";
import { HandedPieChartData } from "variables/charts";
import axios from 'axios';

//const baseURL = 'http://172.16.244.45:5000/analytics/gender';

const HandedPieChart = () => {
  const [chartSeries, setChartSeries] = useState([22, 20, 10, 25, 15,8]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setChartSeries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); 
  
  const options = {
    ...HandedPieChartData.options,
    tooltip: {
      enabled: true,
      y: {
        title: {
          formatter: function(val) {
            if (val == "Others"){
                return `Chef Driver Bartender`
            }

            return val
          }
        }
      }
    },
    colors: [
      useColorModeValue("#2D9CDB", "#454444"),
      useColorModeValue("#800180", "#737272"),
      useColorModeValue("#008000", "#323131"),
      useColorModeValue("#F2C94C", "#008080"),
      useColorModeValue("#EB5757", "#fff"),
      useColorModeValue("#7FFFD4", "#060080"),
      useColorModeValue("#8BCAD8", "#057780") ,
    ],
    legend: {
      ...HandedPieChartData.options.legend,
      labels: {
        colors: useColorModeValue("#000", "#fff"),
      },
    },
  };
  //src\components\Charts\.hover-text-box.css
  return (
    <ReactApexChart
      options={options}
      series={chartSeries}
      type="pie"
      height={300}
    />
  );
};

export default HandedPieChart;




