import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-right: 32px;
  height: 64px;
  width: 64px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Day = styled.p`
  margin-bottom: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #48355a;
  text-transform: uppercase;
`;

const GeneralWeather = styled.p`
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #252525;
`;

const HighLowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Low = styled.p`
  margin-right: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #525252;
  > strong {
    font-weight: 700;
  }
`;

const High = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #525252;
  > strong {
    font-weight: 700;
  }
`;

const Overview = ({ day, forecast }) => {
  const condition = forecast.condition.text;
  const icon = forecast.condition.icon;
  const temp = Math.round(forecast.avgtemp_f);
  const maxTemp = Math.round(forecast.maxtemp_f);
  const minTemp = Math.round(forecast.mintemp_f);

  return (
    <Container>
      <Icon>
        <img src={icon} alt={condition} title={condition} />
      </Icon>
      <ContentContainer>
        <Day>{day}</Day>
        <GeneralWeather>
          {temp}° {condition}
        </GeneralWeather>
        <HighLowContainer>
          <Low>
            Low: <strong>{minTemp}°</strong>
          </Low>
          <High>
            High: <strong>{maxTemp}°</strong>
          </High>
        </HighLowContainer>
      </ContentContainer>
    </Container>
  );
};

export default Overview;

Overview.defaultProps = {
  day: "Today",
  forecast: {
    condition: {
      text: "Sunny",
      icon: "",
    },
    avgtemp_f: 0,
    maxtemp_f: 0,
    mintemp_f: 0,
  },
};
