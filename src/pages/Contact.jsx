import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import banners from "../data/Banner.js";
import {
  CAMPUSES,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_NUMBER,
  SCHOOL_HOURS,
} from "../data/school.js";

function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We would love to hear from you. Get in touch for admissions, enquiries or any other information."
        image={banners.contact}
      />

      {/* ---------- Quick ways to reach us ---------- */}
      <section className="contact-quick">
        <div className="container">
          <ul className="quick">
            <li>
              <a href={PHONE_LINK} className="quick__item">
                <span className="icon-circle">
                  <Phone size={22} aria-hidden="true" />
                </span>
                <span>
                  <strong className="quick__title">Call Us</strong>
                  <span className="quick__text">
                    For enquiries and admission information. {PHONE_DISPLAY}
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="quick__item"
              >
                <span className="icon-circle icon-circle--green">
                  <MessageCircle size={22} aria-hidden="true" />
                </span>
                <span>
                  <strong className="quick__title">WhatsApp</strong>
                  <span className="quick__text">
                    Chat with us for quick enquiries.
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a href={`mailto:${EMAIL}`} className="quick__item">
                <span className="icon-circle">
                  <Mail size={22} aria-hidden="true" />
                </span>
                <span>
                  <strong className="quick__title">Email</strong>
                  <span className="quick__text">
                    Send us an email and we will get back to you.
                  </span>
                </span>
              </a>
            </li>

            <li>
              <div className="quick__item">
                <span className="icon-circle">
                  <Clock size={22} aria-hidden="true" />
                </span>
                <span>
                  <strong className="quick__title">School Hours</strong>
                  {SCHOOL_HOURS.map((line) => (
                    <span className="quick__text" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- The two campuses ---------- */}
      <section className="section campuses">
        <div className="container campuses__grid">
          {CAMPUSES.map((c) => {
            const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`;
            const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapQuery)}`;

            return (
              <article className="campus" key={c.name}>
                <img src={c.photo} alt={c.photoAlt} className="campus__photo" />
                <p className="eyebrow">{c.name}</p>
                <h2 className="campus__area">{c.area}</h2>
                <p className="campus__lead">{c.lead}</p>

                <div className="campus__info">
                  <ul className="details">
                    <li>
                      <span className="icon-circle icon-circle--sm">
                        <MapPin size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>Address</strong>
                        <span>{c.address}</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon-circle icon-circle--sm">
                        <Phone size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>Phone</strong>
                        <a href={c.phoneLink}>{c.phone}</a>
                      </div>
                    </li>
                    <li>
                      <span className="icon-circle icon-circle--sm icon-circle--green">
                        <MessageCircle size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>WhatsApp</strong>
                        <a
                          href={`https://wa.me/${c.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {c.phone}
                        </a>
                      </div>
                    </li>
                    <li>
                      <span className="icon-circle icon-circle--sm">
                        <Mail size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <strong>Email</strong>
                        <a href={`mailto:${c.email}`}>{c.email}</a>
                      </div>
                    </li>
                  </ul>

                  <div className="map">
                    <iframe
                      title={`Map showing the ${c.name}`}
                      src={mapEmbed}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <a
                      className="map__link"
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Contact;
