import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import UserStaticsChartDisplay from './UserStaticsChartDisplay';
import { LiveDataConstant } from '../../../constants';

const UserStaticsContainer = ({ labels, userStatistics }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'User Statistics',
        data: userStatistics,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.5)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  return (
    <Card>
      <CardHeader title={LiveDataConstant.USER_STATISTICS} />
      <CardContent>
        <UserStaticsChartDisplay chartData={chartData} />
      </CardContent>
    </Card>
  );
};

export default UserStaticsContainer;
