import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from 'react';
import { useColorModeValue } from "@chakra-ui/react";
import { GenderPiechartData } from "variables/charts";
import axios from 'axios';

import { Doughnut } from 'react-chartjs-2';
// create Pie chart for GENDER apex charts make all colors (including legend text colors) dark mode compatible
//const baseURL = 'http://172.16.244.45:5000/analytics/gender';

const GenderPiechart = () => {
const [ChartSeries, setChartSeries] = useState([38, 49,13]);
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
    ...GenderPiechartData.options,
    colors:[useColorModeValue("#EB5757", "#454444"),
    useColorModeValue("#7FFFD4", "#060080"),
    useColorModeValue("F2C94C", "#008080"),
    useColorModeValue("#00800", "#737272"),
  ],
    legend: {
      ...GenderPiechartData.options.legend,
      labels: {
        colors: useColorModeValue("#000", "#fff"),
      },
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={ChartSeries}
      type="donut"
      height={300}
    />
  );
};

export default GenderPiechart;