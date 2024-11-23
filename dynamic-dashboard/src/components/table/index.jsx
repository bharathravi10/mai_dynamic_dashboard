import { Card, CardContent } from '@mui/material';
import React from 'react';
import DataTable from './DataTable';

const TableContainer = ({ labels, internetSpeed, data, marketingAnalysis }) => {
  return (
    <Card>
      <CardContent>
        <DataTable
          labels={labels}
          internetSpeed={internetSpeed}
          userStatistics={data}
          marketingAnalysis={marketingAnalysis}
        />
      </CardContent>
    </Card>
  );
};

export default TableContainer;
