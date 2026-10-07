import { useEffect, useMemo, useState } from 'react'

const HALIFAX_LATITUDE = 44.6488
const HALIFAX_LONGITUDE = -63.5752

function getWeatherImage(tempC) {
  if (tempC <= 10) return '/cold.png'
  if (tempC < 20) return '/mild.png'
  return '/sunny.png'
}

function toFahrenheit(tempC) {
  return (tempC * 9) / 5 + 32
}

export default function WeatherCard() {
  const [temperatureC, setTemperatureC] = useState(null)
  const [unit, setUnit] = useState('C')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadWeather() {
    setLoading(true)
    setError('')

    try {
      const url = new URL('https://api.open-meteo.com/v1/forecast')
      url.searchParams.set('latitude', HALIFAX_LATITUDE)
      url.searchParams.set('longitude', HALIFAX_LONGITUDE)
      url.searchParams.set('current', 'temperature_2m')
      url.searchParams.set('timezone', 'auto')

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Weather request failed with status ${response.status}`)
      }

      const data = await response.json()
      const currentTemperature = data?.current?.temperature_2m

      if (typeof currentTemperature !== 'number') {
        throw new Error('Temperature data was missing from the weather response.')
      }

      setTemperatureC(currentTemperature)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load weather data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadWeather()
  }, [])

  const displayTemperature = useMemo(() => {
    if (temperatureC === null) return null
    return unit === 'C' ? temperatureC : toFahrenheit(temperatureC)
  }, [temperatureC, unit])

  if (loading) {
    return (
      <section className="weather-panel" aria-live="polite">
        <div className="weather-skeleton-icon" aria-hidden="true" />
        <div>
          <p className="weather-label">Current Halifax weather</p>
          <p className="weather-status">Loading weather…</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="weather-panel weather-error" aria-live="polite">
        <div>
          <p className="weather-label">Current Halifax weather</p>
          <p className="weather-status">Could not load the live temperature.</p>
          <button className="secondary-button" type="button" onClick={loadWeather}>
            Try again
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="weather-panel" aria-label="Current Halifax temperature">
      <img
        className="weather-icon"
        src={getWeatherImage(temperatureC)}
        alt={
          temperatureC <= 10
            ? 'Cold weather icon'
            : temperatureC < 20
              ? 'Mild weather icon'
              : 'Sunny weather icon'
        }
      />

      <div className="weather-details">
        <p className="weather-label">Current Halifax weather</p>
        <div className="temperature-row">
          <span className="temperature-value">{Math.round(displayTemperature)}</span>
          <span className="temperature-unit">°{unit}</span>
        </div>
      </div>

      <button
        className="temperature-toggle"
        type="button"
        onClick={() => setUnit((currentUnit) => (currentUnit === 'C' ? 'F' : 'C'))}
      >
        Change to °{unit === 'C' ? 'F' : 'C'}
      </button>
    </section>
  )
}
