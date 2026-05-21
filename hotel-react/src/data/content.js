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
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    description:
      'A cosy single-bedroom house with its own bathroom and a private sit-out opening to the mountains — ideal for couples or solo travellers.',
    guests: 3,
    beds: '1 Queen Bed',
    size: 36,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Mountain View',
    features: ['Private sit-out', 'Mountain view', 'Flat-screen TV', 'Work desk', 'Dining table', 'Wardrobe'],
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Cottage',
    layout: '2 BHK Villa',
    category: 'double',
    price: 7000,
    count: 3,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    description:
      'A two-bedroom cottage with two attached bathrooms, a common hall, and a sit-out — panoramic mountain views and space for the whole family.',
    guests: 5,
    beds: '2 Queen Beds',
    size: 67,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Panoramic View',
    features: ['2 attached bathrooms', 'Common hall', 'Private sit-out', 'Seating & dining area', 'Flat-screen TV', 'Writing desk'],
  },
  {
    id: 'grand-family-villa',
    name: 'Grand Family Villa',
    layout: '3 BHK',
    category: 'triple',
    price: 12000,
    count: 1,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    description:
      'Our largest stay — three bedrooms, three attached bathrooms, a common hall, and a dedicated dining area. Built for large families seeking a unified getaway.',
    guests: 6,
    beds: '3 Queen Beds',
    size: 100,
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Mountain & Garden',
    features: ['3 attached bathrooms', 'Common hall', 'Indoor dining area', 'Flat-screen TV', 'Premium privacy', 'Garden access'],
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Open-air, natural backdrop',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80',
  },
  {
    title: 'Stargazing Skies',
    subtitle: 'Far from light pollution',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1000&q=80',
  },
];

// TODO: no real guest reviews provided yet — these are illustrative placeholders.
export const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote:
      'Such a peaceful stay. We woke up to mist over the mountains every morning, and the night sky was unbelievable — more stars than I have ever seen.',
    author: 'Priya Menon',
    location: 'Bengaluru, India',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote:
      'A short walk to the Bhagamandala temple, the pool to ourselves, and total silence. Exactly the disconnect we needed from the city.',
    author: 'Rohan Kapoor',
    location: 'Mumbai, India',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote:
      'Spacious villa, warm hosts, and the most private setting in Coorg. The whole family had room to spread out and relax.',
    author: 'Anne Laurent',
    location: 'Lyon, France',
  },
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
    name: 'Caretaker — TBC',
    role: 'Property & Grounds',
  },
];

export const homeAmenities = [
  { icon: 'fas fa-mountain', title: 'Mountain Views<br />from Every Room' },
  { icon: 'fas fa-mug-hot', title: 'Breakfast Included<br />8 – 10 AM' },
  { icon: 'fas fa-person-swimming', title: 'Open-Air<br />Swimming Pool' },
  { icon: 'fas fa-star', title: 'Clear Skies<br />for Stargazing' },
];

export const roomAmenities = [
  { icon: 'fas fa-mountain', title: 'Mountain<br />Views' },
  { icon: 'fas fa-tv', title: 'Flat-Screen TV<br />&amp; Wardrobe' },
  { icon: 'fas fa-bath', title: 'Private Bathroom<br />&amp; Toiletries' },
  { icon: 'fas fa-utensils', title: 'Dining Area<br />&amp; Work Desk' },
];

export const faqItems = [
  {
    title: 'How do I book a stay?',
    content:
      'Booking is quick over WhatsApp. Message us on +91 90695 55522 with your dates and group size, and we will confirm availability and the best package for you.',
  },
  {
    title: 'What are your check-in and check-out times?',
    content:
      'Check-in is from 2:00 PM and check-out is by 12:00 PM. Early check-in or late check-out can be arranged subject to availability — just let our front desk know in advance.',
  },
  {
    title: 'Is breakfast included?',
    content:
      'Yes — a complimentary breakfast is included with every package, served between 8:00 and 10:00 AM. Room service and on-site dining are available for other meals.',
  },
  {
    title: 'Are pets allowed?',
    content:
      'Unfortunately, pets are strictly not allowed at the property.',
  },
  {
    title: 'Is parking available?',
    content:
      'Yes — secure, free private parking is available on site. Drive right in, and our team will help with luggage on arrival.',
  },
  {
    title: 'How do I reach the resort?',
    content:
      'We are on the Bhagamandala–Talacauvery Road, about 23.7 km from Madikeri town centre and 106 km from Kannur International Airport. Bengaluru airport is the larger, more frequent option further away.',
  },
];

export const features = [
  {
    icon: 'fas fa-mountain',
    title: 'Mist-Covered Peaks',
    description:
      'Wake to sweeping views of Coorg\'s legendary mist-covered mountains, visible directly from your room.',
  },
  {
    icon: 'fas fa-star',
    title: 'Dark-Sky Stargazing',
    description:
      'Far from city light pollution, the night sky here is exceptionally clear — a quiet paradise for stargazers.',
  },
  {
    icon: 'fas fa-leaf',
    title: 'Serenity & Privacy',
    description:
      'Nine private houses spread across the grounds, designed for travellers who want to switch off and soak in pure silence.',
  },
];
