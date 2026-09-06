// ============================================================
// Himani Heritage Resorts — site content
// Bhagamandala–Talacauvery Road, Madikeri, Coorg, Karnataka
//
// Data sources:
//   • CLIENT  = confirmed by the resort owner (authoritative)
//   • LISTING = drafted from the Google/Gemini description (verify before launch)
// TODO markers flag anything still unconfirmed.
// ============================================================

const WHATSAPP_NUMBER = '919069555522'; // CLIENT: booking number 9069555522 (+91)
const WHATSAPP_MESSAGE = "Hi Himani Heritage, I'd like to enquire about a booking.";

export const brand = {
  name: 'Himani Heritage',
  namePrefix: 'Himani',
  nameSuffix: 'Heritage',
  fullName: 'Himani Heritage Resorts',
  legalName: 'Himani Heritage Resorts',
  formerName: 'Camp Nishani Holidays',

  // CLIENT: booking goes to WhatsApp
  phone: '+91 90695 55522',
  phoneRaw: '9069555522',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,

  // TODO: client did not provide an email — confirm before using
  email: 'info@himaniheritage.com',

  // LISTING: Bhagamandala–Talacauvery Road, Madikeri, Coorg
  addressLine: 'Bhagamandala–Talacauvery Road',
  addressLine2: 'Madikeri, Coorg, Karnataka',
  fullAddress: 'Bhagamandala–Talacauvery Road, Madikeri, Coorg, Karnataka',

  tagline: 'Escape the pollution. Embrace pure nature.',
  shortDesc:
    'A tranquil mountain sanctuary in Bhagamandala, Coorg — nine private houses set among mist-covered peaks, clear night skies, and pure Western Ghats silence.',
};

// Helper to build a WhatsApp link with a room-specific message
export function whatsappFor(roomName) {
  const msg = roomName
    ? `Hi Himani Heritage, I'd like to book the ${roomName}. Please share availability.`
    : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Real resort images, served locally from /public/images/.
export const resortImages = {
  hero: '/images/hero.webp',
  welcome: '/images/welcome.webp',
  aboutBanner: '/images/ambiance.webp',
};

// CLIENT: 9 houses across 3 types. Prices are per night.
// TODO: replace Unsplash placeholders with real room photos.
export const rooms = [
  {
    id: 'deluxe-queen',
    name: 'Deluxe Queen Room',
    layout: '1 BHK',
    category: 'queen',
    price: 4000,
    count: 5,
    image: '/images/rooms/DeluxeQueenRoom.jpeg',
    description:
      'A cosy single-bedroom house with its own bathroom and a private sit-out opening to the mountains — ideal for couples or solo travellers.',
    guests: '2',
    beds: '1 Queen Bed',
    size: 36,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Mountain View',
    extraBed: +1,
    charges: 850,

    features: ['Private sit-out', 'Mountain view', 'Flat-screen TV', 'Work desk', 'Dining table', 'Wardrobe', 'GST included'],
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Cottage',
    layout: '2 BHK Villa',
    category: 'double',
    price: 7000,
    count: 3,
    image: '/images/rooms/DeluxeDoubleCottage.jpeg',
    description:
      'A two-bedroom cottage with two attached bathrooms, a common hall, and a sit-out — panoramic mountain views and space for the whole family.',
    guests: '4',
    beds: '2 Queen Beds',
    size: 67,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Panoramic View',
    extraBed: +2,
    charges: 1700,
    features: ['2 attached bathrooms', 'Common hall', 'Private sit-out', 'Seating & dining area', 'Flat-screen TV', 'Writing desk', 'GST included'],
  },
  {
    id: 'grand-family-villa',
    name: 'Grand Family Villa',
    layout: '3 BHK',
    category: 'triple',
    price: 12000,
    count: 1,
    image: '/images/rooms/GrandFamilyVilla.jpeg',
    description:
      'Our largest stay — three bedrooms, three attached bathrooms, a common hall, and a dedicated dining area. Built for large families seeking a unified getaway.',
    guests: '6',
    beds: '3 Queen Beds',
    size: 100,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Mountain & Garden',
    extraBed: +3,
    charges: 2550,
    features: ['3 attached bathrooms', 'Common hall', 'Indoor dining area', 'Flat-screen TV', 'Premium privacy', 'Garden access', 'GST included'],
  },
];

// CLIENT: package & pricing extras
export const packageInfo = {
  extraBed: 850,
  breakfast: 'Complimentary breakfast included with every package, served 8:00 – 10:00 AM.',
  totalHouses: 9,
};

// Experiences shown as image cards in the "Experiences" section.
// TODO: swap to real on-property photos when available.
export const experiences = [
  {
    title: 'Mountain Views',
    subtitle: 'From every room',
    image: './images/experience1.webp',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Open-air, natural backdrop',
    image: './images/experiance_pool.webp',
  },
  {
    title: 'Stargazing Skies',
    subtitle: 'Far from light pollution',
    image: './images/experiance3.jpg',
  },
];

// "Blog" cards repurposed as Explore Coorg / nearby attractions
export const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    tag: 'Sacred',
    date: '100 m away',
    title: 'Triveni Sangama — the confluence at our doorstep',
    excerpt:
      'The meeting of the Kaveri, Kanika, and the mythical Sujyothi rivers — a short walk from the resort and a quiet spot at sunrise.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    tag: 'Day Trip',
    date: '41 km',
    title: 'Abbi Falls — a hidden cascade in the hills',
    excerpt:
      'A short drive, then a gentle walk through coffee estates to one of Coorg\'s most beautiful waterfalls. Best in monsoon.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
    tag: 'Heritage',
    date: '35 km',
    title: 'Madikeri Fort — history with a view',
    excerpt:
      'Once the seat of the Kodava kings, today a small museum and chapel atop the hill town of Madikeri. Pair with Raja Seat at sunset.',
  },
];

