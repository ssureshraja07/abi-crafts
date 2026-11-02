import { useEffect, useState } from "react";

import crafts1 from "./images/crafts1.png";
import crafts2 from "./images/crafts2.png";
import crafts3 from "./images/crafts3.png";
import crafts4 from "./images/crafts4.png";
import crafts5 from "./images/crafts5.png";
import crafts6 from "./images/crafts6.png";
import crafts7 from "./images/crafts7.png";
import crafts8 from "./images/crafts8.png";
import crafts9 from "./images/crafts9.png";
import crafts10 from "./images/crafts10.png";
import crafts11 from "./images/crafts11.png";

import crafts from "./images/crafts.png";
import logo from "./images/crafts-logo.png";
import craftsabout from "./images/crafts-about.png";

const IMAGES = [
  crafts1, crafts2, crafts3, crafts4, crafts5, crafts6,
  crafts7, crafts8, crafts9, crafts10, crafts11,
];
const ph = (text, bg = "fbcfe8") =>
  `https://placehold.co/600x600/${bg}/7f1d4d?text=${encodeURIComponent(text)}`;

const LOGO = logo;

const BRAND = {
  name: "AWESOME CRAFTS",
  tagline: "Made by Hand, Crafted with Love",
  phones: ["7339095050", "9791780074"],
};

const PRODUCTS = [
  "Crochet Flower Bouquet",
  "Amigurumi Teddy Bear",
  "Granny Square Cushion",
  "Lace Table Runner",
  "Boho Wall Hanging",
  "Crochet Handbag",
  "Baby Booties Set",
  "Cute Keychain Charms",
  "Round Coaster Set",
  "Plant Hanger",
  "Bunny Toy",
].map((name, i) => ({
  id: i + 1,
  name,
  img: IMAGES[i],
}));

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

const wa = (msg) =>
  `https://wa.me/91${BRAND.phones[0]}?text=${encodeURIComponent(msg)}`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={LOGO}
            alt={`${BRAND.name} logo`}
            className={`rounded-full object-cover shadow transition-all duration-300 ${
              scrolled ? "h-10 w-10" : "h-12 w-12"
            }`}
          />
          <span className="font-serif text-lg font-bold tracking-wide text-rose-800">
            {BRAND.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm font-medium text-rose-900 transition hover:text-pink-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={wa("Hi, I want to order from Awesome Crafts")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-pink-700"
            >
              Order Now
            </a>
          </li>
        </ul>

        <button
          className="rounded-md p-2 text-rose-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 bg-white px-4 pb-4 shadow-lg md:hidden">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 font-medium text-rose-900 hover:bg-pink-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Lightbox({ index, onClose, onChange }) {
  const item = PRODUCTS[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % PRODUCTS.length);
      if (e.key === "ArrowLeft")
        onChange((index - 1 + PRODUCTS.length) % PRODUCTS.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onChange]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-3xl text-white"
        aria-label="Close"
      >
        ✕
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + PRODUCTS.length) % PRODUCTS.length);
        }}
        className="absolute left-3 rounded-full bg-white/20 px-3 py-2 text-2xl text-white hover:bg-white/40 sm:left-6"
        aria-label="Previous"
      >
        ‹
      </button>

      <figure
        className="flex max-h-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img}
          alt={item.name}
          className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center font-semibold text-white">
          {item.name}
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % PRODUCTS.length);
        }}
        className="absolute right-3 rounded-full bg-white/20 px-3 py-2 text-2xl text-white hover:bg-white/40 sm:right-6"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

