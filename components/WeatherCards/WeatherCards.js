import { useEffect, useState } from "react";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import {
  setDay,
  setForecast,
  setSelectedIdx,
  getDay,
  getSelectedIdx,
} from "../../store/selectedDaySlice";

import { dayOfWeek } from "../../util/dayOfWeek";

import WeatherCard from "./WeatherCard/WeatherCard";

const Container = styled.div`
  margin-top: 64px;
  width: 885px;

  display: flex;
  justify-content: space-between;

  > div {
    margin-right: 40px;
  }
  > div:last-child {
    margin-right: 0px;
  }
`;

const WeatherCards = () => {
  const [selected, setSelected] = useState(0);

  const dispatch = useDispatch();

  const forecast = useSelector(
    (state) =>
      state.api.data &&
      state.api.data.forecast &&
      state.api.data.forecast.forecastday
  );

  const selectedIdx = useSelector(getSelectedIdx);
  const today = useSelector(getDay);

  useEffect(() => {
    selectedIdx === 0 && today === "Today" ? setSelected(0) : "";
  }, [selectedIdx, today, selected]);

  const cardArray =
    forecast &&
    forecast.map((item, idx) => {
      const day = dayOfWeek(item.date);
      const condition = item.day && item.day.condition;
      const maxTemp = item.day && item.day.maxtemp_f;
      const minTemp = item.day && item.day.mintemp_f;

      const handleClick = () => {
        setSelected(idx);
        dispatch(setSelectedIdx(idx));
        dispatch(setDay(day));
        dispatch(setForecast(item));
      };

      return (
        <WeatherCard
          key={idx}
          day={day}
          condition={condition}
          maxTemp={Math.round(maxTemp)}
          minTemp={Math.round(minTemp)}
          handleClick={handleClick}
          focused={selected === idx}
        />
      );
    });

  return <Container>{cardArray}</Container>;
};

export default WeatherCards;
