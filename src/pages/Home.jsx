import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// PLACEHOLDER text and images: replace with approved wording and real photos
const slides = [
  {
    image: "/images/home/heroslide1.jpg",
    title: "Nurturing Today's Learners for a Brighter Tomorrow",
    text: "A safe, friendly environment where every child can flourish.",
  },
  {
    image: "/images/home/heroslide2.jpg",
    title: "Rooted in Values, Ready for the Future",
    text: "Confident learners who respect their culture.",
  },
  {
    image: "/images/home/heroslide3.jpg",
    title: "Learning Beyond the Classroom",
    text: "Activities and celebrations that bring learning to life.",
  },
];

// PLACEHOLDER captions: use real events and activities from the school
const lifeItems = [
  {
    image: "/images/home/life1.jpg",
    caption: "World Food Day",
    alt: "Pupils holding placards about healthy eating and hunger",
  },
  {
    image: "/images/home/life2.jpg",
    caption: "Assembly and Activity Time",
    alt: "Young pupils seated together on the play area",
  },
  {
    image: "/images/home/life3.jpg",
    caption: "Music and Performance",
    alt: "A staff member playing the saxophone",
  },
  {
    image: "/images/home/life4.jpg",
    caption: "Hands-On Learning",
    alt: "A teacher helping young children with a number activity",
  },
  {
    image: "/images/home/life5.jpg",
    caption: "Teachers' Day Celebration",
    alt: "Pupils with gifts in front of a Happy Teachers' Day banner",
  },
  {
    image: "/images/home/life6.jpg",
    caption: "Cultural Day",
    alt: "Pupils in traditional attire",
  },
];

// FROM THE OLD SCHOOL WEBSITE: confirm these are current and apply to this school
const stats = [
  { value: "26", label: "Certified Teachers" },
  { value: "269", label: "Students Enrolled" },
  { value: "15", label: "Classes" },
  { value: "2", label: "Awards & Recognitions" },
];

// PLACEHOLDER levels and text: confirm the real levels and wording with the school
// DRAFT descriptions: the school must approve these before launch
// DRAFT descriptions: the school must approve these before launch
const classes = [
  {
    name: "Early Years & Nursery",
    text: "A warm, caring start where young children learn through play and discovery.",
    image: "/images/home/class-nursery.jpg",
    path: "/academics",
  },
  {
    name: "Primary School",
    text: "Building strong foundations in learning, character and confidence.",
    image: "/images/home/class-primary.jpg",
    path: "/academics/primary",
  },
  {
    name: "Secondary School",
    text: "Preparing students to grow academically, morally and socially.",
    image: "/images/home/class-secondary.jpg",
    path: "/academics/secondary",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [isPlaying]);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section
        className="hero"
        aria-roledescription="carousel"
        aria-label="School highlights"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={
              i === current ? "hero__slide hero__slide--active" : "hero__slide"
            }
            style={{
              backgroundImage: `linear-gradient(rgba(20,20,50,0.6), rgba(20,20,50,0.6)), url(${slide.image})`,
            }}
            aria-hidden={i !== current}
          >
            <div className="hero__content">
              <h2 className="hero__title">{slide.title}</h2>
              <p className="hero__text">{slide.text}</p>
              <Link to="/admissions" className="btn-apply">
                Enquire Now
              </Link>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="hero__arrow hero__arrow--left"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className="hero__arrow hero__arrow--right"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="hero__controls">
          <div className="hero__dots">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                className={
                  i === current ? "hero__dot hero__dot--active" : "hero__dot"
                }
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Welcome ---------- */}
      <section className="welcome section">
        <div className="container welcome__grid">
          <div className="welcome__text">
            <h2 className="welcome__title">
              <span className="welcome__script">Welcome</span>
              <span className="welcome__sub">
                to Seat of Wisdom Montessori School
              </span>
            </h2>
            <p>
              We are delighted to welcome you to a learning community where
              excellence, discipline, and innovation come together to shape
              future leaders. At Seat of Wisdom, students are empowered
              academically, morally, and socially.
            </p>
            <Link to="/about" className="btn-apply">
              Learn More
            </Link>
          </div>

          <div className="welcome__media">
            <img
              src="/images/home/welcome.jpg"
              alt="Pupils and staff of Seat of Wisdom"
              className="welcome__image"
            />
            <img
              src="/images/home/welcome-small.jpg"
              alt="A pupil taking part in a school activity"
              className="welcome__circle"
            />
          </div>
        </div>
      </section>

      {/* ---------- School Life ---------- */}
      <section className="life section" aria-labelledby="life-title">
        <div className="container">
          <div className="life__intro">
            <p className="eyebrow">School Life</p>
            <h2 id="life-title" className="section-title">
              Enriched Co-Curricular Activities
            </h2>
            <p className="life__lead">
              From cultural celebrations and music to special days that honour
              our teachers, school life at Seat of Wisdom is full of moments
              that build confidence, creativity and friendship.
            </p>
          </div>

          <div className="life__grid">
            {lifeItems.map((item, i) => (
              <figure className="life__tile" key={i}>
                <img src={item.image} alt={item.alt} className="life__image" />
                <figcaption className="life__caption">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="life__action">
            <Link to="/academics" className="btn-apply">
              Explore School Life
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- At a Glance ---------- */}
      <section className="glance section" aria-labelledby="glance-title">
        <div className="container">
          <h2 id="glance-title" className="section-title glance__title">
            Seat of Wisdom at a Glance
          </h2>

          <ul className="glance__grid">
            {stats.map((stat) => (
              <li className="stat" key={stat.label}>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Classes ---------- */}
      <section className="classes section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Explore Our Classes</h2>
            <Link to="/academics" className="section-link">
              View All →
            </Link>
          </div>

          <div className="classes__grid">
            {classes.map((item) => (
              <Link to={item.path} className="class-card" key={item.name}>
                {" "}
                <img src={item.image} alt="" className="class-card__image" />
                <div className="class-card__body">
                  <div>
                    <h3 className="class-card__title">{item.name}</h3>
                    <p className="class-card__text">{item.text}</p>
                  </div>
                  <span className="class-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
