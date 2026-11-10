import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";

// DRAFT text: the school must approve it. Photos reuse your School Life images.
const reasons = [
  {
    title: "Caring, Qualified Teachers",
    text: "Teachers who know each child and support their growth.",
    image: "/images/about/why-choose-us1.jpg",
    alt: "A teacher helping young children with a learning activity",
  },
  {
    title: "A Strong Moral Foundation",
    text: "Character and discipline taught alongside academics.",
    image: "/images/about/why-choose-us2.jpg",
    alt: "Pupils taking part in a school event",
  },
  {
    title: "Learning Beyond the Classroom",
    text: "Music, culture and celebrations that build confidence.",
    image: "/images/about/why-choose-us3.jpg",
    alt: "Pupils celebrating Teachers' Day",
  },
  {
    title: "A Safe, Friendly Environment",
    text: "A place where every child feels welcome and secure.",
    image: "/images/about/why-choose-us4.jpg",
    alt: "Pupils in traditional attire",
  },
];

function WhyChooseUs() {
  return (
    <>
      <PageBanner
        title="Why Choose Us?"
        subtitle="What makes Seat of Wisdom a great place to learn."
        image={banners.whyChooseUs}
      />

      <section className="section why">
        <div className="container">
          {reasons.map((r) => (
            <div className="why-row" key={r.title}>
              <img src={r.image} alt={r.alt} className="why-row__image" />
              <div className="why-row__text">
                <h2>{r.title}</h2>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
