// DataTable.js
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Filters from './Filters';
import DataTableContent from './DataTableContent';
import KeyMetrics from './KeyMetrics';
import { LiveDataConstant } from '../../constants';

const DataTable = ({
  labels,
  userStatistics,
  internetSpeed,
  marketingAnalysis,
}) => {
  // console.log(labels, internetSpeed, userStatistics, marketingAnalysis,'data--');

  const [datasetFilter, setDatasetFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState({ start: '', end: '' });

  const allData = labels.map((label, index) => ({
    time: label,
    user: userStatistics[index] || null,
    internet: internetSpeed[index] || null,
    market: marketingAnalysis[index] || null,
  }));

  const getFilteredData = () => {
    const filteredByDataset =
      datasetFilter === 'all'
        ? allData
        : allData.map((row) => ({
            time: row.time,
            value: row[datasetFilter],
          }));

    if (timeFilter.start || timeFilter.end) {
      const start = timeFilter.start
        ? new Date(timeFilter.start).getTime()
        : -Infinity;
      const end = timeFilter.end
        ? new Date(timeFilter.end).getTime()
        : Infinity;

      return filteredByDataset.filter((row) => {
        const rowTime = new Date(row.time).getTime();
        return rowTime >= start && rowTime <= end;
      });
    }

    return filteredByDataset;
  };

  const filteredData = getFilteredData();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontWeight: '600', fontSize: '23px' }}
      >
        {LiveDataConstant.DATA_TABLE}
      </Typography>

      {/* Key Metrics */}
      <KeyMetrics filteredData={filteredData} datasetFilter={datasetFilter} />
      {/* Filters */}
      <Filters
        datasetFilter={datasetFilter}
        setDatasetFilter={setDatasetFilter}
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
      />

      {/* Data Table */}
      <DataTableContent
        filteredData={filteredData}
        datasetFilter={datasetFilter}
      />
    </Box>
  );
};

export default DataTable;
