import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "../../assets/css/premium.css";
import musicFile from "../../assets/music/icarus inttumental.mpeg";
// ─────────────────────────────────────────────
//  CONFIG – customize data here for each project
// ─────────────────────────────────────────────
export const CONFIG = {
  guestName: "Dear Guest",

  groom: {
    fullName: "Marcus Leonardo Hartmann",
    nickname: "Marcus",
    parents: "Son of Mr. Michael Hartmann & Mrs. Victoria Hartmann",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  bride: {
    fullName: "Sophie Catherine Anderson",
    nickname: "Sophie",
    parents: "Daughter of Mr. James Thompson & Mrs. Margaret Thompson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },

  akad: {
    date: "Saturday, 12 April 2025",
    time: "14.00 – 16.00 GMT",
    venue: "St. Paul's Cathedral",
    address: "St. Paul's Churchyard, London EC4M 8AD, United Kingdom",
  },
  resepsi: {
    date: "Saturday, 12 April 2025",
    time: "17.30 – 22.00 GMT",
    venue: "The Savoy Hotel",
    address: "The Strand, London WC2R 0EU, United Kingdom",
  },

  // Target countdown
  weddingDateTime: "2026-06-15T14:00:00",

  // Google Calendar link (otomatis)
  calendarTitle: "Pernikahan Marcus & Sophie",
  calendarStart: "20260615T130000Z",
  calendarEnd: "20260615T160000Z",

  // Google Maps embed (St. Paul's Cathedral, London)
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5256895346305!2d-0.09852432346870197!3d51.51366877107861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd809%3A0xb78f2474b9410c0!2sSt%20Paul%27s%20Cathedral!5e0!3m2!1sen!2suk!4v1609459200000!5m2!1sen!2suk",
  mapDirectionUrl: "https://maps.google.com/?q=St+Paul's+Cathedral+London",

  // YouTube Live (public video as placeholder)
  streamEmbedId: "jfKfPfyJRdk",

  // Music (royalty-free from SoundHelix)
  musicUrl: musicFile,
  musicTitle: "Wedding Strings Melody",

  // RSVP via WhatsApp
  waNumber: "447123456789",

  // Wedding Gift
  bank: {
    name: "Bank BCA",
    number: "1234 5678 90",
    holder: "Marcus Leonardo Hartmann",
  },
  giftAddress: "St. Paul's Cathedral, St. Paul's Churchyard, London EC4M 8AD, United Kingdom",

  // Dress Code
  dressCode: {
    theme: "Dusty Rose & Sage Green",
    note: "Please avoid white and black colors",
    colors: [
      { name: "Dusty Rose", hex: "#C8A0A0" },
      { name: "Sage Green", hex: "#8AAA8A" },
      { name: "Champagne", hex: "#E8D5B0" },
      { name: "Ivory", hex: "#F5F0E8" },
    ],
  },

  // Love Story
  loveStory: [
    {
      year: "2019",
      title: "First Meeting",
      icon: "✦",
      desc: "We first met at a campus seminar. One glance that we will never forget.",
    },
    {
      year: "2020",
      title: "Growing Close",
      icon: "✦",
      desc: "Meeting after meeting brought us closer, understanding each other more deeply.",
    },
    {
      year: "2022",
      title: "Engagement",
      icon: "💍",
      desc: "By the lakeside at sunset, Marcus bravely proposed to Sophie with all his heart.",
    },
    {
      year: "2026",
      title: "Wedding",
      icon: "💒",
      desc: "We will unite before God and family to begin a new life filled with blessings.",
    },
  ],

  // Gallery – max 14 fotos
  photos: [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", alt: "Photo 1" },
    { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80", alt: "Photo 2" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", alt: "Photo 3" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", alt: "Photo 4" },
    { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80", alt: "Photo 5" },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", alt: "Photo 6" },
    { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80", alt: "Photo 7" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", alt: "Photo 8" },
    { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80", alt: "Photo 9" },
    { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80", alt: "Photo 10" },
    { src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80", alt: "Photo 11" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80", alt: "Photo 12" },
    { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80", alt: "Photo 13" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80", alt: "Photo 14" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80", alt: "Photo 15" },
  ],

  // Together With
  turut: [
    "Hartmann Family",
    "Thompson Family",
    "Cempaka Putih Community Association",
    "Christian University Alumni Network",
  ],
};

// ─────────────────────────────────────────────
//  CUSTOM HOOKS
// ─────────────────────────────────────────────
function useCountdown(targetDateStr) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date(targetDateStr).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTimeLeft({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDateStr]);
  return timeLeft;
}

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─────────────────────────────────────────────
//  SMALL REUSABLE COMPONENTS
// ─────────────────────────────────────────────
function SectionHeader({ label, title, light = false }) {
  return (
    <div className="section-header">
      <p className={`section-label ${light ? "light" : ""}`}>{label}</p>
      <h2 className={`section-title ${light ? "light" : ""}`}>{title}</h2>
      <div className={`section-divider ${light ? "light" : ""}`} />
    </div>
  );
}

function RevealBox({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-box ${visible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
//  COVER  (full-screen door sebelum dibuka)
// ─────────────────────────────────────────────
function Cover({ onOpen, guestName }) {
  const [closing, setClosing] = useState(false);
  const handleOpen = () => {
    setClosing(true);
    setTimeout(onOpen, 800);
  };
  return (
    <div className={`cover ${closing ? "cover--closing" : ""}`}>
      <div className="cover__bg" />
      <div className="cover__overlay" />
      <div className="cover__content">
        <p className="cover__bismillah">With God's Blessing and Grace</p>
        <p className="cover__label">Wedding Invitation</p>
        <div className="cover__ornament">❧</div>
        <h1 className="cover__names">
          {CONFIG.groom.nickname}
          <span className="cover__ampersand">&amp;</span>
          {CONFIG.bride.nickname}
        </h1>
        <p className="cover__date">{CONFIG.resepsi.date}</p>
        <div className="cover__guest-box">
          <p className="cover__guest-label">Dear</p>
          <p className="cover__guest-name">{guestName}</p>
        </div>
        <button className="cover__btn" onClick={handleOpen}>
          <span>✉</span> Open Invitation
        </button>
      </div>
      <div className="cover__footer">Premium Wedding Invitation</div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
          alt="Hero"
          className="hero__bg-img"
        />
        <div className="hero__gradient" />
      </div>
      <div className="hero__content">
        <p className="hero__label">Soli Deo Gloria</p>
        <h1 className="hero__title">
          {CONFIG.groom.nickname}
          <em className="hero__amp"> &amp; </em>
          {CONFIG.bride.nickname}
        </h1>
        <div className="hero__date-badge">
          <span>{CONFIG.resepsi.date}</span>
        </div>
        <p className="hero__quote">
          "Therefore a man shall leave his father and mother and hold fast to his wife, and they shall become one flesh."
          <br />
          <em>— Genesis 2:24</em>
        </p>
        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          <p>Scroll</p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  COUPLE
// ─────────────────────────────────────────────
function Couple() {
  return (
    <section className="section couple-section">
      <RevealBox>
        <SectionHeader label="Couple" title="Two Hearts, One Love" />
      </RevealBox>

      <div className="couple__connector">
        <div className="couple__line" />
        <div className="couple__heart">♥</div>
        <div className="couple__line" />
      </div>

      {[CONFIG.groom, CONFIG.bride].map((p, i) => (
        <RevealBox key={i} delay={i * 150} className="couple__card">
          <div className="couple__photo-wrap">
            <img src={p.photo} alt={p.nickname} className="couple__photo" />
            <div className="couple__photo-ring" />
          </div>
          <p className="couple__role">{i === 0 ? "Groom" : "Bride"}</p>
          <h3 className="couple__name">{p.fullName}</h3>
          <p className="couple__parents">{p.parents}</p>
        </RevealBox>
      ))}
    </section>
  );
}

// ─────────────────────────────────────────────
//  COUNTDOWN + CALENDAR
// ─────────────────────────────────────────────
function Countdown() {
  const time = useCountdown(CONFIG.weddingDateTime);
  const pad = (n) => String(n).padStart(2, "0");
  const units = [
    { val: pad(time.d), label: "Days" },
    { val: pad(time.h), label: "Hours" },
    { val: pad(time.m), label: "Minutes" },
    { val: pad(time.s), label: "Seconds" },
  ];
  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    CONFIG.calendarTitle
  )}&dates=${CONFIG.calendarStart}/${CONFIG.calendarEnd}&details=${encodeURIComponent(
    `Ceremony: ${CONFIG.akad.time} — ${CONFIG.akad.venue}\nReception: ${CONFIG.resepsi.time} — ${CONFIG.resepsi.venue}`
  )}&location=${encodeURIComponent(CONFIG.resepsi.address)}`;

  return (
    <section className="section countdown-section">
      <RevealBox>
        <SectionHeader label="Countdown" title="Save the Date" light />
      </RevealBox>

      <RevealBox delay={100} className="countdown__grid">
        {units.map((u, i) => (
          <div className="countdown__item" key={i}>
            <span className="countdown__val">{u.val}</span>
            <span className="countdown__label">{u.label}</span>
          </div>
        ))}
      </RevealBox>

      <RevealBox delay={200} className="countdown__actions">
        <a href={calUrl} target="_blank" rel="noreferrer" className="btn btn--gold">
          📅 Save to Calendar
        </a>
      </RevealBox>
    </section>
  );
}

// ─────────────────────────────────────────────
//  EVENTS  (Pemberkatan & Resepsi + Map)
// ─────────────────────────────────────────────
function Events() {
  const events = [
    { label: "Pemberkatan Pernikahan", ...CONFIG.akad },
    { label: "Resepsi Pernikahan", ...CONFIG.resepsi },
  ];
  return (
    <section className="section events-section">
      <RevealBox>
        <SectionHeader label="Events" title="Time & Place" />
      </RevealBox>

      {events.map((ev, i) => (
        <RevealBox key={i} delay={i * 150} className="event__card">
          <div className="event__icon">{i === 0 ? "⛪" : "🥂"}</div>
          <div className="event__info">
            <p className="event__type">{ev.label}</p>
            <h3 className="event__venue">{ev.venue}</h3>
            <p className="event__date">{ev.date}</p>
            <p className="event__time">{ev.time}</p>
            <p className="event__address">{ev.address}</p>
          </div>
        </RevealBox>
      ))}

      <RevealBox delay={300} className="events__map-wrap">
        <iframe
          title="Venue Location"
          src={CONFIG.mapEmbedUrl}
          className="events__map"
          loading="lazy"
          allowFullScreen
        />
        <a
          href={CONFIG.mapDirectionUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline events__map-btn"
        >
          🗺 Directions
        </a>
      </RevealBox>
    </section>
  );
}

// ─────────────────────────────────────────────
//  LOVE STORY
// ─────────────────────────────────────────────
function LoveStory() {
  return (
    <section className="section lovestory-section">
      <RevealBox>
        <SectionHeader label="Our Story" title="Love Story" light />
      </RevealBox>

      <div className="lovestory__timeline">
        {CONFIG.loveStory.map((s, i) => (
          <RevealBox key={i} delay={i * 120} className={`lovestory__item ${i % 2 === 0 ? "left" : "right"}`}>
            <div className="lovestory__dot">{s.icon}</div>
            <div className="lovestory__card">
              <span className="lovestory__year">{s.year}</span>
              <h4 className="lovestory__title">{s.title}</h4>
              <p className="lovestory__desc">{s.desc}</p>
            </div>
          </RevealBox>
        ))}
        <div className="lovestory__axis" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  GALLERY
// ─────────────────────────────────────────────
function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="section gallery-section">
      <RevealBox>
        <SectionHeader label="Gallery" title="Our Moments" />
      </RevealBox>

      <div className="gallery__grid">
        {CONFIG.photos.map((p, i) => (
          <RevealBox
            key={i}
            delay={(i % 4) * 80}
            className={`gallery__item ${i === 0 || i === 5 || i === 10 ? "gallery__item--wide" : ""}`}
            onClick={() => setLightbox(p.src)}
          >
            <img src={p.src} alt={p.alt} className="gallery__img" loading="lazy" />
            <div className="gallery__overlay">
              <span>⊕</span>
            </div>
          </RevealBox>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close">✕</button>
          <img src={lightbox} alt="Preview" className="lightbox__img" />
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────
//  DRESS CODE
// ─────────────────────────────────────────────
function DressCode() {
  return (
    <section className="section dresscode-section">
      <RevealBox>
        <SectionHeader label="Dress Code" title="What to Wear" />
      </RevealBox>

      <RevealBox delay={100} className="dresscode__card">
        <p className="dresscode__theme">{CONFIG.dressCode.theme}</p>
        <p className="dresscode__note">{CONFIG.dressCode.note}</p>
        <div className="dresscode__swatches">
          {CONFIG.dressCode.colors.map((c, i) => (
            <div key={i} className="dresscode__swatch-item">
              <div className="dresscode__swatch" style={{ background: c.hex }} />
              <span className="dresscode__swatch-name">{c.name}</span>
            </div>
          ))}
        </div>
      </RevealBox>
    </section>
  );
}

// ─────────────────────────────────────────────
//  LIVE STREAMING
// ─────────────────────────────────────────────
function LiveStream() {
  const [show, setShow] = useState(false);
  return (
    <section className="section stream-section">
      <RevealBox>
        <SectionHeader label="Join Us" title="Live Streaming" light />
      </RevealBox>

      <RevealBox delay={100} className="stream__wrap">
        {!show ? (
          <button className="stream__placeholder" onClick={() => setShow(true)}>
            <img
              src={`https://img.youtube.com/vi/${CONFIG.streamEmbedId}/maxresdefault.jpg`}
              alt="Stream Thumbnail"
              className="stream__thumb"
            />
            <div className="stream__play-overlay">
              <div className="stream__play-btn">▶</div>
              <p className="stream__play-label">Watch Live</p>
            </div>
          </button>
        ) : (
          <iframe
            className="stream__frame"
            src={`https://www.youtube.com/embed/${CONFIG.streamEmbedId}?autoplay=1`}
            title="Live Streaming"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </RevealBox>

      <RevealBox delay={200}>
        <p className="stream__note">
          Can't attend in person? Watch our special moment via live stream above.
        </p>
      </RevealBox>
    </section>
  );
}

// ─────────────────────────────────────────────
//  WEDDING GIFT
// ─────────────────────────────────────────────
function WeddingGift() {
  const [copiedKey, setCopiedKey] = useState("");
  const copy = (text, key) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(""), 2500);
  };

  return (
    <section className="section gift-section">
      <RevealBox>
        <SectionHeader label="Gift Registry" title="Wedding Gifts" />
      </RevealBox>

      <RevealBox delay={100} className="gift__card">
        <div className="gift__icon">🏦</div>
        <p className="gift__card-label">Bank Transfer</p>
        <h4 className="gift__bank-name">{CONFIG.bank.name}</h4>
        <div className="gift__account-number">{CONFIG.bank.number}</div>
        <p className="gift__holder">a.n. {CONFIG.bank.holder}</p>
        <button
          className={`btn ${copiedKey === "bank" ? "btn--success" : "btn--dark"}`}
          onClick={() => copy(CONFIG.bank.number.replace(/\s/g, ""), "bank")}
        >
          {copiedKey === "bank" ? "✓ Copied!" : "Copy Account Number"}
        </button>
      </RevealBox>

      <RevealBox delay={200} className="gift__card">
        <div className="gift__icon">📦</div>
        <p className="gift__card-label">Send Physical Gift</p>
        <p className="gift__address">{CONFIG.giftAddress}</p>
        <button
          className={`btn ${copiedKey === "addr" ? "btn--success" : "btn--outline"}`}
          onClick={() => copy(CONFIG.giftAddress, "addr")}
        >
          {copiedKey === "addr" ? "✓ Copied!" : "Copy Address"}
        </button>
      </RevealBox>
    </section>
  );
}

// ─────────────────────────────────────────────
//  WEDDING WISHES + RSVP
// ─────────────────────────────────────────────
function WeddingWish() {
  const [form, setForm] = useState({ name: "", wish: "", attend: "Attending" });
  const [wishes, setWishes] = useState([
    {
      name: "David Mitchell",
      attend: "Attending",
      wish: "Wishing you both a lifetime of happiness and love. May your marriage be filled with joy and laughter forever!",
    },
    {
      name: "Emma Charlotte",
      attend: "Attending",
      wish: "So happy for you both! Wishing you a beautiful journey together. God bless your union!",
    },
  ]);
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name.trim() || !form.wish.trim()) return;
    setWishes((prev) => [{ ...form }, ...prev]);
    setForm({ name: "", wish: "", attend: "Attending" });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const waText = encodeURIComponent(
    `Hello, I'm ${form.name || "Guest"} and I'd like to confirm my attendance at the wedding of ${CONFIG.groom.nickname} & ${CONFIG.bride.nickname}.\n\nAttendance: ${form.attend}\n\nMessage: ${form.wish}`
  );

  return (
    <section className="section wish-section">
      <RevealBox>
        <SectionHeader label="Wishes & Blessings" title="Wedding Wishes" light />
      </RevealBox>

      <RevealBox delay={100} className="wish__form-card">
        <h4 className="wish__form-title">Share Your Wishes</h4>
        <input
          className="wish__input"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
        <select
          className="wish__select"
          value={form.attend}
          onChange={(e) => setForm((p) => ({ ...p, attend: e.target.value }))}
        >
          <option>Attending</option>
          <option>Not Attending</option>
          <option>Awaiting Confirmation</option>
        </select>
        <textarea
          className="wish__textarea"
          placeholder="Share your wishes and blessings here..."
          rows={4}
          value={form.wish}
          onChange={(e) => setForm((p) => ({ ...p, wish: e.target.value }))}
        />
        {sent && <p className="wish__success">✓ Thank you for your wonderful wishes!</p>}
        <button className="btn btn--dark wish__submit" onClick={handleSubmit}>
          💌 Send Wish
        </button>
      </RevealBox>

      <RevealBox delay={200}>
        <a
          href={`https://wa.me/${CONFIG.waNumber}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn--wa rsvp__wa-btn"
        >
          <span className="rsvp__wa-icon">📱</span> RSVP via WhatsApp
        </a>
      </RevealBox>

      <div className="wish__list">
        {wishes.map((w, i) => (
          <RevealBox key={i} delay={i * 80} className="wish__item">
            <div className="wish__item-header">
              <div className="wish__avatar">{w.name.charAt(0)}</div>
              <div>
                <p className="wish__item-name">{w.name}</p>
                <span className="wish__badge">{w.attend}</span>
              </div>
            </div>
            <p className="wish__item-text">{w.wish}</p>
          </RevealBox>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  TOGETHER WITH
// ─────────────────────────────────────────────
function TogetherWith() {
  return (
    <section className="section turut-section">
      <RevealBox>
        <SectionHeader label="Together With" title="Alongside Our Families" />
      </RevealBox>
      <div className="turut__list">
        {CONFIG.turut.map((t, i) => (
          <RevealBox key={i} delay={i * 100} className="turut__item">
            <span className="turut__dot">✦</span>
            <span>{t}</span>
          </RevealBox>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  CLOSING
// ─────────────────────────────────────────────
function Closing() {
  return (
    <div className="closing">
      <div className="closing__bg" />
      <div className="closing__content">
        <p className="closing__ornament">❧</p>
        <p className="closing__label">Thank You</p>
        <h2 className="closing__names">
          {CONFIG.groom.nickname} &amp; {CONFIG.bride.nickname}
        </h2>
        <div className="closing__line" />
        <p className="closing__note">
          We would be honored and delighted if you could join us and share your blessings.
        </p>
        <p className="closing__hashtag">#MarcusSophie2026</p>
        <p className="closing__made">Made with ♥ · Premium Wedding Invitation</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  MUSIC PLAYER (floating)
// ─────────────────────────────────────────────
function MusicPlayer({ autoplay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoplay && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [autoplay]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={CONFIG.musicUrl} loop />
      <button
        className={`music-player ${playing ? "music-player--spinning" : ""}`}
        onClick={toggle}
        title={playing ? "Pause Music" : "Play Music"}
      >
        <span className="music-player__icon">{playing ? "🎵" : "🎶"}</span>
      </button>
    </>
  );
}

// ─────────────────────────────────────────────
//  MAIN APP
// ─────────────────────────────────────────────
export default function Wedding() {
  const [opened, setOpened] = useState(false);
  const [searchParams] = useSearchParams();
  const guestNameFromURL = searchParams.get("to") || CONFIG.guestName;

  return (
    <div className="app">
      {!opened && <Cover onOpen={() => setOpened(true)} guestName={guestNameFromURL} />}

      {opened && (
        <main className="main">
          <Hero />
          <Couple />
          <Countdown />
          <Events />
          <LoveStory />
          <Gallery />
          <DressCode />
          <LiveStream />
          <WeddingGift />
          <WeddingWish />
          <TogetherWith />
          <Closing />
          <MusicPlayer autoplay={true} />
        </main>
      )}
    </div>
  );
}