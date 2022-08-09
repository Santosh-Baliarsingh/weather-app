import React from "react";
import styled from "styled-components";

// Dynamic Icons
const WeatherInfoicons = {
  sunset: "/Assets/temp.svg",
  sunrise: "Assets/temp.svg",
  humidity: "Assets/humidity.svg",
  wind: "Assets/wind.svg",
  pressure: "/Assets/pressure.svg",
};

// For dynamic Weather Icons as per Openweather icons Fomat
// https://openweathermap.org/weather-conditions
const weatherIcons = {
  "01d": "/Assets/sunny.svg",
  "01n": "/Assets/night.svg",
  "02d": "/Assets/day.svg",
  "02n": "/Assets/cloudy-night.svg",
  "03d": "/Assets/cloudy.svg",
  "03n": "/Assets/cloudy.svg",
  "04d": "/Assets/perfect-day.svg",
  "04n": "/Assets/cloudy-night.svg",
  "09d": "/Assets/rain.svg",
  "09n": "/Assets/rain-night.svg",
  "10d": "/Assets/rain-night.svg",
  "10n": "/Assets/rain-night.svg",
  "11d": "/Assets/storm.svg",
  "11n": "/Assets/storm.svg",
  "50d": "/Assets/cloudy.svg",
  "50n": "/Assets/cloudy.svg",
};

// WeatherData Styled component
const WeatherData = styled.div`
  display: flex;
  felex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// WeatherCondition  Styled  Component
const WeatherCondition = styled.span`
  margin: 5px auto;
  font-size: 15px;

  & span {
    font-size: 28px;
    font-weight: bold;
  }
`;

// WeatherLogo Styled Component
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 40px auto;
`;

// Location Styled Component
const Location = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

// WeatherInfo  Styled Component
const WeatherInfo = styled.span`
  font-size: 16px;
  font-weight: bolder;
  margin: 20px 0px;
  text-align: start;
`;

// WeatherInfoContainer Styled Component
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

// WeatherCard Styled Component
const WeatherCard = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

// InfoIcon Styled Component
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

// InfoLabel Styled Component
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  fot-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

// Dynamic WeatherInfoComponent 
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <WeatherCard>
      <InfoIcon src={WeatherInfoicons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </WeatherCard>
  );
};

export default function WeatherComponent(props) {

  const { weather } = props; // destructuring
   
  const isDay = weather?.weather[0]?.icon.includes("d");

  // getTime Function
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherData>
        <WeatherCondition>
          <span>{`${Math.floor(weather.main.temp - 273)}°C|${
            weather.weather[0].main
          }`}</span>
        </WeatherCondition>
        <WeatherLogo src={weatherIcons[weather.weather[0].icon]} />
      </WeatherData>
      <Location>{`${weather.name} , ${weather.sys.country}`}</Location>
      <WeatherInfo>Weather Info</WeatherInfo>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather.main.humidity} />
        <WeatherInfoComponent name="wind" value={weather.wind.speed} />
        <WeatherInfoComponent name="pressure" value={weather.main.pressure} />
      </WeatherInfoContainer>
    </>
  );
}
