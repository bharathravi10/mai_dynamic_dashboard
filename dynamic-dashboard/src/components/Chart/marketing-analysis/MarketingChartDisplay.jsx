import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketingChartDisplay = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Marketing Analysis',
        data,
        backgroundColor: [
          '#3f51b5',
          '#f50057',
          '#ff9800',
          '#4caf50',
          '#2196f3',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pie data={chartData} options={options} />
    </Box>
  );
};

export default MarketingChartDisplay;
