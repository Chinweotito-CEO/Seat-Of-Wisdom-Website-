import { Link } from "react-router-dom";
import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";
import { admissionLevels } from "../../data/admissionClasses.js";
import {
  ADMISSION_FORM_FEE,
  PHONE_DISPLAY,
  PHONE_LINK,
} from "../../data/school.js";

// The school confirmed these details. Confirm the ORDER of steps 2 and 3.
const steps = [
  {
    title: "Send an enquiry",
    text: "Tell us which class you are interested in using the enquiry form. The school will get back to you.",
  },
  {
    title: "Visit the school",
    text: `Come to the school to collect and fill in the admission form. The form fee is ${ADMISSION_FORM_FEE}.`,
  },
  {
    title: "Bring your documents",
    text: "Bring your child's birth certificate and two passport photographs. The school takes care of everything else.",
  },
];

const toBring = [
  "Your child's birth certificate",
  "Two passport photographs",
  `The admission form fee: ${ADMISSION_FORM_FEE}`,
];

const faqs = [
  {
    q: "Which classes are open for admission?",
    a: "All classes are open for admission.",
  },
  {
    q: "What age should my child be?",
    a: "Each class has an age requirement, listed beside the class above.",
  },
  {
    q: "Do I have to come to the school?",
    a: "Yes. The admission form is collected and filled in at the school. The online enquiry just helps the school get back to you.",
  },
  {
    q: "What do I need to bring?",
    a: "Your child's birth certificate, two passport photographs, and the admission form fee.",
  },
  {
    q: "How much is the admission form?",
    a: `The admission form fee is ${ADMISSION_FORM_FEE}.`,
  },
  {
    q: "How much are the school fees?",
    a: "School fees are shared directly by the school. Please contact us and we will be happy to help.",
  },
];

function Admission() {
  return (
    <>
      <PageBanner
        title="Admissions"
        subtitle="Welcome to the Seat of Wisdom family."
        image={banners.admissions}
      />

      {/* ---------- Admission process ---------- */}
      <section className="section admit-steps">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Admission Process</p>
            <h2 className="section-title">Three simple steps</h2>
          </div>

          <ol className="pathway" style={{ "--steps": steps.length }}>
            {steps.map((step, i) => (
              <li className="step" key={step.title}>
                <span className="step__name">Step {i + 1}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="admit-action">
            <Link to="/admissions/enquire" className="btn-apply">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Classes open, with ages ---------- */}
      <section className="section open-classes">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Classes Open for Admission</p>
            <h2 className="section-title">Begin Your Child's Admission</h2>
            <p className="open-classes__lead">
              All classes are open. Choose your child's class to send an
              enquiry.
            </p>
          </div>

          {admissionLevels.map((group) => (
            <div className="apply-group" key={group.level}>
              <h3 className="apply-group__title">{group.level}</h3>
              <ul className="apply-list">
                {group.classes.map((c) => (
                  <li className="apply-row" key={c.name}>
                    <span className="apply-row__name">{c.name}</span>
                    <span className="apply-row__age">{c.age}</span>
                    <Link
                      to={`/admissions/enquire?class=${encodeURIComponent(c.name)}`}
                      className="btn-apply"
                      aria-label={`Enquire about ${c.name}`}
                    >
                      Enquire Now
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- What to bring, and fees ---------- */}
      <section className="section bring">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Before You Come</p>
            <h2 className="section-title">What to bring</h2>
          </div>

          <ul className="bring__list">
            {toBring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="bring__note">
            <p>
              School fees are shared directly by the school. Get in touch and we
              will gladly guide you.
            </p>
            <Link to="/contact" className="btn-apply">
              Contact the School
            </Link>
            <p className="bring__call">
              Prefer to call? <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section faq-section">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Good to Know</p>
            <h2 className="section-title">Admission FAQs</h2>
          </div>

          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;
