import Navbar from '../components/Navbar'

export default function AboutMe() {
  return (
    <article className="profile-card page-enter">
      <Navbar />

      <div className="hero-image-wrap profile-hero">
        <img
          className="profile-illustration"
          src="/profile.svg"
          alt="Illustration representing Mohammad"
        />
      </div>

      <p className="eyebrow">ABOUT ME</p>
      <h1>Hi, I’m Mohammad</h1>

      <p className="lead-text">
        I’m a graduate student in Computing &amp; Data Analytics at Saint Mary’s
        University in Halifax, Nova Scotia, with a background in Computer Science.
      </p>

      <p className="body-text">
        I enjoy building practical software, data-driven projects, and modern web
        applications. I’m especially interested in React, business technology,
        simulation, data analytics, and creating useful digital solutions.
      </p>

      <div className="tag-row" aria-label="Interests">
        <span className="tag">React</span>
        <span className="tag">Data Analytics</span>
        <span className="tag">Software Development</span>
      </div>
    </article>
  )
}
