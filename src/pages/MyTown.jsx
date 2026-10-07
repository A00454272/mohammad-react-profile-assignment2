import Navbar from '../components/Navbar'
import WeatherCard from '../components/WeatherCard'

export default function MyTown() {
  return (
    <article className="profile-card page-enter">
      <Navbar />

      <div className="town-image-wrap">
        <img
          className="town-image"
          src="/halifax.svg"
          alt="Illustration of the Halifax waterfront"
        />
      </div>

      <p className="eyebrow">MY TOWN</p>
      <h1>I live in Halifax, NS</h1>

      <p className="lead-text">
        Halifax is the capital of Nova Scotia on Canada’s Atlantic coast. It is
        known for its harbour, waterfront, universities, historic sites, and lively
        student community.
      </p>

      <WeatherCard />
    </article>
  )
}
