import styled from "styled-components";

import Header from "../components/Header";
import WeatherMapBackground from "../components/WeatherMapBackground";
import LocationInput from "../components/LocationInput";
import WeatherCards from "../components/WeatherCards";
import WeatherDetails from "../components/WeatherDetails";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Container>
    <Header />
    <WeatherMapBackground>
      <LocationInput />
      <WeatherCards />
    </WeatherMapBackground>
    <WeatherDetails />
  </Container>
);

export default Home;
