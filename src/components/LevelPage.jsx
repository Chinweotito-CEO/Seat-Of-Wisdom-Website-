import { Link } from "react-router-dom";
import PageBanner from "./PageBanner.jsx";

function Pathway({ classes }) {
  return (
    <ol className="pathway" style={{ "--steps": classes.length }}>
      {classes.map((c) => (
        <li className="step" key={c.name}>
          <span className="step__name">{c.name}</span>
          <span className="step__age">{c.age}</span>
        </li>
      ))}
    </ol>
  );
}

function LevelPage({ data }) {
  return (
    <>
      <PageBanner
        title={data.title}
        subtitle={data.subtitle}
        image={data.banner}
      />

      <section className="section story">
        <div className="container story__grid">
          <div className="story__text">
            <p className="eyebrow">{data.eyebrow}</p>
            <h2 className="section-title">{data.heading}</h2>
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <img src={data.photo} alt={data.photoAlt} className="story__image" />
        </div>
      </section>

      <section className="section pathway-section">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Our Classes</p>
            <h2 className="section-title">{data.pathwayTitle}</h2>
          </div>

          {data.groups.map((group, i) => (
            <div className="pathway-group" key={i}>
              {group.title && (
                <h3 className="pathway-group__title">{group.title}</h3>
              )}
              <Pathway classes={group.classes} />
            </div>
          ))}
        </div>
      </section>

      <section className="section areas">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">What Children Learn</p>
            <h2 className="section-title">{data.areasTitle}</h2>
          </div>
          <ul className="chips">
            {data.areas.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      {data.gallery && data.gallery.length > 0 && (
        <section className="section gallery-section">
          <div className="container">
            <div className="center-head">
              <p className="eyebrow">In Pictures</p>
              <h2 className="section-title">{data.galleryTitle}</h2>
            </div>
            <div className="gallery">
              {data.gallery.map((g, i) => (
                <img key={i} src={g.image} alt={g.alt} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Ready to join the Seat of Wisdom family?</h2>
          <Link to="/admissions" className="btn-light">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default LevelPage;
