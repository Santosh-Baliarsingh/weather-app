import React from "react";
import styled from "styled-components";

// WeatherLogo styled component
const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
  `;

  // WeatherLogo styled component
  const SearchCity = styled.span`
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
  `;

  // SearchBox Styled Component
  const SearchBox = styled.form`
    display : flex;
    flex-direction : row;
    border : 1px solid #000;
    border-radius : 2px;
    color: #000;
    font-size: 20px;
    margin : 20px auto;

    & input{

      padding : 10px;
      font-size : 15px;
      border : none;
      outline : none;
      font-weight: bold;
    }
    & button{

      padding : 10px;
      font-size : 15px;
      color: #fff;
      border : none;
      background-color: #282c34;
      outline : none;
      font-weight: bold;
      cursor : pointer;
    }
  `;
export default function CityComponent(props) {

  const {updateCity,fetchWeather} = props; // destructuring
  
  return (
    <>
      <WeatherLogo src="/Assets/perfect-day.svg"></WeatherLogo>
      <SearchCity>Find Weather Of Your City</SearchCity>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="Search City" onChange={(e) => updateCity(e.target.value)}/>
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
}
