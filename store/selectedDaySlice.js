import { createSlice } from "@reduxjs/toolkit";

const selectedDaySlice = createSlice({
  name: "selectedDay",
  initialState: {
    selectedIdx: 0,
    day: "Today",
    forecast: {},
  },
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setSelectedIdx: (state, action) => {
      state.selectedIdx = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setDay, setSelectedIdx, setForecast } = selectedDaySlice.actions;

export const getDay = (state) => state.selectedDay && state.selectedDay.day;
export const getForecast = (state) =>
  state.selectedDay && state.selectedDay.forecast;
export const getSelectedIdx = (state) =>
  state.selectedDay && state.selectedDay.selectedIdx;

export default selectedDaySlice.reducer;