// TODO: replace with real team photos & names
export const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    name: 'Manager — TBC',
    role: 'Resort Manager',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    name: 'Chef — TBC',
    role: 'Head Cook',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    name: 'Guest Relations — TBC',
    role: 'Front Desk',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    name: 'Guide — TBC',
    role: 'Plantation Walks',
  },
];

export const homeAmenities = [
  { icon: 'fas fa-bed', title: 'Heritage Rooms<br />with a View' },
  { icon: 'fas fa-coffee', title: 'Complimentary<br />Coorgi Breakfast' },
  { icon: 'fas fa-swimming-pool', title: 'Swimming Pool<br />&amp; Garden' },
  { icon: 'fas fa-fire', title: 'Evening Bonfire<br />&amp; Open Sky' },
];

export const roomAmenities = [
  { icon: 'fas fa-tv', title: 'Television<br />&amp; Wardrobe' },
  { icon: 'fas fa-coffee', title: 'Coffee Tray<br />on Arrival' },
  { icon: 'fas fa-bath', title: 'Private Bathroom<br />&amp; Toiletries' },
  { icon: 'fas fa-utensils', title: 'Dining Area<br />&amp; Work Desk' },
];

// "Explore Coorg" cards — real nearby attractions.
// TODO: replace Unsplash placeholders with real photos of each site.
export const attractions = [
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    tag: 'Sacred',
    date: 'Nearby',
    title: 'Triveni Sangama & Bhagamandala Temple',
    excerpt:
      'The confluence of three rivers and the revered Sree Bhagandeshwara Temple — a short trip from the resort along the Bhagamandala road.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80',
    tag: 'Pilgrimage',
    date: 'A short drive',
    title: 'Talakaveri — the birthplace of the Kaveri',
    excerpt:
      'The sacred origin of the River Kaveri, set high on Brahmagiri hill with sweeping views of the Western Ghats. Worth an early start.',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    tag: 'Day Trip',
    date: '~41 km',
    title: 'Abbey Falls — a cascade in the hills',
    excerpt:
      'A scenic drive toward Madikeri leads to one of Coorg\'s most loved waterfalls, framed by coffee and spice estates. Best in the monsoon.',
  },
];

