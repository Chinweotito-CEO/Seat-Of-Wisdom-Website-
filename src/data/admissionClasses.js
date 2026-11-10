// One list of classes, used by the Admissions page AND the enquiry form.
// The school has no Grade 5: don't add one and don't renumber Grade 6.
export const admissionLevels = [
  {
    level: "Early Years & Nursery",
    classes: [
      { name: "Sprout 1", age: "Age 2" },
      { name: "Sprout 2", age: "Age 3" },
      { name: "Sprout 3", age: "Age 4" },
      { name: "Stepping Stone", age: "Age 5" },
    ],
  },
  {
    level: "Primary School",
    classes: [
      { name: "Grade 1", age: "Age 6" },
      { name: "Grade 2", age: "Age 7" },
      { name: "Grade 3", age: "Age 8" },
      { name: "Grade 4", age: "Age 9" },
      { name: "Grade 6", age: "Age 10" },
    ],
  },
  {
    level: "Junior Secondary School",
    classes: [
      { name: "JSS 1", age: "Age 10 to 11" },
      { name: "JSS 2", age: "Age 11 to 12" },
      { name: "JSS 3", age: "Age 12 to 13" },
    ],
  },
  {
    level: "Senior Secondary School",
    classes: [
      { name: "SSS 1", age: "Age 13 to 14" },
      { name: "SSS 2", age: "Age 14 to 15" },
      { name: "SSS 3", age: "Age 15 to 16" },
    ],
  },
];
