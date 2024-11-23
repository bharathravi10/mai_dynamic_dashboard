// KeyMetrics.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { LiveDataConstant } from '../../constants';

const KeyMetrics = ({ filteredData, datasetFilter }) => {
  const calculateMetrics = () => {
    const values =
      datasetFilter === 'all'
        ? filteredData.flatMap((row) =>
            [row.user, row.internet, row.market].filter((v) => v !== null),
          )
        : filteredData.map((row) => row.value).filter((v) => v !== null);

    if (!values.length) return { average: '-', max: '-', min: '-', count: 0 };

    const total = values.reduce((sum, value) => sum + value, 0);
    const average = (total / values.length).toFixed(2);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const count = values.length;

    return { average, max, min, count };
  };

  const { average, max, min, count } = calculateMetrics();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        {LiveDataConstant.KEY_MATRIX}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1">
              {LiveDataConstant.TOTAL_DATA_POINTS}
            </Typography>
            <Typography variant="h6">{count}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1">
              {LiveDataConstant.AVERAGE_VALUE}
            </Typography>
            <Typography variant="h6">{average}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1">
              {LiveDataConstant.MAXIMUM_VALUE}
            </Typography>
            <Typography variant="h6">{max}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="subtitle1">
              {LiveDataConstant.MINIMUM_VALUE}
            </Typography>
            <Typography variant="h6">{min}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KeyMetrics;