export const spaAccordion = [
  {
    title: 'Plantation Walks & Coffee Tasting',
    content:
      'Stroll the surrounding coffee, cardamom, and pepper estates with a local guide, then sample a fresh-brewed cup straight from the bean.',
  },
  {
    title: 'Sunrise Yoga in the Garden',
    content:
      'Begin the day with gentle yoga on our garden lawn as the mist lifts from the surrounding hills — instructor available on request.',
  },
  {
    title: 'Traditional Ayurvedic Massage',
    content:
      'Restorative Ayurvedic treatments using traditional Kerala-style oils and techniques, arranged in-room on advance request.',
  },
];

export const faqItems = [
  {
    title: 'What are your check-in and check-out times?',
    content:
      'Check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in or late check-out can be arranged subject to availability — just let our front desk know in advance.',
  },
  {
    title: 'How do I reach Himani Heritage from the nearest airport?',
    content:
      'Kannur International Airport is the closest, roughly 106 km away. Bengaluru\'s Kempegowda Airport is a longer but more frequent option. We\'re happy to arrange a private cab — let us know in advance.',
  },
  {
    title: 'Is parking available?',
    content:
      'Yes — free private parking is available on site for all guests. Drive in, and our team will help with luggage on arrival.',
  },
  {
    title: 'What is the cancellation policy?',
    // TODO: confirm exact cancellation policy with management
    content:
      'Cancellation policies vary by season and the rate selected at booking. Please refer to your confirmation email or contact our front desk for specifics.',
  }, 
  {
    title: 'What\'s the best time of year to visit Coorg?',
    content:
      'October through March is most popular — cool, dry, and clear. The monsoon (June–September) is dramatic and green if you don\'t mind a little rain, and the waterfalls are at their best.',
  },
];

export const features = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Sacred Setting',
    description:
      'Just 100 metres from the holy Triveni Sangama and surrounded by working coffee estates — a location that\'s hard to match.',
  },
  {
    icon: 'fas fa-leaf',
    title: 'Boutique & Personal',
    description:
      'Only eight rooms means we know your name, your preferences, and what kind of coffee you take in the morning.',
  },
  {
    icon: 'fas fa-concierge-bell',
    title: 'Coorgi Hospitality',
    description:
      'Home-cooked regional food, local guides for plantation walks, and a 24-hour front desk that genuinely looks after you.',
  },
];

// ============================================================
// "Explore Around Us" — nearby attractions grouped by route.
// Distances are approximate from Himani Heritage, Bhagamandala.
// Colours map to the section's brand palette
//   gold (#8B6914 / bg #F5F0E8) = Madikeri side
//   forest (#3A6B3A / bg #EEF4EE) = Kushalnagar side
// ============================================================
export const nearbyAttractions = [
  {
    route: 'Madikeri',
    distance: '~24 km',
    color: '#8B6914',
    bg: '#F5F0E8',
    spots: [
      {
        name: 'Glass Bridge Madikeri',
        img: '/images/about/glassbridge.jpg',
        desc: 'A stunning glass-floored bridge offering panoramic views of the misty Coorg valleys.',
      },
      {
        name: 'Mandalpatti Jeep Safari',
        img: '/images/about/jeepsafari.jpg',
        desc: 'Thrilling off-road jeep rides to the peaks of Mandalpatti with breathtaking hill-top vistas.',
      },
      {
        name: 'Abbey Waterfall',
        img: '/images/about/waterfalls.jpg',
        desc: 'A majestic cascade nestled in lush coffee and spice plantations, perfect for nature walks.',
      },
      {
        name: 'Raja Seat Musical Fountain',
        img: '/images/about/rajaseat.webp',
        desc: 'The iconic royal viewpoint with colourful musical fountains and sweeping sunset panoramas.',
      },
      {
        name: 'Shri Omkareshwara Temple',
        img: '/images/about/omkareshwaratemple.jpg',
        desc: 'A centuries-old temple blending Islamic and Gothic architecture, serenely set by a sacred pond.',
      },
    ],
  },
  {
    route: 'Kushalnagar',
    distance: '~55 km',
    color: '#3A6B3A',
    bg: '#EEF4EE',
    spots: [
      {
        name: 'Harangi Dam & FWR',
        img: '/images/about/harangidam.jpeg',
        desc: 'A scenic reservoir surrounded by forest, ideal for birdwatching and peaceful picnics.',
      },
      {
        name: 'Dubare Elephant Camp',
        img: '/images/about/dubareelephant.webp',
        desc: 'Get up close with rescued elephants — bathe, feed, and walk alongside these gentle giants.',
      },
      {
        name: 'Nisargadhama',
        img: '/images/about/nisargadhama.jpg',
        desc: 'A tranquil island eco-park with bamboo groves, deer, and rope bridges over the Cauvery.',
      },
      {
        name: 'Golden Temple, Kushalnagar',
        img: '/images/about/goldentemple.jpg',
        desc: 'The stunning Namdroling Monastery — a Tibetan Buddhist masterpiece radiating gold and colour.',
      },
    ],
  },
];

