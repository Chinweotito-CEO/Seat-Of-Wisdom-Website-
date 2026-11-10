import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";

// PLACEHOLDER: copy the school's approved core values
const values = [
  {
    title: "Excellence",
    text: "We strive for the highest standards in all we do.",
  },
  {
    title: "Integrity",
    text: "We uphold honesty, responsibility, and moral soundness.",
  },
  {
    title: "Discipline",
    text: "We believe discipline is key to personal and academic success.",
  },
  {
    title: "Innovation",
    text: "We embrace technology and modern methods to enhance learning.",
  },
];

function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Our story, our purpose and the values that guide us."
        image={banners.about}
      />

      <section className="section story">
        <div className="container story__grid">
          <div className="story__text">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-title">How Seat of Wisdom began</h2>
            <p>
              Seat of Wisdom Group of Schools is a leading educational
              institution based in Ibadan, Nigeria, committed to raising a
              generation of knowledgeable, disciplined, and morally upright
              students. With a firm foundation in academic excellence, character
              formation, and innovation, we provide a holistic learning
              experience that prepares students for success in life and
              leadership.
            </p>
            <p>
              Our learning environment is serene, secure, and
              technology-enhanced , offering each learner the opportunity to
              grow intellectually, socially, spiritually, and emotionally.
            </p>
          </div>
          <img
            src="/images/about/welcome-about.jpg"
            alt="Seat of Wisdom pupils and staff"
            className="story__image"
          />
        </div>
      </section>

      <section className="section mvv">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">What Guides Us</p>
            <h2 className="section-title">Mission, Vision & Core Values</h2>
          </div>

          <div className="bubbles bubbles--pair">
            <article className="bubble bubble--white">
              <h3>Our Mission</h3>
              <p>
                To nurture future leaders through quality education, moral
                discipline, and innovative learning , equipping students to
                thrive in an ever-evolving world.
              </p>
            </article>
            <article className="bubble bubble--lilac">
              <h3>Our Vision</h3>
              <p>
                To be a top-tier institution known for academic excellence,
                values-driven education, and producing responsible global
                citizens.
              </p>
            </article>
          </div>

          <h3 className="mvv__values-title">Our Core Values</h3>
          <ul className="bubbles bubbles--values">
            {values.map((v, i) => (
              <li
                className={
                  i % 2 === 0 ? "bubble bubble--sage" : "bubble bubble--white"
                }
                key={i}
              >
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
