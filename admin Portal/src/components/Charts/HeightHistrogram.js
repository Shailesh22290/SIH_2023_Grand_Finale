import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { HeightHistogramData, HeightHistogramOptions } from "variables/charts";
import { useColorModeValue } from "@chakra-ui/react";
import axios from 'axios';

//const baseURL = 'http://172.16.244.45:5000/analytics/gender';

const HeightHistogram = () => {
  const [chartSeries, setChartSeries] = useState(
    [{
      name: 'Males',
      data: [44, 55, 41, 37, 42, 43, 31,44, 55, 41, 37, 42, 43, 31,44, 55, 41, 37, 42, 43, 31,33]
    }, {
      name: 'Females',
      data: [23, 22, 33, 52, 13, 23, 32,44, 55, 41, 37, 42, 43, 31,44, 55, 41, 37, 42, 43, 31,23]
    }, {
      name: 'Transgender',
      data: [3, 2, 3, 2, 3, 3, 2,3, 2, 3, 2, 3, 3, 2,3, 2, 3, 2, 3, 3, 2,2]
    }
  ]);

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
    ...HeightHistogramOptions,
    chart: {
      foreColor: useColorModeValue("#000", "#fff"),
      toolbar: {
        show: false,
      },
      outerWidth: "100vw",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={chartSeries} // Corrected the series structure
      type="bar"
      height={300}
    />
  );
};

export default HeightHistogram;
