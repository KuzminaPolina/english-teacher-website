import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const detectUserCityByCoords = throttle(async (lat:number, long:number) => {
    const locationUrl = `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=660fd29160c19115360845dhza2d050`;
    const locationResponse = await fetch(locationUrl);
    const locationData = await locationResponse.json();
    const city = await locationData.address.city; 
    return city;
}, 1000)

async function getWeatherData (lat:number, long:number) {
    const url = "https://api.open-meteo.com/v1/forecast";
    const params = {
        "latitude": lat,
        "longitude": long,
        "current": ["temperature_2m"],
        "timezone": "auto",
        "past_days": 1,
    }

    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];
    const current = response.current()!;
    
    const weatherData = {
        current: {
            time: new Date(Number(current.time()) * 1000),
            temperature2m: current.variables(0)!.value(),
        },    
    };

    return weatherData;
}


function Weather() {
  const [city, setCity] = useState<string>("");
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [isLocationAvailable, setIsLocationAvailable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();


  useEffect (() => {
    const success = async (position: GeolocationPosition) => {
        setIsLocationAvailable(true);
        const latUnformat:number = position.coords.latitude;
        const longUnformat:number = position.coords.longitude;
        try {
            const city = await detectUserCityByCoords(latUnformat, longUnformat);
            setCity(city)
            const weatherData = await getWeatherData(latUnformat, longUnformat);
            const currentTemp = weatherData.current.temperature2m;
            const currentTempRounded = parseFloat(currentTemp.toFixed(1));
            setCurrentTemp(currentTempRounded)
        } catch (error:any) {
            setError(error)
            console.log(error)
        }
        setIsLoading(false)
    }

    const error = () => {
        setIsLocationAvailable(false);
    };
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(success, error);
}, [])

    if (isLoading) {
        return <div className="self-start">Loading...</div>
    }

  if (error) {
    return (
    <div className="self-start">{error}</div>
    )
  }

    return (
        <div className="self-start">
            <p>City: {isLocationAvailable ? city : "You are on planet Earth!"}</p>
            <p>Current temp: {currentTemp > 0 ? `+${currentTemp}` : `-${currentTemp}`}</p>
        </div>
    );
}

export default Weather;
