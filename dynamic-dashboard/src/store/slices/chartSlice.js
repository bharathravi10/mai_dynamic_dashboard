import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  labels: [],
  userStatistics: [],
  internetSpeed: [],
  marketingAnalysis: [],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addDataPoint: (state, action) => {
      const { time, value } = action.payload;
      state.labels = [...state.labels, time].slice(-10);
      state.userStatistics = [...state.userStatistics, value].slice(-10);
      const internetValue = value + Math.floor(Math.random() * 15) - 3;
      state.internetSpeed = [
        ...state.internetSpeed,
        Math.max(0, internetValue),
      ].slice(-10);
      const marketingValue = value + Math.floor(Math.random() * 10) - 5;
      state.marketingAnalysis = [
        ...state.marketingAnalysis,
        Math.max(0, marketingValue),
      ].slice(-5);
    },
  },
});

export const { addDataPoint } = chartSlice.actions;
export default chartSlice.reducer;
