# Himani Heritage React

Vite + React + Tailwind conversion of the static 4-page hotel website.

## Setup

```bash
cd hotel-react
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder is a static site you can deploy anywhere (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Project structure

```
hotel-react/
├── index.html              Vite entry HTML (loads fonts + Font Awesome from CDN)
├── package.json
├── vite.config.js
├── tailwind.config.js      Custom theme: colors, fonts, shadows, keyframes
├── postcss.config.js
└── src/
    ├── main.jsx            React + Router bootstrap
    ├── App.jsx             Route definitions
    ├── index.css           Tailwind directives + base styles + reveal utilities
    ├── context/
    │   └── VideoModalContext.jsx
    ├── hooks/
    │   ├── useScrollReveal.js     IntersectionObserver-based fade/slide-in
    │   ├── useScrollPosition.js   rAF-throttled scrollY for parallax
    │   └── useCounter.js          Counts up when element enters viewport
    ├── components/
    │   ├── Layout.jsx             Wraps every route with chrome + providers
    │   ├── TopBar.jsx             Dark top strip with utility links
    │   ├── Navbar.jsx             Sticky nav, scroll-state, mobile menu
    │   ├── Footer.jsx
    │   ├── BackToTop.jsx
    │   ├── VideoModal.jsx
    │   ├── PageBanner.jsx         Inner-page hero (About/Rooms/Contact)
    │   ├── Hero.jsx               Home hero w/ parallax + zoom
    │   ├── BookingForm.jsx
    │   ├── ParallaxCTA.jsx
    │   ├── Subtitle.jsx
    │   ├── Accordion.jsx
    │   ├── Counter.jsx
    │   ├── TestimonialSlider.jsx
    │   ├── AmenityCard.jsx
    │   ├── RoomCard.jsx
    │   ├── BlogCard.jsx
    │   ├── FeatureCard.jsx
    │   └── TeamCard.jsx
    ├── data/
    │   └── content.js             Rooms, testimonials, blog posts, team, FAQ
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Rooms.jsx               Includes category filter
        └── Contact.jsx             Form + OpenStreetMap embed + FAQ
```

## How the static-version effects map to React

| Static                              | React equivalent                              |
| ----------------------------------- | --------------------------------------------- |
| `main.js` IntersectionObserver      | `useScrollReveal` hook re-run on route change |
| `main.js` counter animate           | `useCounter` hook + ref                       |
| `main.js` accordion toggle          | `Accordion` component with local state        |
| `main.js` testimonial auto-advance  | `TestimonialSlider` + `useEffect` interval    |
| `main.js` video modal               | `VideoModalContext` + portal-style component  |
| `main.js` navbar scroll state       | `useEffect` listener inside `Navbar.jsx`      |
| `main.js` back-to-top visibility    | `useEffect` listener inside `BackToTop.jsx`   |
| `main.js` hero parallax             | `useScrollPosition` + inline transform        |
| `main.js` mobile menu toggle        | `useState` inside `Navbar.jsx`                |
| `main.js` smooth anchor scroll      | Router handles route nav; anchors use CSS smooth scroll |
| `style.css` color/font vars         | `tailwind.config.js` theme extension          |
| `style.css` keyframes               | `tailwind.config.js` keyframes + animations   |
| `style.css` `.reveal` classes       | Kept in `index.css` (used by `useScrollReveal`) |

## Notes

- Images come from Unsplash via CDN URLs (matches the static version).
- Fonts (Nunito, Nunito Sans) and Font Awesome are loaded from CDN in `index.html`.
- No image optimization, code splitting, or SSR — this mirrors the static site. Add Next.js if you need any of those.
- The form submits do `e.preventDefault()` only — wire up your API/handler when ready.
