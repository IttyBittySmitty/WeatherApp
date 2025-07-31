import React from 'react';
import '../styles/WeatherDisplay.css';

const WeatherDisplay = ({ data, unit, convertTemperature, onToggleUnit }) => {
  const getWeatherIcon = (weatherCode) => {
    const iconMap = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️'
    };
    return iconMap[weatherCode] || '🌤️';
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="weather-display">
      <div className="weather-card">
        <div className="weather-header">
          <h2>{data.name}, {data.sys.country}</h2>
          <p className="date">{formatDate(data.dt)}</p>
        </div>
        
        <div className="weather-main">
          <div className="temperature-section">
            <div className="weather-icon">
              {getWeatherIcon(data.weather[0].icon)}
            </div>
            <div className="temperature-info">
              <div className="temperature">
                {convertTemperature(data.main.temp)}°{unit === 'celsius' ? 'C' : 'F'}
              </div>
              <div className="weather-description">
                {data.weather[0].description}
              </div>
              <button 
                className="unit-toggle"
                onClick={onToggleUnit}
              >
                Switch to {unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}
              </button>
            </div>
          </div>
          
          <div className="weather-details">
            <div className="detail-item">
              <span className="detail-label">Feels like</span>
              <span className="detail-value">
                {convertTemperature(data.main.feels_like)}°{unit === 'celsius' ? 'C' : 'F'}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{data.main.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Wind Speed</span>
              <span className="detail-value">{data.wind.speed} m/s</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Pressure</span>
              <span className="detail-value">{data.main.pressure} hPa</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Visibility</span>
              <span className="detail-value">{data.visibility / 1000} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay; 