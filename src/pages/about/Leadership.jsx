import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";

// PLACEHOLDER: the proprietress's real name, photo and message.
// Leave photo as "" and an initial shows instead of a broken image.
// Add or remove paragraphs freely: each string is one paragraph.
const proprietress = {
  name: "Mrs. Ugwu Blessing Nonye",
  title: "Proprietress",
  photo: "/images/about/proprietress.jpg",
  message: [
    "Welcome to Seat of Wisdom Montessori School! We believe every child has unique potential and deserves the opportunity to learn, grow and succeed in a supportive environment.",
    "Our commitment is to provide quality education while nurturing confidence, good character, creativity and a love for learning. We value the partnership we share with parents and believe that working together helps every child thrive.",
    "Thank you for trusting us with your child's future. We look forward to a rewarding journey of learning and growth together.",
  ],
};

// PLACEHOLDER: the other heads. Add or remove entries to match the school.
const heads = [
  {
    name: "Mrs Elizabeth David",
    role: "School Administrator",
    photo: "",
  },
  {
    name: "Mrs Prosper Abiodun ",
    role: "School Supervisor",
    photo: "",
  },
  {
    name: "OYELADE AYOMIDE MIRACLE",
    role: "Head of Secondary",
    photo: "/images/about/leader1.jpg",
  },
];

function initial(name) {
  return name.replace(/[[\]]/g, "").charAt(0);
}

function Photo({ person, className }) {
  if (person.photo) {
    return <img src={person.photo} alt={person.name} className={className} />;
  }
  return (
    <div className={`${className} photo-empty`} aria-hidden="true">
      {initial(person.name)}
    </div>
  );
}

function Leadership() {
  return (
    <>
      <PageBanner
        title="School Leadership"
        subtitle="Meet the people who lead Seat of Wisdom."
        image={banners.leadership}
      />

      {/* ---------- Message from the Proprietress ---------- */}
      <section className="section message">
        <div className="container message__grid">
          <figure className="message__person">
            <Photo person={proprietress} className="message__photo" />
            <figcaption>
              <span className="message__name">{proprietress.name}</span>
              <span className="message__title">{proprietress.title}</span>
            </figcaption>
          </figure>

          <div className="message__text">
            <p className="eyebrow">From the Proprietress</p>
            <h2 className="section-title">A Message to Our Parents</h2>
            {proprietress.message.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="message__signoff">
              <span>{proprietress.name}</span>
              <span>{proprietress.title}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- The other heads ---------- */}
      <section className="section heads">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Our Team</p>
            <h2 className="section-title">Our School Heads</h2>
          </div>

          <ul className="heads__grid">
            {heads.map((person, i) => (
              <li className="head" key={i}>
                <Photo person={person} className="head__photo" />
                <h3 className="head__name">{person.name}</h3>
                <p className="head__role">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Leadership;
