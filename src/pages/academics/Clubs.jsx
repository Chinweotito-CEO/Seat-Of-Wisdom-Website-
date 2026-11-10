import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";


// DRAFT: from planning notes. CONFIRM each club is active, and at which levels,
// before launch. Delete any that aren't. Photos go in public/clubs/
const clubs = [
  {
    name: "Literary and Debate Club",
    text: "Encourages reading, creative expression, public speaking, critical thinking and confidence.",
    image: "/images/clubs/literary.jpg",
  },
  {
    name: "Digital Media and Young Writers Club",
    text: "Develops children's writing, storytelling, digital communication and media creation skills.",
    image: "/images/clubs/digital-media.jpg",
  },
  {
    name: "STEM, Coding, Robotics and Young Mathematics Club",
    text: "Introduces learners to science, technology, coding, robotics, mathematics and problem-solving.",
    image: "/images/clubs/stem.jpg",
  },
  {
    name: "Drama and Art Club",
    text: "Provides opportunities for creativity through drama, performance, drawing and artistic activities.",
    image: "/images/clubs/drama.jpg",
  },
  {
    name: "Entrepreneurship / Young CEO Club",
    text: "Introduces learners to business ideas, leadership, creativity, financial awareness and entrepreneurship.",
    image: "/images/clubs/entrepreneurship.jpg",
  },
  {
    name: "ECO / Environmental Club",
    text: "Promotes environmental awareness, cleanliness, recycling, gardening and responsibility for nature.",
    image: "/images/clubs/eco.jpg",
  },
];

function Clubs() {
  return (
    <>
      <PageBanner
        title="Clubs & Extracurricular Activities"
        subtitle="Learning that goes beyond the classroom."
        image={banners.clubs}
      />

      <section className="section clubs">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Beyond the Classroom</p>
            <h2 className="section-title">
              Where children discover their talents
            </h2>
            <p className="clubs__lead">
              {/* DRAFT: the school must approve this wording */}
              Beyond lessons, children can explore their interests, build
              confidence and make friends.
            </p>
          </div>

          <ul className="clubs__list">
            {clubs.map((club) => (
              <li className="club" key={club.name}>
                <img
                  src={club.image}
                  alt={`Pupils at ${club.name}`}
                  className="club__photo"
                />
                <div>
                  <h3>{club.name}</h3>
                  <p>{club.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Clubs;
