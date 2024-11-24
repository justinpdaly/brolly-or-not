# brolly-or-not
A simple web application to decide if you should bring an Umbrella (or Brolly) with you or not
# To Brolly or Not To Brolly 🌂

A simple web application that tells Melbourne residents whether they need to bring an umbrella (brolly) today. Built with vanilla JavaScript and the OpenWeatherMap API.

## Features

- Real-time weather updates for Melbourne
- Smart brolly recommendations based on:
  - Current weather conditions
  - Rainfall probability
  - Cloud coverage
- Dark/Light theme toggle
- Automatic weather updates every 10 minutes
- Responsive design

## Live Demo

Visit [https://justinpdaly.github.io/brolly-checker/](https://[your-username].github.io/brolly-checker/) to see the app in action.

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox)
- Vanilla JavaScript
- OpenWeatherMap API
- Local Storage for theme preference

## Setup

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/brolly-checker.git
```

2. Open `script.js` and replace the API key with your own from [OpenWeatherMap](https://openweathermap.org/api):
```javascript
const API_KEY = 'your-api-key-here';
```

3. Deploy:
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Select main branch as source

## Development

To run locally:
1. Clone the repository
2. Open `index.html` in your browser
3. For live reload and development, consider using a local server:
```bash
python -m http.server 8000
# or
npx serve
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Material Icons](https://material.io/icons/)
- Inspired by Melbourne's unpredictable weather

## Future Improvements

- Add weekly forecast
- Implement geolocation for other cities
- Add weather alerts
- Include UV index information
- Add wind direction indicator
- Include "feels like" temperature

---
Made with ❤️ in Melbourne