function Hero() {
  const perks = [
    ["✨", "Handmade with Love"],
    ["🧶", "Unique Designs"],
    ["🎁", "Perfect for Gifting"],
    ["💝", "Custom Orders Available"],
  ];
  return (
    <section
      id="home"
      className="scroll-mt-16 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-pink-600 shadow-sm">
            Handmade with Love ❤️
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-rose-900 sm:text-5xl">
            Beautiful Crochet Creations for Your Beautiful Home
          </h1>
          <p className="mt-4 text-lg font-semibold text-rose-700">
            Welcome to our world of handmade crochet!
          </p>
          <p className="mt-3 max-w-xl text-slate-600">
            Every product is carefully handmade with love, creativity, and
            attention to detail. From beautiful crochet decorations to unique
            handmade gifts, we create special pieces to make your home and
            celebrations more beautiful.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {perks.map(([icon, text]) => (
              <li
                key={text}
                className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-rose-900 shadow-sm"
              >
                <span className="text-lg">{icon}</span>
                {text}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif text-xl italic text-rose-800">
            Make Your Moments Special with Handmade Crochet!
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-pink-700"
            >
              Explore Our Collection
            </a>
            <a
              href={wa("Hi, I want to order from Awesome Crafts")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-pink-600 px-6 py-3 font-semibold text-pink-700 transition hover:-translate-y-0.5 hover:bg-pink-600 hover:text-white"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rotate-3 rounded-3xl bg-pink-200" />
          <img
            src={crafts}
            alt="Handmade crochet"
            className="relative aspect-square w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img
          src={craftsabout}
          alt="Our story"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <h2 className="font-serif text-3xl font-bold text-rose-900">
            Our Story 🧶
          </h2>
          <p className="mt-2 text-lg font-semibold text-pink-600">
            Every stitch tells a story!
          </p>
          <div className="mt-4 space-y-3 text-slate-600">
            <p>
              Our crochet business was started with a passion for creating
              beautiful handmade products. We believe that handmade creations
              have a special charm that mass-produced products cannot replace.
            </p>
            <p>
              Each piece is thoughtfully crafted with patience, creativity, and
              love.
            </p>
            <p>
              Our mission is to bring happiness to our customers through unique
              crochet products that add beauty, warmth, and personality to every
              home.
            </p>
            <p>
              When you buy from us, you are not just buying a product. You are
              supporting creativity, craftsmanship, and a small handmade
              business.
            </p>
          </div>
          <p className="mt-5 font-serif text-xl italic text-rose-800">
            Thank you for supporting handmade! ❤️
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [active, setActive] = useState(null); // index or null

  return (
    <section id="products" className="scroll-mt-16 bg-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-rose-900">
            Our Products
          </h2>
          <p className="mt-2 text-slate-600">
            Handmade crochet pieces, made just for you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <button
                onClick={() => setActive(i)}
                className="block aspect-square w-full cursor-zoom-in overflow-hidden"
                aria-label={`View ${p.name}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </button>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-rose-900 sm:text-base">
                  {p.name}
                </h3>
                <a
                  href={wa(`Hi, I want to order: ${p.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-700 transition hover:bg-pink-600 hover:text-white"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </section>
  );
}
function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-gradient-to-br from-amber-50 via-white to-pink-100 py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        {/* Left: image (no bg) */}
        <div className="flex justify-center">
          <img
            src={crafts}
            alt="Handmade crochet"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right: contact details */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-rose-900">
            Contact Us
          </h2>
          <p className="mt-2 text-slate-600">
            Custom orders, gifting, or any doubts. Call or WhatsApp us anytime!
          </p>

          <ul className="mt-6 space-y-4">
            {BRAND.phones.map((n) => (
              <li key={n}>
                <a
                  href={`tel:+91${n}`}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-2xl">
                    📞
                  </span>
                  <span>
                    <span className="block text-xl font-bold text-rose-900">
                      {n}
                    </span>
                    <span className="text-sm text-slate-500">Tap to call</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={wa("Hi, I want to order from Awesome Crafts")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/", // <- un page link podu
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/", // <- un page link podu
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/91${BRAND.phones[0]}`,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
];
function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1: About company */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO}
              alt={`${BRAND.name} logo`}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-serif text-lg font-bold tracking-wide text-white">
              {BRAND.name}
            </span>
          </div>
          <p className="mt-3 text-sm italic text-rose-200">{BRAND.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-rose-200">
            We create beautiful handmade crochet products with patience,
            creativity, and love, to add warmth and personality to your home
            and celebrations.
          </p>
        </div>

        {/* 2: Quick links */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-rose-200 transition hover:pl-1 hover:text-white"
                >
                  → {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3: Contact details */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {BRAND.phones.map((n) => (
              <li key={n}>
                <a
                  href={`tel:+91${n}`}
                  className="flex items-center gap-2 text-rose-200 transition hover:text-white"
                >
                  <span>📞</span> {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4: Social links */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-white">
            Follow Us
          </h3>
          <p className="mt-4 text-sm text-rose-200">
            Stay connected for new designs and updates.
          </p>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-800 text-rose-100 transition hover:-translate-y-1 hover:bg-pink-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rose-800 py-4 text-center text-xs text-rose-300">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.title = `${BRAND.name} | ${BRAND.tagline}`;
  }, []);

  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
      
        <Contact />
      </main>
      <Footer />
    </div>
  );
}