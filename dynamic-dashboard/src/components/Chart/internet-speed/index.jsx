import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import InternetChartDisplay from './InternetChartDisplay';
import { LiveDataConstant } from '../../../constants';

const InternetSpeedContainer = ({ labels, internetSpeed }) => {
  return (
    <Card>
      <CardHeader title={LiveDataConstant.INTERNET_SPEED} />
      <CardContent>
        <InternetChartDisplay labels={labels} data={internetSpeed} />
      </CardContent>
    </Card>
  );
};

export default InternetSpeedContainer;
