// ============================================================
// Himani Heritage Resorts — site content
// Bhagamandala, Coorg, Karnataka
// TODO markers indicate placeholder fields awaiting confirmation
// ============================================================

export const brand = {
  name: 'Himani Heritage',
  namePrefix: 'Himani',
  nameSuffix: 'Heritage',
  fullName: 'Himani Heritage Resorts',
  legalName: 'Himani Heritage Resorts',
  formerName: 'Camp Nishani Holidays',
  // TODO: confirm exact phone, email, full street address
  phone: '+91 XXXXX XXXXX',
  email: 'info@himaniheritage.com',
  addressLine: 'Bhagamandala',
  addressLine2: 'Coorg, Karnataka 571247',
  fullAddress: 'Bhagamandala, Coorg, Karnataka 571247',
  shortDesc:
    'An eight-room heritage retreat in Bhagamandala, Coorg — where the mist of the Western Ghats meets warm Coorgi hospitality.',
};

// Real resort images, served locally from /public/images/.
// Vite serves files in /public at the root path.
export const resortImages = {
  hero: '/images/hero.webp',
  welcome: '/images/welcome.webp',
  aboutBanner: '/images/ambiance.webp',
};

export const rooms = [
  {
    id: 'queen-garden',
    name: 'Deluxe Queen — Garden',
    category: 'queen',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    description:
      'A warm, light-filled room opening onto the resort garden. Best for two who want a quiet morning with a view of the trees.',
    guests: 2,
    beds: '1 Queen Bed',
    viewIcon: 'fas fa-leaf',
    viewLabel: 'Garden View',
  },
  {
    id: 'queen-mountain',
    name: 'Deluxe Queen — Mountain',
    category: 'queen',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    description:
      'A cosy retreat opening to the hills — perfect for couples chasing sunrise mist and afternoon coffee on the verandah.',
    guests: 2,
    beds: '1 Queen Bed',
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Hill View',
  },
  {
    id: 'double-garden',
    name: 'Deluxe Double — Garden',
    category: 'double',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    description:
      'Two comfortable beds and easy access to the garden. Well-suited to friends, small families, or anyone who likes morning light.',
    guests: 4,
    beds: '2 Beds',
    viewIcon: 'fas fa-leaf',
    viewLabel: 'Garden View',
  },
  {
    id: 'double-mountain',
    name: 'Deluxe Double — Mountain',
    category: 'double',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    description:
      'Two beds and a window that frames the Western Ghats. Lovely for travellers who want hill views and a slow start to the day.',
    guests: 4,
    beds: '2 Beds',
    viewIcon: 'fas fa-mountain',
    viewLabel: 'Hill View',
  },
  {
    id: 'triple-family',
    name: 'Deluxe Triple — Family',
    category: 'triple',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    description:
      'Our largest room: three beds, plenty of room for the children, and easy access to the garden, pool, and bonfire pit.',
    guests: 6,
    beds: '3 Beds',
    viewIcon: 'fas fa-vector-square',
    viewLabel: 'Spacious',
  },
  {
    id: 'triple-cottage',
    name: 'Deluxe Triple — Garden Cottage',
    category: 'triple',
    price: 5800,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description:
      'Three beds in a cottage-style layout opening directly to the garden — the most private room on the property.',
    guests: 6,
    beds: '3 Beds',
    viewIcon: 'fas fa-leaf',
    viewLabel: 'Garden Cottage',
  },
];

export const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote:
      'Such a peaceful stay. The staff felt like family, the coffee was unforgettable, and the view from our room each morning was straight out of a postcard.',
    author: 'Priya Menon',
    location: 'Bengaluru, India',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote:
      'The walk to Triveni Sangama in the morning, then home-cooked Pandi curry for lunch. A short stay we keep going back to.',
    author: 'Rohan Kapoor',
    location: 'Mumbai, India',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote:
      'Quiet, lovely, and run with such care. The bonfire evenings under the stars were the highlight of our Coorg trip.',
    author: 'Anne Laurent',
    location: 'Lyon, France',
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
