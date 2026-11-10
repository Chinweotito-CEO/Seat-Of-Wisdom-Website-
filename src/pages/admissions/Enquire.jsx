import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../../components/PageBanner.jsx";
import banners from "../../data/Banner.js";
import { admissionLevels } from "../../data/admissionClasses.js";
import {
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  PHONE_LINK,
    CAMPUSES,
  ADMISSION_FORM_FEE,
} from "../../data/school.js";

const emptyForm = {
  campus: "",
  className: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  religion: "",
  address: "",
  city: "",
  state: "",
  prevSchool: "",
  qualification: "",
  remarks: "",
  guardianName: "",
  relation: "",
  guardianAddress: "",
  guardianCity: "",
  guardianState: "",
};

// Same required fields as the school's old form.
function validate(v, sameAddress) {
  const required = {
    campus: "Please choose a campus.",
    className: "Please choose a class.",
    firstName: "Please enter the child's first name.",
    lastName: "Please enter the child's last name.",
    gender: "Please choose a gender.",
    dob: "Please enter the child's date of birth.",
    address: "Please enter the child's present address.",
    city: "Please enter a city.",
    state: "Please enter a state.",
    guardianName: "Please enter the guardian's name.",
    relation: "Please enter the relationship to the child.",
  };
  if (!sameAddress) {
    required.guardianAddress = "Please enter the guardian's address.";
    required.guardianCity = "Please enter the guardian's city.";
    required.guardianState = "Please enter the guardian's state.";
  }
  const e = {};
  Object.keys(required).forEach((key) => {
    if (!String(v[key]).trim()) e[key] = required[key];
  });
  return e;
}

