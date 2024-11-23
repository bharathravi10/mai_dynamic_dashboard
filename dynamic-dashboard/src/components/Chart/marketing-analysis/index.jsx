import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import MarketingChartDisplay from './MarketingChartDisplay';
import { LiveDataConstant } from '../../../constants';

const MarketAnalysisChartContainer = ({ labels, marketingAnalysis }) => (
  <Card sx={{ height: '100%' }}>
    <CardHeader title={LiveDataConstant.MARKETING_ANALYSIS} />
    <CardContent
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <MarketingChartDisplay
        labels={labels.slice(-5)}
        data={marketingAnalysis}
      />
    </CardContent>
  </Card>
);

export default MarketAnalysisChartContainer;
