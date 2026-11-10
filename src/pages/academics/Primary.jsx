import LevelPage from "../../components/LevelPage.jsx";
import banners from "../../data/Banner.js";

const data = {
  title: "Primary School",
  subtitle: "Building strong foundations in learning and character.",
  banner: banners.primary,
  eyebrow: "Primary",
  heading: "Confident, curious and responsible learners",
  paragraphs: [
    // DRAFT: the school must approve this wording
    "In Primary School, pupils build strong foundations in reading, writing and mathematics while developing character and confidence.",
    "[Placeholder: how pupils are supported and how progress is shared with parents.]",
  ],
  photo: "/images/academics/primary.jpg",
  photoAlt: "Primary pupils working together in class",
  pathwayTitle: "Our Primary Classes",
  groups: [
    {
      title: "",
      classes: [
        // The school has no Grade 5. Do not add one and do not renumber Grade 6.
        { name: "Grade 1", age: "6" },
        { name: "Grade 2", age: "7" },
        { name: "Grade 3", age: "8" },
        { name: "Grade 4", age: "9" },
        { name: "Grade 6", age: "10" },
      ],
    },
  ],
  areasTitle: "Primary Learning Areas",
  // DRAFT: from planning notes. Delete anything the school doesn't confirm.
  areas: [
    "English language and literacy",
    "Mathematics and numeracy",
    "Science and practical learning",
    "Digital literacy",
    "Financial literacy",
    "National values",
    "Emotional intelligence",
    "Creative and cultural arts",
    "Prevocational learning",
  ],
  galleryTitle: "Primary School Life",
  gallery: [
    { image: "/images/academics/primary-1.jpg", alt: "Pupils in a lesson" },
    {
      image: "/images/academics/primary-2.jpg",
      alt: "Pupils taking part in an activity",
    },
    { image: "/images/academics/primary-3.jpg", alt: "Pupils with their teacher" },
  ],
};

function Primary() {
  return <LevelPage data={data} />;
}

export default Primary;
