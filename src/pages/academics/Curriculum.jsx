import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";


// DRAFT: general Montessori-inspired principles from planning notes.
// Confirm each one with the school before launch.
const principles = [
  {
    title: "Hands-on learning",
    text: "Children learn by doing, exploring and discovering for themselves.",
  },
  {
    title: "Independence and confidence",
    text: "Pupils are encouraged to think for themselves and grow in self-belief.",
  },
  {
    title: "Strong foundations",
    text: "Early reading, writing and number skills come first.",
  },
  {
    title: "The whole child",
    text: "Learning supports social, emotional and physical growth too.",
  },
];

function Curriculum() {
  return (
    <>
      <PageBanner
        title="Curriculum & Learning Approach"
        subtitle="What we teach and how we help every child learn."
        image={banners.curriculum}
      />

      <section className="section story">
        <div className="container story__grid">
          <div className="story__text">
            <p className="eyebrow">Our Curriculum</p>
            <h2 className="section-title">What your child will learn</h2>
            <p>
              At Seat of Wisdom Montessori School, our learning programme covers
              Early Years and Nursery, Primary School, and Secondary School. We
              focus on developing children's literacy, numeracy, communication,
              critical thinking and problem-solving skills at each stage of
              their education.
            </p>
            <p>
              We aim to make learning meaningful through classroom lessons,
              practical activities and opportunities for children to explore
              ideas and develop their abilities. Our goal is to build strong
              academic foundations while nurturing confidence, creativity and
              good character.
            </p>
          </div>
          <img
            src="/images/academics/curriculum.jpg"
            alt="A teacher guiding pupils through a lesson"
            className="story__image"
          />
        </div>
      </section>

      <section className="section mvv">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">How We Teach</p>
            <h2 className="section-title">Our Learning Approach</h2>
          </div>

          <ul className="bubbles bubbles--values">
            {principles.map((p, i) => (
              <li
                className={
                  i % 2 === 0 ? "bubble bubble--sage" : "bubble bubble--white"
                }
                key={p.title}
              >
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Curriculum;
