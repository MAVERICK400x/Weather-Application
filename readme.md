# Weather Application

## Overview

The **Weather Application** is a simple and intuitive web application that allows users to check the current weather of any city worldwide. It fetches real-time weather data from the OpenWeatherMap API and displays essential weather details such as temperature, humidity, wind speed, and weather conditions.

## Features

- 🌍 **Search Any City** - Enter a city name to fetch real-time weather data.
- ☀️ **Weather Details** - Displays temperature, humidity, wind speed, and weather description.
- 🎨 **Modern UI** - A clean and responsive design for better user experience.
- 🚀 **Dynamic Data Fetching** - Uses the OpenWeatherMap API to retrieve weather information.
- ⚠️ **Error Handling** - Displays an error message if the city is not found.
- 🔄 **Auto-Clear Input** - Clears the search field after fetching the weather.

## Technologies Used

- **HTML** - Structure of the web application.
- **CSS** - Styling and responsive design.
- **JavaScript** - Fetching API data and handling user interactions.
- **OpenWeatherMap API** - Fetching live weather details.

## Installation & Setup

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. **Get OpenWeatherMap API Key**:

   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
   - Generate an API key.
3. **Replace API Key in `script.js`**:

   ```js
   const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
   ```
4. **Open `index.html` in a browser**:

   - Simply double-click on `index.html` or use a live server extension in VS Code.

## File Structure

```
/weather-app
│-- index.html         # Main HTML file
│-- style.css          # CSS for styling
│-- script.js          # JavaScript file for fetching and displaying weather data
│-- README.md          # Documentation
```

## Usage

1. Open the application in your browser.
2. Enter a city name in the search box.
3. Click the "Get Weather" button.
4. View the weather details displayed on the screen.

## Error Handling

- If an invalid city name is entered, the app will display:
  ```
  Error: City not found
  ```
- If there is an issue fetching data, it will display:
  ```
  Error fetching data
  ```

## Future Enhancements

🔹 **Weather Icons** - Display relevant weather icons dynamically.
🔹 **5-Day Forecast** - Show upcoming weather predictions.
🔹 **User Location Support** - Auto-detect user location for instant weather updates.
🔹 **Dark Mode** - Add a dark mode toggle for better UX.

## License

This project is **open-source** and free to use. Contributions are welcome!

---

Enjoy checking the weather with our **Weather Application!** ☀️🌧️🌍
