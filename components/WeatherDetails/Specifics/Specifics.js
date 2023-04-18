import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  margin-right: 16px;
  height: 48px;
  width: 48px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Day = styled.p`
  margin-bottom: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #48355a;
  text-transform: uppercase;
`;

const GeneralWeather = styled.p`
  margin-bottom: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #525252;
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
  font-size: 13px;
  line-height: 15px;
  color: #525252;
  color: #525252;
  > strong {
    font-weight: 700;
  }
`;

const High = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #525252;
  > strong {
    font-weight: 700;
  }
`;

const Specifics = ({ tod, forecast }) => {
  const condition = forecast.condition && forecast.condition.text;
  const icon = forecast.condition && forecast.condition.icon;
  const temp = Math.round(forecast.temp_f);
  const humidity = Math.round(forecast.humidity);
  const precip = Math.round(forecast.will_it_rain);

  return (
    <Container>
      <Icon>
        <img src={icon} alt={condition} title={condition} />
      </Icon>
      <ContentContainer>
        <Day>{tod}</Day>
        <GeneralWeather>
          {temp}° {condition}
        </GeneralWeather>
        <HighLowContainer>
          <Low>
            Precip: <strong>{precip}%</strong>
          </Low>
          <High>
            Humidity: <strong>{humidity}%</strong>
          </High>
        </HighLowContainer>
      </ContentContainer>
    </Container>
  );
};

export default Specifics;

Specifics.defaultProps = {
  tod: "",
  forecast: {
    condition: {
      text: "",
      icon: "",
    },
    temp_f: "",
    humidity: "",
    will_it_rain: "",
  },
};
