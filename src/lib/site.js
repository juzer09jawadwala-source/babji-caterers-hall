// Central site config — real Babji Caterers details.
export const SITE = {
  name: "Babji Caterers & Hall",
  tagline: "Celebrations, catered with love.",
  location: "Sitafalwadi, Mazgaon, Mumbai 400010",
  addressLines: [
    "Babji Caterers & Hall",
    "Sitafalwadi, Mazgaon",
    "Mumbai 400010, Maharashtra",
  ],

  // Two brothers who run Babji — real numbers.
  owners: [
    { name: "Kasim Vadiwala", role: "Elder brother · Owner", phoneDisplay: "+91 89760 86766", phoneTel: "+918976086766", whatsapp: "918976086766" },
    { name: "Burhan Vadiwala", role: "Younger brother · Owner", phoneDisplay: "+91 96640 74104", phoneTel: "+919664074104", whatsapp: "919664074104" },
  ],
  // Primary contact = elder brother, Kasim.
  phoneDisplay: "+91 89760 86766",
  phoneTel: "+918976086766",
  whatsappNumber: "918976086766",
  email: "hello@babjicaterers.example",
  foundedYear: "1965",
  hours: "Open daily · 10:00 AM – 10:00 PM",

  // Google Maps embed (public, no API key) — Mazgaon, Mumbai area
  mapEmbed:
    "https://www.google.com/maps?q=Sitafalwadi%2C%20Mazgaon%2C%20Mumbai%20400010&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Sitafalwadi%2C%20Mazgaon%2C%20Mumbai%20400010",

  // Owner-provided brand logo (gold wordmark + emblem on dark green rays)
  brandLogo:
    "/images/logo.jpg",

  heroVideo:
    "/videos/hero.mp4",
  interviewVideo:
    "/videos/interview.mp4",
  hallVideo:
    "/videos/hall.mp4",
};

// Real signature dishes from Babji Caterers (owner-provided photos).
// Order: Chicken Rollet first (Babji's #1 sold-out favourite).
export const SIGNATURE_DISHES = [
  {
    src: "/images/rollet.jpg",
    name: "Chicken Rollet",
    tag: "Sold Out Regularly",
    blurb: "Hand-rolled chicken, seared to a golden crust and plated on crisp greens — the dish guests always come back for.",
  },
  {
    src: "/images/fish.jpg",
    name: "Tandoori Fried Fish",
    tag: "House Special",
    blurb: "Whole fish, tandoor-charred and hand-spiced. Served with mint & lime — a Babji signature since 1965.",
  },
  {
    src: "/images/sizzler.jpg",
    name: "Sizzler in Pink Cream",
    tag: "Guest Favourite",
    blurb: "House-recipe pink cream sizzler — a showstopper we plate at almost every celebration.",
  },
];

export const FOOD_GALLERY = [
  { src: "/images/fish.jpg", alt: "Babji Special Tandoori Fried Fish" },
  { src: "/images/rollet.jpg", alt: "Chicken rollet on fresh salad" },
  { src: "/images/sizzler.jpg", alt: "Pink cream sizzler by Babji" },
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=70", alt: "Aromatic biryani platter" },
  { src: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?auto=format&fit=crop&w=900&q=70", alt: "Indian thaal spread with breads and curries" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=70", alt: "Grilled tandoori spread" },
];

// Hall gallery — real owner-provided photos only (video is used in the hero background).
export const HALL_GALLERY = [
  { type: "image", src: "/images/crowded.jpg", alt: "Babji hall during a full-house dinner service" },
  { type: "image", src: "/images/hall_12.jpg", alt: "Hall interior set with royal blue carpet" },
  { type: "image", src: "/images/thaal.jpg", alt: "Community thaal gathering at Babji Hall" },
];

export const HIGHLIGHTS = [
  { src: "/images/rollet.jpg", alt: "Chicken rollet" },
  { src: "/images/crowded.jpg", alt: "Full house at Babji" },
  { src: "/images/fish.jpg", alt: "Tandoori fried fish" },
  { src: "/images/thaal.jpg", alt: "Community thaal at Babji" },
  { src: "/images/sizzler.jpg", alt: "Pink cream sizzler" },
  { src: "/images/hall_12.jpg", alt: "Empty hall ready for a function" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Babji catered our nikah — every guest is still talking about the biryani. Warm, generous, on time.",
    name: "Fatima R.",
    role: "Wedding · Mumbai",
  },
  {
    quote:
      "We booked the hall for our mehendi and used their catering. Felt like family, not a vendor.",
    name: "Zainab K.",
    role: "Pre-wedding · Mazgaon",
  },
  {
    quote:
      "Growing up in Sitafalwadi, Babji has fed us at every milestone. Nothing else feels like home.",
    name: "Aliasger P.",
    role: "Family celebration",
  },
];

export const PACKAGES = [
  {
    name: "Classic",
    tagline: "Warm, homely feast for smaller gatherings.",
    priceFrom: "₹—",
    dishes: [
      "2 starters (1 veg · 1 non-veg)",
      "Chicken biryani or mutton pulao",
      "Dal fry & seasonal sabzi",
      "Rotis, salad, chutneys",
      "Kheer or seviyaan",
    ],
    accent: "cream",
  },
  {
    name: "Signature",
    tagline: "Our most-loved menu — the Babji thaal.",
    priceFrom: "₹—",
    dishes: [
      "4 starters (veg + non-veg)",
      "Mutton biryani & butter chicken",
      "Paneer lababdar, mixed dal",
      "Assorted breads, raita, papad",
      "Firni or gulab jamun",
    ],
    accent: "gold",
    featured: true,
  },
  {
    name: "Premium",
    tagline: "A wedding-scale spread with live counters.",
    priceFrom: "₹—",
    dishes: [
      "Welcome mocktails & live chaat",
      "6 starters · 3 mains · biryani",
      "Live tandoor & pasta counter",
      "Assorted breads, curries, sides",
      "Dessert counter with 4 sweets",
    ],
    accent: "maroon",
  },
];

export const EVENT_TAGS = [
  "Weddings",
  "Pre-wedding functions",
  "Family gatherings",
  "Religious & community events",
  "Private parties",
  "Corporate lunches",
];
