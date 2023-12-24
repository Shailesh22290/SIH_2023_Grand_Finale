import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useColorModeValue } from "@chakra-ui/react";
import { BowlingAPieChartTypeData } from "variables/charts";
import axios from 'axios';

//const baseURL = 'http://172.16.244.45:5000/analytics/gender';

const BowlingAPieChart = () => {
  const [chartSeries, setChartSeries] = useState([24, 16, 22, 12, 15, 18,2]);

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
    ...BowlingAPieChartTypeData.options,
    tooltip: {
      enabled: true,
      y: {
        title: {
          formatter: function(val) {
            if (val == "Others"){
                return `Indeed X`
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
      useColorModeValue("#8BCAD8", "#057780") ],
    legend: {
      ...BowlingAPieChartTypeData.options.legend,
      labels: {
        colors: useColorModeValue("#000", "#fff"),
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={chartSeries} // Used the correct state variable here
      type="pie"
      height={300}
    />
  );
};

export default BowlingAPieChart;
