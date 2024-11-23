// DataTableContent.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { LiveDataConstant } from '../../constants';

const DataTableContent = ({ filteredData, datasetFilter }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: '500', fontSize: '1.2rem' }}>
              Time
            </TableCell>
            {datasetFilter === 'all' ? (
              <>
                <TableCell
                  sx={{ fontWeight: '500', fontSize: '1.2rem' }}
                  align="center"
                >
                  {LiveDataConstant.USER_STATISTICS}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: '500', fontSize: '1.2rem' }}
                  align="center"
                >
                  {LiveDataConstant.INTERNET_SPEED}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: '500', fontSize: '1.2rem' }}
                  align="center"
                >
                  {LiveDataConstant.MARKETING_ANALYSIS}
                </TableCell>
              </>
            ) : (
              <TableCell
                sx={{ fontWeight: '500', fontSize: '1.2rem' }}
                align="center"
              >
                {LiveDataConstant.VALUE}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              {datasetFilter === 'all' ? (
                <>
                  <TableCell align="center">{row.user ?? '-'}</TableCell>
                  <TableCell align="center">{row.internet ?? '-'}</TableCell>
                  <TableCell align="center">{row.market ?? '-'}</TableCell>
                </>
              ) : (
                <TableCell align="center">{row.value ?? '-'}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTableContent;
