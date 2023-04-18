import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-color: #fbfbfb;
  background-image: url("../images/weather-map-background.png");
  background-repeat: no-repeat-x;
  padding: 80px 208px 80px 208px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherMapBackground = (props) => (
  <Background>{props.children}</Background>
);

export default WeatherMapBackground;
