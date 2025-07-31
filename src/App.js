import React, { useState, useEffect } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('celsius'); // celsius or fahrenheit

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || 'YOUR_API_KEY_HERE';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';
  
  // Debug: Log the API key (first few characters only for security)
  console.log('API Key loaded:', API_KEY ? API_KEY.substring(0, 8) + '...' : 'NOT LOADED');
  console.log('Environment variable:', process.env.REACT_APP_OPENWEATHER_API_KEY ? 'EXISTS' : 'MISSING');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json();
        setForecastData(forecastData);
      }
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const convertTemperature = (temp) => {
    if (unit === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Weather Forecast</h1>
          <p>Get real-time weather information for any city</p>
        </header>
        
        <SearchBar onSearch={fetchWeatherData} loading={loading} />
        
        {error && <ErrorMessage message={error} />}
        
        {weatherData && (
          <WeatherDisplay 
            data={weatherData} 
            unit={unit}
            convertTemperature={convertTemperature}
            onToggleUnit={toggleUnit}
          />
        )}
        
        {forecastData && (
          <Forecast 
            data={forecastData} 
            unit={unit}
            convertTemperature={convertTemperature}
          />
        )}
      </div>
    </div>
  );
}

export default App; 