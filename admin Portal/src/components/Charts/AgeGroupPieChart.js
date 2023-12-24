import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useColorModeValue } from "@chakra-ui/react";
import { AgeGroupPieChartData } from "variables/charts";
import axios from 'axios';

//const baseURL = 'http://172.16.244.45:5000/analytics/';


const AgeGroupPieChart = () => {
  const [chartSeries, setChartSeries] = useState([44, 55, 13, 43, 22, 43]);
  const [lablelSeries, setLabelseries]= useState(["18-25", "25-30", "30-35","35-40","40-45","45-55"])
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
  }, []); // Add an empty dependency array to ensure useEffect runs only once when the component mounts

  const options = {
    ...AgeGroupPieChartData.options,
    series: chartSeries,

    labels: lablelSeries,
    colors: [
      useColorModeValue("#2D9CDB", "#454444"),
      useColorModeValue("#800180", "#737272"),
      useColorModeValue("#008000", "#323131"),
      useColorModeValue("#F2C94C", "#008080"),
      useColorModeValue("#EB5757", "#fff"),
      useColorModeValue("#7FFFD4", "#060080"),
    ],
    legend: {
      ...AgeGroupPieChartData.options.legend,
      labels: {
        colors: useColorModeValue("#000", "#fff"),
      },
      foreColor: useColorModeValue("#000", "#fff"),
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={chartSeries}
      labels={lablelSeries}
      type="pie"
      
      height={300}
    />
  );
};

export default AgeGroupPieChart;
