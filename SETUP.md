# Weather App Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Get Your API Key**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

3. **Set Up Environment Variables**
   - Create a file named `.env` in the root directory
   - Add your API key: `REACT_APP_OPENWEATHER_API_KEY=your_api_key_here`

4. **Start the App**
   ```bash
   npm start
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - Start searching for weather!

## Troubleshooting

### Common Issues:

1. **"Module not found" errors**
   - Run `npm install` to install dependencies

2. **API key not working**
   - Make sure your `.env` file is in the root directory
   - Verify the API key is correct
   - Wait a few minutes after getting a new API key (it takes time to activate)

3. **App not starting**
   - Check if port 3000 is available
   - Try `npm start` again
   - Check the console for error messages

## Features to Test

- ✅ Search for any city
- ✅ View current weather
- ✅ Toggle between Celsius/Fahrenheit
- ✅ View 5-day forecast
- ✅ Responsive design on mobile
- ✅ Error handling for invalid cities
- ✅ Loading states during API calls

## Next Steps

1. Deploy to GitHub Pages, Netlify, or Vercel
2. Add more features like location detection
3. Implement weather alerts
4. Add more detailed weather information 