import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useColorModeValue } from "@chakra-ui/react";
import { BowlingActionPieChartTypeData } from "variables/charts";
import axios from 'axios';

//const baseURL = 'http://172.16.244.45:5000/analytics/gender';

const BowlingActionPieChart = () => {
  const [chartSeries, setChartSeries] = useState([45, 25, 30]);
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
    ...BowlingActionPieChartTypeData.options,
    colors: [
      useColorModeValue("#2D9CDB", "#454444"),
      useColorModeValue("#F2994A", "#737272"),
      useColorModeValue("#EFEA5A", "#323131"),
      useColorModeValue("#F2C94C", "#454444"),
      useColorModeValue("#EB5757", "#737272"),
    ],
    legend: {
      ...BowlingActionPieChartTypeData.options.legend,
      labels: {
        colors: useColorModeValue("#000", "#fff"),
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={chartSeries}
      type="pie"
      height={300}
    />
  );
};

export default BowlingActionPieChart;
