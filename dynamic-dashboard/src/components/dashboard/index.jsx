import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TableContainer from '../table';
import KPI from '../Chart/Kpi';
import { useDispatch, useSelector } from 'react-redux';
import { connectWebSocket } from '../../utils/websocket';
import { addDataPoint } from '../../store/slices/chartSlice';
import InternetSpeedContainer from '../Chart/internet-speed';
import UserStaticsContainer from '../Chart/user-statics';
import MarketAnalysisChartContainer from '../Chart/marketing-analysis';
import { LiveDataConstant } from '../../constants';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { userStatistics, labels, internetSpeed, marketingAnalysis } =
    useSelector((state) => state.chart);

  useEffect(() => {
    const socket = connectWebSocket('ws://localhost:8080', (data) => {
      const newTime = new Date(data.time).toLocaleTimeString();
      const newValue = data.value;

      dispatch(addDataPoint({ time: newTime, value: newValue }));
    });

    return () => socket.close();
  }, [dispatch]);
  return (
    <Box>
      <Typography sx={{ mb: 3, fontWeight: 'bold', fontSize: '1.6rem' }}>
        {LiveDataConstant.DASHBOARD}
      </Typography>
      <Grid container spacing={2} sx={{ mb: { md: 2 } }}>
        <Grid item xs={12} sm={6}>
          <InternetSpeedContainer
            labels={labels}
            internetSpeed={internetSpeed}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <UserStaticsContainer
            userStatistics={userStatistics}
            labels={labels}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 1 }} spacing={2}>
        <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
          <MarketAnalysisChartContainer
            labels={labels}
            marketingAnalysis={marketingAnalysis}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
          <KPI
            latest={
              userStatistics.length > 0 &&
              userStatistics[userStatistics.length - 1]
            }
            average={
              userStatistics.length > 0 &&
              (
                userStatistics.reduce((a, b) => a + b, 0) /
                userStatistics.length
              ).toFixed(2)
            }
            max={userStatistics.length > 0 && Math.max(...userStatistics)}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mb: { md: 2 } }}>
        <Grid item xs={12} sm={12}>
          <TableContainer
            internetSpeed={internetSpeed}
            labels={labels}
            data={userStatistics}
            marketingAnalysis={marketingAnalysis}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
