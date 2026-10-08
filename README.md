# Mohammad Alalouh - A00454272
# About Me & My Town — React Assignment 
# Netlify Link: https://sensational-platypus-94e857.netlify.app/

A two-view React application created for the assignment rubric. The app includes an **About Me** page and a **My Town** page for Halifax, Nova Scotia. The My Town page loads live weather data, conditionally displays a weather image based on Celsius temperature, and lets the user switch between Celsius and Fahrenheit.

## Tech stack

- React
- Vite
- React Router
- CSS
- Open-Meteo weather API

## Why Vite?

Vite is used as the React build tool because it provides a simple project structure, very fast local development, and an optimized production build. It does not replace React; it runs and builds the React application.

## Assignment requirements covered

- [x] Two required views: **About Me** and **My Town**
- [x] Functional navigation between views
- [x] Live weather data fetched from a valid API using `fetch()`
- [x] Conditional weather image:
  - `<= 10°C` -> `cold.png`
  - `11–19°C` -> `mild.png`
  - `>= 20°C` -> `sunny.png`
- [x] Working **Change to °F / Change to °C** button
- [x] Responsive CSS styling
- [x] Clean component-based React code
- [x] README documentation
- [x] AI-use disclosure
- [x] Deployment configuration for Netlify and Vercel

## Project structure

```text
mohammad-react-weather-assignment/
├─ public/
│  ├─ cold.png
│  ├─ mild.png
│  ├─ sunny.png
│  ├─ halifax.svg
│  └─ profile.svg
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  └─ WeatherCard.jsx
│  ├─ pages/
│  │  ├─ AboutMe.jsx
│  │  └─ MyTown.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ netlify.toml
├─ vercel.json
├─ vite.config.js
├─ package.json
└─ README.md
```

## Run locally

1. Open the project folder in VS Code.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown by Vite, normally `http://localhost:5173`.

## Build before submission

Run:

```bash
npm run build
```

If the build succeeds, Vite creates the production `dist` folder.

You can preview the production build with:

```bash
npm run preview
```

## Weather API

The app requests Halifax's current temperature from Open-Meteo using:

```text
https://api.open-meteo.com/v1/forecast
```

Coordinates used for Halifax:

- Latitude: `44.6488`
- Longitude: `-63.5752`

The API call is implemented in `src/components/WeatherCard.jsx` with the browser's built-in `fetch()` function.

## Conditional rendering logic

The app always uses the Celsius API value to select the required weather image:

```js
if (tempC <= 10) return '/cold.png'
if (tempC < 20) return '/mild.png'
return '/sunny.png'
```

The displayed number can then be switched to Fahrenheit without changing which weather category applies.

## Temperature conversion

The Fahrenheit value is calculated with:

```text
°F = (°C × 9/5) + 32
```

## AI Usage

I used Chat Gpt to get a free weather api, in addition to css styles.