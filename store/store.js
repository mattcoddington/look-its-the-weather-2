import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import selectedDayReducer from "./selectedDaySlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    selectedDay: selectedDayReducer,
  },
  devTools: true,
});

export default store;
