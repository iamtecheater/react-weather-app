A simple React weather app that displays weather information from the OpenWeatherMap API.

Use npm install and npm udpate if need be.

Node Packages used for project

- @material-ui/core - React components for faster and easier web development. Build your own design system, or start with Material Design.
- react-weather - Minimalistic react weather component.
- @testing-library/react - Simple and complete React DOM testing utilities that encourage good testing practices.
- dayjs - Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.- js-compatible API.

## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org/appid) to get an API key.
- Fork the project and clone it locally.

```sh
Enter your PAI key in

APP.js API key location

# function getWeather(city) {
#   return fetch(
#     `${'https://api.openweathermap.org/data/2.5'}/weather/?q=${city}&units=metric&APPID=${'eeb11b133540ff747ee3b05ae2526da5'}` <-- Enter API key here
#   )
#     .then(res => handleResponse(res))
#     .then(weather => {
#       if (Object.entries(weather).length) {
#         const mappedData = mapDataToWeatherInterface(weather);
#         return mappedData;
#       }
#     });
# }

# function getForecast(city) {
#   return fetch(
#     `${'https://api.openweathermap.org/data/2.5'}/forecast/?q=${city}&units=metric&APPID=${'eeb11b133540ff747ee3b05ae2526da5'}` <-- Enter API key here
#   )
#     .then(res => handleResponse(res))
#     .then(result => {
#       if (Object.entries(result).length) {
#         const forecast = [];
#         for (let i = 0; i < result.list.length; i += 8) {
#           forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
#         }
#         return forecast;
#       }
#     });
# }

APPtest.js API key location

#    "https://api.openweathermap.org/data/2.5/weather/?q=Eldoret&units=metric&APPID=eeb11b133540ff747ee3b05ae2526da5" <-- Enter API key here
#     );
#     expect(window.fetch).toHaveBeenCalledWith(
#       "https://api.openweathermap.org/data/2.5/forecast/?q=Eldoret&units=metric&APPID=eeb11b133540ff747ee3b05ae2526da5" <-- Enter API key here
#     );
#   });
```
