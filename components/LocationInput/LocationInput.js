import { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../store/apiSlice";

const Input = styled.input`
  height: 60px;
  width: 885px;
  background-color: #eaeaea;
  background-image: url("/images/icon-search.svg");
  background-repeat: no-repeat;
  background-position: 22px center;
  background-size: 28px 28px;
  border-radius: 100px;
  border: none;
  outline: none;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #525252;
  :hover {
    background-color: #e0e0e0;
  }
  :focus {
    background-color: #e0e0e0;
  }
`;

const LocationInput = () => {
  const [value, setValue] = useState("Greenville, SC");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();

  const debouncedFetch = useCallback(
    debounce((value) => {
      dispatch(fetchApiData(value));
    }, 750),
    []
  );

  useEffect(() => {
    debouncedFetch(value);
  }, [value, debouncedFetch]);

  return <Input type="text" value={value} onChange={handleChange} />;
};

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default LocationInput;
