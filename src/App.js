import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

// Container Styled Component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
`;

// AppName Styled Component
const AppName = styled.span`
  color: #000;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const apiKey = process.env.REACT_APP_WEATHER_API //OpenWeather api Key

  // fetchWeather function
  const fetchWeather = async (e) => {
    e.preventDefault(); // to Prevent the Deafult behaviour of Form
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    // console.log(response);
    updateWeather(response.data);
  };
  return (
    <>
      <Container>
        <AppName>React Weather App</AppName>
        {weather ? (
          <WeatherComponent weather={weather} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </>
  );
}

export default App;
