# Weather Forecasting App

A dynamic and visually appealing weather forecasting application built with React and the OpenWeatherMap API. This app provides real-time weather information and 5-day forecasts for any city worldwide.

## Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View detailed weather predictions for the next 5 days
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Error Handling**: User-friendly error messages for invalid inputs or API failures
- **Loading States**: Visual feedback during API requests

## Technologies Used

- **React 18**: Modern React with hooks for state management
- **OpenWeatherMap API**: For weather data and forecasts
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript ES6+**: Modern JavaScript features

## Prerequisites

Before running this application, you need to:

1. **Node.js**: Make sure you have Node.js installed (version 14 or higher)
2. **OpenWeatherMap API Key**: Register at [OpenWeatherMap](https://openweathermap.org/api) to get your free API key

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd WeatherApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## API Key Setup

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key
5. Create a `.env` file in the project root
6. Add: `REACT_APP_OPENWEATHER_API_KEY=your_api_key_here`

## Usage

1. **Search for a City**: Enter any city name in the search bar
2. **View Current Weather**: See temperature, humidity, wind speed, and more
3. **Toggle Units**: Click the unit toggle button to switch between Celsius and Fahrenheit
4. **View Forecast**: Scroll down to see the 5-day weather forecast
5. **Error Handling**: If a city isn't found, you'll see a helpful error message

## Project Structure

```
WeatherApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherDisplay.js
│   │   ├── Forecast.js
│   │   └── ErrorMessage.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── SearchBar.css
│   │   ├── WeatherDisplay.css
│   │   ├── Forecast.css
│   │   └── ErrorMessage.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Features Breakdown

### SearchBar Component
- Input field for city names
- Loading spinner during API calls
- Form validation

### WeatherDisplay Component
- Current weather information
- Temperature with unit toggle
- Weather icons and descriptions
- Detailed weather metrics

### Forecast Component
- 5-day weather forecast
- Daily temperature and conditions
- Responsive grid layout

### ErrorMessage Component
- User-friendly error messages
- Animated error display

## Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To deploy this app:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- React team for the amazing framework
- The open-source community for inspiration and tools

## Support

If you encounter any issues or have questions, please:
1. Check the browser console for errors
2. Verify your API key is correct
3. Ensure you have a stable internet connection
4. Create an issue in the repository

---

**Note**: This is a demo project for educational purposes. For production use, consider implementing additional security measures and error handling. 