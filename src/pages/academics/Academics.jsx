import LevelPage from "../../components/LevelPage.jsx";
import banners from "../../data/Banner.js";

// Photos go in public/academics/
const data = {
  title: "Early Years & Nursery",
  subtitle: "A warm, caring start to learning.",
  banner: banners.earlyYears,
  eyebrow: "Early Years",
  heading: "Where every child's learning journey begins",
  paragraphs: [
    // DRAFT: the school must approve this wording
    "Young learners at Seat of Wisdom Montessori School begin their journey in a warm, caring environment where they are encouraged to explore, discover and grow in confidence.",
    "[Placeholder: the age range, daily routine or learning environment, in the school's approved wording.]",
  ],
  photo: "/images/academics/early-years.jpg",
  photoAlt: "Young children learning with hands-on materials",
  pathwayTitle: "From Sprout to Stepping Stone",
  groups: [
    {
      title: "",
      classes: [
        // CONFIRM the order and the age ranges with the school
        { name: "Sprout 1", age: "2" },
        { name: "Sprout 2", age: "3" },
        { name: "Sprout 3", age: "4" }, // delete this line if Sprout 3 doesn't exist
        { name: "Stepping Stone", age: "5" },
      ],
    },
  ],
  areasTitle: "Early Years Learning Areas",
  // DRAFT: from planning notes. Delete anything the school doesn't confirm.
  areas: [
    "Practical life",
    "Sensorial learning",
    "Language development",
    "Early literacy",
    "Early numeracy",
    "Creative expression",
    "Social and emotional development",
  ],
  galleryTitle: "Early Years Life",
  gallery: [
    { image: "/images/academics/early-1.jpg", alt: "Children at play" },
    {
      image: "/images/academics/early-2.jpg",
      alt: "Children learning with a teacher",
    },
    {
      image: "/images/academics/early-3.jpg",
      alt: "Children in a classroom activity",
    },
  ],
};

function Academics() {
  return <LevelPage data={data} />;
}

export default Academics;