// ============================================================
// About-page "What We Do" stats — progress bars.
// Values are percentages (0–100). Keep at least one varied number so
// the bars look meaningful side-by-side.
// ============================================================
export const whatWeDoStats = [
  { label: 'Houses with mountain views',   value: 100, color: '#8B6914' },
  { label: 'Free private parking on-site', value: 100, color: '#3A6B3A' },
  { label: 'Guest rating (8.8 / 10)',      value: 88,  color: '#8B6914' },
];

// ============================================================
// About-page Amenities — 7 cards with SVG icons.
// `iconKey` maps to the matching SVG component in About.jsx (see
// AMENITY_ICONS registry). Colour pairs alternate gold ↔ forest.
// ============================================================
export const aboutAmenities = [
  {
    iconKey: 'bed',
    color: '#F5F0E8', iconColor: '#8B6914',
    tag: 'Rooms', tagBg: '#F5F0E8', tagText: '#6B4F0F',
    title: 'Comfortable Rooms',
    desc: 'Eight well-appointed rooms with desk, wardrobe, flat-screen TV, and mountain views.',
  },
  {
    iconKey: 'shower',
    color: '#EEF4EE', iconColor: '#3A6B3A',
    tag: 'Bathrooms', tagBg: '#EEF4EE', tagText: '#2D5A2D',
    title: 'Private Bathrooms',
    desc: 'En-suite bathroom with hot shower and complimentary toiletries in every room.',
  },
  {
    iconKey: 'campfire',
    color: '#EEF4EE', iconColor: '#3A6B3A',
    tag: 'Campfire', tagBg: '#EEF4EE', tagText: '#2D5A2D',
    title: 'Campfire Nights',
    desc: 'Gather around a crackling fire after dark — share stories, sip hot coffee, and watch the stars.',
  },

  {
    iconKey: 'food',
    color: '#EEF4EE', iconColor: '#3A6B3A',
    tag: 'Dining', tagBg: '#EEF4EE', tagText: '#2D5A2D',
    title: 'Room Service',
    desc: 'In-room dining available so you can enjoy a meal without stepping out.',
  },
  {
    iconKey: 'clock',
    color: '#F5F0E8', iconColor: '#8B6914',
    tag: 'Support', tagBg: '#F5F0E8', tagText: '#6B4F0F',
    title: '24-Hour Front Desk',
    desc: 'Our team is always on hand — day or night — for any request or assistance.',
  },
  {
    iconKey: 'leaf',
    color: '#EEF4EE', iconColor: '#3A6B3A',
    tag: 'Outdoors', tagBg: '#EEF4EE', tagText: '#2D5A2D',
    title: 'Garden & Grounds',
    desc: 'Quiet garden surroundings for an evening stroll or a slow morning outdoors.',
  },
];
