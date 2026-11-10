import { Link } from "react-router-dom";
import {
  CAMPUSES,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_NUMBER,
  SOCIALS,
} from "../data/school.js";

const schoolLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact" },
];

const learnLinks = [
  { label: "Admissions", path: "/admissions" },
  { label: "Academics", path: "/academics" },
  { label: "Our Facilities", path: "/facilities" },
];

function Footer() {
  const visibleSocials = SOCIALS.filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-badge">
            <img src="/images/logo.jpg" alt="Seat of Wisdom logo" />
          </div>
          <p className="footer__name">Seat of Wisdom Montessori School</p>
          <p className="footer__about">
            A nurturing learning community in Ibadan, shaping confident learners
            academically, morally and socially.
          </p>
        </div>

        <nav className="footer__col" aria-label="School links">
          <h2 className="footer__heading">Our School</h2>
          <ul>
            {schoolLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Admissions and academics">
          <h2 className="footer__heading">Admissions & Learning</h2>
          <ul>
            {learnLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Contact Us</h2>
          <address className="footer__address">
            {CAMPUSES.map((c) => (
              <p key={c.name}>
                <strong>{c.name}</strong>
                <br />
                {c.address}
              </p>
            ))}
            <p>
              <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </address>
        </div>
      </div>

      {visibleSocials.length > 0 && (
        <div className="footer__follow">
          <div className="container">
            <h2 className="footer__heading">Follow us</h2>
            <ul className="footer__socials">
              {visibleSocials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Seat of Wisdom Montessori School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
