import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const UserStaticsChartDisplay = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        grid: {
          display: false, // Hide the grid lines on the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    elements: {
      line: {
        borderColor: '#36a2eb',
        backgroundColor: '#FFFF',
      },
    },
    backgroundColor: '#FFFF',
  };

  return <Line data={chartData} options={options} color="#FFF" />;
};

export default UserStaticsChartDisplay;
