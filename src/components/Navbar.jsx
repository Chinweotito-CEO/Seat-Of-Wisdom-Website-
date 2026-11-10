import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CAMPUSES, PHONE_DISPLAY, PHONE_LINK } from "../data/school.js";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "School Leadership", path: "/about/leadership" },
      { label: "Why Choose Us?", path: "/about/why-choose-us" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    children: [{ label: "Admission Enquiry", path: "/admissions/enquire" }],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Primary", path: "/academics/primary" },
      { label: "Secondary Education", path: "/academics/secondary" },
      {
        label: "Curriculum & Learning Approach",
        path: "/academics/curriculum",
      },
      { label: "Clubs & Extracurricular Activities", path: "/academics/clubs" },
    ],
  },
  { label: "Our Facilities", path: "/facilities" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="utility-bar">
        <div className="utility-bar__inner">
          <ul className="utility-bar__campuses">
            {CAMPUSES.map((c) => (
              <li key={c.name}>
                <strong>{c.name}:</strong> {c.area}
              </li>
            ))}
          </ul>
          <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
        </div>
      </div>
      
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <Link to="/" className="navbar__brand" onClick={closeMenu}>
            <img
              src="/images/logo.jpg"
              alt="Seat of Wisdom logo"
              className="navbar__logo"
            />
            <span className="navbar__name">
              <span className="navbar__name-main">Seat of Wisdom</span>
              <span className="navbar__name-sub">Montessori School</span>
            </span>
          </Link>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isOpen}
            aria-controls="main-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <ul
            id="main-menu"
            className={
              isOpen ? "navbar__links navbar__links--open" : "navbar__links"
            }
          >
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={
                  link.children
                    ? "navbar__item navbar__item--has-sub"
                    : "navbar__item"
                }
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "navbar__link active" : "navbar__link"
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>

                {link.children && (
                  <ul className="navbar__sub">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          className="navbar__sublink"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/admissions/enquire"
            className="btn-apply"
            onClick={closeMenu}
          >
            Enquire Now
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
