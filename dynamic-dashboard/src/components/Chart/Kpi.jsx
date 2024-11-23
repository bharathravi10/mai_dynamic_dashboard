import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';
import { LiveDataConstant } from '../../constants';

const MetricCard = ({ title, value }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <CardContent
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body1" color="textSecondary">
        {title}:
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {Number(value).toFixed(2)}
      </Typography>
    </CardContent>
  </Card>
);

const Kpi = ({ latest, average, max }) => {
  const latestNumber = Number(latest);
  const averageNumber = Number(average);
  const maxNumber = Number(max);
  const min = (averageNumber - maxNumber).toFixed(2);

  return (
    <Card
      sx={{
        minHeight: '405px',
        width: '100%',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <CardHeader title={LiveDataConstant.INTERNET_KEY_MATRIX} />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
        }}
      >
        <Grid container spacing={1} sx={{ flexGrow: 1, padding: 1 }}>
          <Grid item xs={12} sm={6} mb={2}>
            <MetricCard title={LiveDataConstant.LATEST} value={latestNumber} />
          </Grid>
          <Grid item xs={12} sm={6} mb={2}>
            <MetricCard
              title={LiveDataConstant.AVERAGE}
              value={averageNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MetricCard title={LiveDataConstant.MIN} value={min} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MetricCard title={LiveDataConstant.MAX} value={maxNumber} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Kpi;
