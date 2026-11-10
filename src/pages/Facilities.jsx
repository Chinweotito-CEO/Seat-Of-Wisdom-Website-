import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import banners from "../data/Banner.js";

// DRAFT wording: the school must approve it. Photos go in public/images/facilities/
// If the school has two separate labs, copy that entry and make one for each.
const facilities = [
  {
    name: "Classrooms",
    text: "Conducive classrooms with televisions to support learning.",
    image: "/images/facilities/classrooms.jpg",
    alt: "A classroom with a television",
  },
  {
    name: "Montessori Room",
    text: "A room set up for hands-on Montessori learning.",
    image: "/images/facilities/montessori-room.jpg",
    alt: "The Montessori room",
  },
  {
    name: "Physics & Chemistry Laboratories",
    text: "Laboratories for practical science lessons.",
    image: "/images/facilities/science-labs.jpg",
    alt: "The science laboratory",
  },
  {
    name: "Computer Room",
    text: "A computer room where pupils learn digital skills.",
    image: "/images/facilities/computer-room.jpg",
    alt: "The computer room",
  },
  {
    name: "Library",
    text: "A library to help children enjoy reading.",
    image: "/images/facilities/library.jpg",
    alt: "The school library",
  },
  {
    name: "Hall",
    text: "A hall for school gatherings and events.",
    image: "/images/facilities/hall.jpg",
    alt: "The school hall",
  },
  {
    name: "Play Area",
    text: "A good play area where children can play and be active.",
    image: "/images/facilities/play-area.jpg",
    alt: "The school play area",
  },
];

function Facilities() {
  return (
    <>
      <PageBanner
        title="Our Facilities"
        subtitle="The spaces where our pupils learn and play."
        image={banners.facilities}
      />

      <section className="section facilities">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Our Learning Spaces</p>
            <h2 className="section-title">Where learning happens</h2>
            <p className="facilities__lead">
              {/* DRAFT: the school must approve this wording */}
              At Seat of Wisdom, children learn in classrooms, laboratories and
              play spaces that support their growth every day.
            </p>
          </div>

          <ul className="facilities__grid">
            {facilities.map((f) => (
              <li className="facility" key={f.name}>
                <img src={f.image} alt={f.alt} className="facility__image" />
                <div className="facility__body">
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Come and see our school for yourself</h2>
          <Link to="/contact" className="btn-light">
            Contact the School
          </Link>
        </div>
      </section>
    </>
  );
}

export default Facilities;
