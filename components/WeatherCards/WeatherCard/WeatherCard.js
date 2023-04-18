import styled from "styled-components";

import { useSelector } from "react-redux";

const CardBackground = styled.div`
  width: 100%;
  height: 188px;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.focused
      ? `{  
        border: 1px solid #dddddd;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
      }`
      : `{  
        background-color: #eaeaea;
        border: 1px solid #ebebeb;
        :hover {
          background-color: #E0E0E0;
        }
      }`};
`;

const Day = styled.p`
  margin-bottom: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: #252525;
  text-transform: uppercase;
`;

const Icon = styled.div`
  margin-bottom: 16px;
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MaxTemp = styled.p`
  margin-bottom: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #48355a;
  text-transform: uppercase;
`;

const MinTemp = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #7e7e7e;
  text-transform: uppercase;
`;

const WeatherCard = ({
  condition,
  day,
  focused,
  handleClick,
  minTemp,
  maxTemp,
}) => {
  return (
    <CardBackground onClick={handleClick} focused={focused}>
      <Day>{day}</Day>
      <Icon>
        <img src={condition.icon} alt={condition.text} title={condition.text} />
      </Icon>
      <MaxTemp>{maxTemp}°</MaxTemp>
      <MinTemp>{minTemp}°</MinTemp>
    </CardBackground>
  );
};

export default WeatherCard;

WeatherCard.defaultProps = {
  focused: false,
};
