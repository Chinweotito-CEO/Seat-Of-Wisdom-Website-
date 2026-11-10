import LevelPage from "../../components/LevelPage.jsx";
import banners from "../../data/Banner.js";

const data = {
  title: "Secondary Education",
  subtitle: "Preparing students to grow academically, morally and socially.",
  banner: banners.secondary,
  eyebrow: "Secondary",
  heading: "Guiding students toward their next step",
  paragraphs: [
    // DRAFT: the school must approve this wording
    "Secondary students are guided to grow academically, morally and socially as they prepare for the next stage of their education.",
    "[Placeholder: examinations, guidance or student support, only once the school confirms them.]",
  ],
  photo: "/images/academics/secondary.jpg",
  photoAlt: "Secondary students in a lesson",
  pathwayTitle: "Junior and Senior Secondary",
  groups: [
    {
      title: "Junior Secondary School",
      classes: [
        { name: "JSS 1", age: "10-11" },
        { name: "JSS 2", age: "11-12" },
        { name: "JSS 3", age: "12-13" },
      ],
    },
    {
      title: "Senior Secondary School",
      classes: [
        { name: "SSS 1", age: "13-14" },
        { name: "SSS 2", age: "14-15" },
        { name: "SSS 3", age: "15-16" },
      ],
    },
  ],
  areasTitle: "Secondary Learning Areas",
  // DRAFT: from planning notes. No departments (Science, Arts, Commercial)
  // are listed because the school hasn't confirmed them.
  areas: [
    "Mathematics",
    "English language",
    "Science and practical learning",
    "Digital literacy",
    "Financial literacy",
    "National values",
    "Emotional intelligence",
    "Prevocational learning",
    "Cultural and creative education",
  ],
  galleryTitle: "Secondary School Life",
  gallery: [
    { image: "/images/academics/secondary-1.jpg", alt: "Students in class" },
    { image: "/images/academics/secondary-2.jpg", alt: "Students at a school event" },
    { image: "/images/academics/secondary-3.jpg", alt: "Students working together" },
  ],
};

function Secondary() {
  return <LevelPage data={data} />;
}

export default Secondary;
