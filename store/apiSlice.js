import { createSlice } from "@reduxjs/toolkit";
import { setForecast, setSelectedIdx, setDay } from "./selectedDaySlice";

const apiKey = process.env.WEATHERAPI_KEY;

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    setApiData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setApiData, setLoading } = apiSlice.actions;

export const fetchApiData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${data}&days=5&aqi=no&alerts=no`
    );
    const apiData = await response.json();
    dispatch(setSelectedIdx(0));
    dispatch(setDay("Today"));
    dispatch(setForecast({ ...apiData.forecast.forecastday[0] }));
    dispatch(setApiData(apiData));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default apiSlice.reducer;
