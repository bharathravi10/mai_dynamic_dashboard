// Filters.js
import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { LiveDataConstant } from '../../constants';

const Filters = ({
  datasetFilter,
  setDatasetFilter,
  timeFilter,
  setTimeFilter,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ flex: 1 }}>
        <InputLabel>{LiveDataConstant.FILTER_DATASET}</InputLabel>
        <Select
          value={datasetFilter}
          label="Filter by Dataset"
          onChange={(e) => setDatasetFilter(e.target.value)}
        >
          <MenuItem value="all">{LiveDataConstant.ALL_DATA}</MenuItem>
          <MenuItem value="user">{LiveDataConstant.USER_STATISTICS}</MenuItem>
          <MenuItem value="internet">
            {LiveDataConstant.INTERNET_SPEED}
          </MenuItem>
          <MenuItem value="market">
            {LiveDataConstant.MARKETING_ANALYSIS}
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Start Time"
        type="datetime-local"
        fullWidth
        sx={{ flex: 1 }}
        InputLabelProps={{ shrink: true }}
        value={timeFilter.start}
        onChange={(e) =>
          setTimeFilter((prev) => ({ ...prev, start: e.target.value }))
        }
      />
      <TextField
        label="End Time"
        type="datetime-local"
        fullWidth
        sx={{ flex: 1 }}
        InputLabelProps={{ shrink: true }}
        value={timeFilter.end}
        onChange={(e) =>
          setTimeFilter((prev) => ({ ...prev, end: e.target.value }))
        }
      />
    </Box>
  );
};

export default Filters;