function buildWhatsAppLink(v, guardian, today) {
  const lines = [
    "Good day. I would like to begin an admission for my child at Seat of Wisdom Montessori School.",
    "",
    "ACADEMIC DETAILS",
    `Campus: ${v.campus}`,
    `Class: ${v.className}`,
    `Date: ${today}`,
    "",
    "STUDENT DETAILS",
    `Name: ${v.firstName.trim()} ${v.lastName.trim()}`,
    `Gender: ${v.gender}`,
    `Date of birth: ${v.dob}`,
  ];
  if (v.religion.trim()) lines.push(`Religion: ${v.religion.trim()}`);
  lines.push(
    `Address: ${v.address.trim()}, ${v.city.trim()}, ${v.state.trim()}`,
  );

  if (v.prevSchool.trim() || v.qualification.trim() || v.remarks.trim()) {
    lines.push("", "PREVIOUS SCHOOL");
    if (v.prevSchool.trim()) lines.push(`School: ${v.prevSchool.trim()}`);
    if (v.qualification.trim())
      lines.push(`Qualification: ${v.qualification.trim()}`);
    if (v.remarks.trim()) lines.push(`Remarks: ${v.remarks.trim()}`);
  }

  lines.push(
    "",
    "GUARDIAN DETAILS",
    `Name: ${v.guardianName.trim()}`,
    `Relationship: ${v.relation.trim()}`,
    `Address: ${guardian.address.trim()}, ${guardian.city.trim()}, ${guardian.state.trim()}`,
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function Enquire() {
  const [params] = useSearchParams();
  const requested = params.get("class");
  const allClasses = admissionLevels.flatMap((l) =>
    l.classes.map((c) => c.name),
  );

  const [values, setValues] = useState({
    ...emptyForm,
    className: allClasses.includes(requested) ? requested : "",
  });
  const [sameAddress, setSameAddress] = useState(false);
  const [errors, setErrors] = useState({});
  const [whatsAppLink, setWhatsAppLink] = useState("");

  const today = new Date().toLocaleDateString("en-GB");
  const maxDate = new Date().toISOString().split("T")[0];

  const guardian = sameAddress
    ? { address: values.address, city: values.city, state: values.state }
    : {
        address: values.guardianAddress,
        city: values.guardianCity,
        state: values.guardianState,
      };

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setWhatsAppLink("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values, sameAddress);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setWhatsAppLink("");
      return;
    }
    const link = buildWhatsAppLink(values, guardian, today);
    setWhatsAppLink(link);
    const win = window.open(link, "_blank");
    if (win) win.opener = null;
  }

  const describe = (id) => (errors[id] ? `${id}-error` : undefined);

  // Builds one text box so the form below stays short and readable
  const text = (id, label, extra = {}) => (
    <Field id={id} label={label} error={errors[id]}>
      <input
        id={id}
        name={id}
        type={extra.type || "text"}
        autoComplete={extra.autoComplete}
        max={extra.max}
        maxLength={extra.type === "date" ? undefined : 120}
        value={extra.value ?? values[id]}
        onChange={handleChange}
        disabled={extra.disabled}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={describe(id)}
      />
    </Field>
  );

  return (
    <>
      <PageBanner
        title="Online Admission Form"
        subtitle="Fill in your child's details and send them to the school on WhatsApp."
        image={banners.apply}
      />

      <section className="section apply-section">
        <div className="container">
          {whatsAppLink && (
            <p className="form-note form-note--info" role="status">
              WhatsApp should now be opening with your details ready. Please
              press <strong>send</strong> there to complete this step. If it did
              not open,{" "}
              <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
                tap here to open WhatsApp
              </a>
              .
            </p>
          )}

          <form
            className="apply-form apply-form--wide"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* ---------- Academic details ---------- */}
            <fieldset className="form-section">
              <legend>Academic Details</legend>
              <div className="form-row">
                <Field id="campus" label="Campus" error={errors.campus}>
                  <select
                    id="campus"
                    name="campus"
                    value={values.campus}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.campus)}
                    aria-describedby={describe("campus")}
                  >
                    <option value="">Choose a campus</option>
                    {CAMPUSES.map((c) => (
                      <option value={c.name} key={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </Field>
                
                <Field id="className" label="Class" error={errors.className}>
                  <select
                    id="className"
                    name="className"
                    value={values.className}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.className)}
                    aria-describedby={describe("className")}
                  >
                    <option value="">Choose a class</option>
                    {admissionLevels.map((group) => (
                      <optgroup label={group.level} key={group.level}>
                        {group.classes.map((c) => (
                          <option value={c.name} key={c.name}>
                            {c.name} ({c.age})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="today" label="Date">
                <input id="today" type="text" value={today} readOnly />
              </Field>
            </fieldset>

            {/* ---------- Student details ---------- */}
            <fieldset className="form-section">
              <legend>Student Details</legend>
              <div className="form-row form-row--3">
                {text("firstName", "First name")}
                {text("lastName", "Last name")}
                <Field id="gender" label="Gender" error={errors.gender}>
                  <select
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.gender)}
                    aria-describedby={describe("gender")}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Field>
              </div>

              <div className="form-row">
                {text("dob", "Date of birth", { type: "date", max: maxDate })}
                {text("religion", "Religion (optional)")}
              </div>

              <Field
                id="address"
                label="Present address"
                error={errors.address}
              >
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  maxLength={200}
                  value={values.address}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.address)}
                  aria-describedby={describe("address")}
                />
              </Field>

              <div className="form-row">
                {text("city", "City")}
                {text("state", "State")}
              </div>
            </fieldset>

            {/* ---------- Previous school ---------- */}
            <fieldset className="form-section">
              <legend>Previous School Details</legend>
              <p className="form-hint">
                Leave this section blank if your child has not been to school
                before.
              </p>
              <div className="form-row">
                {text("prevSchool", "School name")}
                {text("qualification", "Qualification")}
              </div>
              <Field id="remarks" label="Remarks">
                <textarea
                  id="remarks"
                  name="remarks"
                  rows="3"
                  maxLength={300}
                  value={values.remarks}
                  onChange={handleChange}
                />
              </Field>
            </fieldset>

            {/* ---------- Guardian details ---------- */}
            <fieldset className="form-section">
              <legend>Guardian Details</legend>
              <div className="form-row">
                {text("guardianName", "Guardian's name", {
                  autoComplete: "name",
                })}
                {text("relation", "Relationship to the child")}
              </div>

              <label className="consent">
                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(e) => {
                    setSameAddress(e.target.checked);
                    setWhatsAppLink("");
                  }}
                />
                <span>Same address as the child</span>
              </label>

              <Field
                id="guardianAddress"
                label="Guardian's address"
                error={errors.guardianAddress}
              >
                <textarea
                  id="guardianAddress"
                  name="guardianAddress"
                  rows="2"
                  maxLength={200}
                  value={sameAddress ? values.address : values.guardianAddress}
                  onChange={handleChange}
                  disabled={sameAddress}
                  aria-invalid={Boolean(errors.guardianAddress)}
                  aria-describedby={describe("guardianAddress")}
                />
              </Field>

              <div className="form-row">
                {text("guardianCity", "Guardian's city", {
                  value: sameAddress ? values.city : values.guardianCity,
                  disabled: sameAddress,
                })}
                {text("guardianState", "Guardian's state", {
                  value: sameAddress ? values.state : values.guardianState,
                  disabled: sameAddress,
                })}
              </div>
            </fieldset>

            {/* ---------- Documents (brought to the school) ---------- */}
            <fieldset className="form-section">
              <legend>Documents</legend>
              <div className="docs-note">
                <p>
                  Documents are not uploaded on this website. Please bring these
                  to the school:
                </p>
                <ul>
                  <li>Your child's birth certificate</li>
                  <li>Two passport photographs</li>
                  <li>The admission form fee: {ADMISSION_FORM_FEE}</li>
                </ul>
              </div>
            </fieldset>

            <p className="privacy">
              This website does not store your details. They are only sent when
              you press send in WhatsApp, and you can read the message before
              you send it.
            </p>

            <button type="submit" className="btn-apply">
              Send on WhatsApp
            </button>
          </form>

          <p className="apply-section__call">
            Prefer to call? <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          </p>
          <p className="apply-section__back">
            <Link to="/admissions" className="section-link">
              ← Back to Admissions
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Enquire;
