import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Box, useMediaQuery, useTheme } from '@mui/material';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const InternetChartDisplay = ({ labels, data }) => {
  const theme = useTheme();
  const isMDDown = useMediaQuery(theme.breakpoints.down('md'));
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Internet Speed',
        data,
        backgroundColor: 'rgba(63, 81, 181, 0.5)',
        borderColor: '#3f51b5',
        borderWidth: 1,
        barThickness: isMDDown ? 20 : 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default InternetChartDisplay;
