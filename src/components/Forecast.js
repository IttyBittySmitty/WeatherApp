import React from 'react';
import '../styles/Forecast.css';

const Forecast = ({ data, unit, convertTemperature }) => {
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
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Group forecast data by day and get the most common weather for each day
  const groupForecastByDay = () => {
    const dailyData = {};
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyData[date]) {
        dailyData[date] = {
          date: item.dt,
          temps: [],
          weather: item.weather[0],
          humidity: [],
          windSpeed: []
        };
      }
      dailyData[date].temps.push(item.main.temp);
      dailyData[date].humidity.push(item.main.humidity);
      dailyData[date].windSpeed.push(item.wind.speed);
    });

    return Object.values(dailyData).map(day => ({
      ...day,
      temp: Math.round(day.temps.reduce((a, b) => a + b, 0) / day.temps.length),
      humidity: Math.round(day.humidity.reduce((a, b) => a + b, 0) / day.humidity.length),
      windSpeed: Math.round((day.windSpeed.reduce((a, b) => a + b, 0) / day.windSpeed.length) * 10) / 10
    }));
  };

  const forecastDays = groupForecastByDay();

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecastDays.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-date">
              {formatDate(day.date)}
            </div>
            <div className="forecast-icon">
              {getWeatherIcon(day.weather.icon)}
            </div>
            <div className="forecast-temp">
              {convertTemperature(day.temp)}°{unit === 'celsius' ? 'C' : 'F'}
            </div>
            <div className="forecast-description">
              {day.weather.description}
            </div>
            <div className="forecast-details">
              <div className="forecast-detail">
                <span>Humidity: {day.humidity}%</span>
              </div>
              <div className="forecast-detail">
                <span>Wind: {day.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast; 