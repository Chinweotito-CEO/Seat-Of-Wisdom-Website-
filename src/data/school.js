// Details used in more than one place. Change them here only.
export const WHATSAPP_NUMBER = "2348032190058"; // international format, no + or spaces
export const PHONE_DISPLAY = "0803 219 0058";
export const PHONE_LINK = "tel:+2348032190058";
export const ADMISSION_FORM_FEE = "₦5,000";

// CONFIRM this email with the school. I read it from the old website's footer.
export const EMAIL = "seatofwisdom26@gmail.com";

// CONFIRM the school hours. These are placeholders, not real hours.
export const SCHOOL_HOURS = [
  "[Monday to Friday: 8:00 AM to 5:00 PM]",
  "[Saturday: 9:00 AM to 12:00 PM]",
  "[Sunday: closed]",
];
export const BLOG_URL = "https://sow-blog.vercel.app";
export const BLOG_NAME = "The SOW Chronicle";

// CONFIRM names, addresses, phone numbers and spelling with the school.
// mapQuery is what Google Maps searches for. If the pin lands in the wrong place,
// replace it with exact coordinates (see the notes in the instructions).
export const CAMPUSES = [
  {
    name: "Tulip Campus",
    area: "Ologuneru, Ibadan",
    address: "No 3 Eketala Street, Gbopa, Ologuneru, Ibadan",
    mapQuery: "No 3 Eketala Street, Gbopa, Ologuneru, Ibadan, Nigeria",
    lead: "Our main school location ofering Montessori education from Early Years to Secondary School.",
    photo: "/images/home/welcome.jpg",
    photoAlt: "The Tulip Campus of Seat of Wisdom",
    phone: PHONE_DISPLAY,
    phoneLink: PHONE_LINK,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL,
  },
  {
    name: "Alexandrite Campus",
    area: "Eleyele, Ibadan",
    address: "No 18 Okusaga street Oboku Eleyele Ibadan",
    mapQuery: "No 18 Okusaga street Oboku Eleyele Ibadan",
    lead: "Our Eleyele location provides a nurturing and engaging learning environment for our learners.",
    photo: "/images/contact/alexandrite-campus.jpg",
    photoAlt: "The Alexandrite Campus of Seat of Wisdom",
    phone: PHONE_DISPLAY,
    phoneLink: PHONE_LINK,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL,
  },
];

// PASTE the school's official links between the quotes. Empty ones stay hidden.
// Only add accounts that belong to the SCHOOL, not personal accounts.
export const SOCIALS = [
  { label: "Facebook", href: "" },
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
  { label: "YouTube", href: "" },
  { label: "Website", href: "" },
];
