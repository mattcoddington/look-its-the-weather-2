import styled from "styled-components";

import { useSelector } from "react-redux";
import { getDay, getForecast } from "../../store/selectedDaySlice";
import { getLoading } from "../../store/apiSlice";

import { dayOfWeek } from "../../util/dayOfWeek";

import Overview from "./Overview";
import Specifics from "./Specifics";

const Container = styled.div`
  width: 885px;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  border: 1px solid #ededed;
`;

const WeatherDetails = () => {
  const day = useSelector(getDay);
  const forecast = useSelector(getForecast);
  const loading = useSelector(getLoading);

  return (
    <Container>
      {!loading ? (
        <>
          <Overview day={day} forecast={forecast.day} />
          <Divider />
          <Specifics tod="Day" forecast={forecast.hour[12]} />
          <Specifics tod="Night" forecast={forecast.hour[23]} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default WeatherDetails;
