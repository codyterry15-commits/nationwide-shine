import React, { useState } from "react";
export default function NationwideShineApp() {
  const [route, setRoute] = useState("home");
  const [quoteStatus, setQuoteStatus] = useState(null);
  const [cleanerStatus, setCleanerStatus] = useState(null);

 return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100 font-sans">

      <Header onNavigate={setRoute} />

      <main className="max-w-6xl mx-auto p-6">
        {route === "home" && <Home onGetQuote={() => setRoute("quote")} />}
        {route === "services" && <Services />}
        {route === "quote" && (
          <QuoteForm
            onSuccess={() => {
              setQuoteStatus("submitted");
              setRoute("thankyou");
            }}
          />
        )}
        {route === "for-cleaners" && (
          <CleanerForm onSuccess={() => setCleanerStatus("submitted")} />
        )}
        {route === "about" && <About />}
        {route === "contact" && <Contact />}
        {route === "thankyou" && <ThankYou />}
      </main>

      <Footer onNavigate={setRoute} />
    </div>
  );
}

/* --------------------------- HEADER --------------------------- */
function Header({ onNavigate }) {
  return (
    <header className="flex items-center justify-between py-6 border-b border-gray-700 bg-black/80 backdrop-blur-md px-6 md:px-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold shadow-lg">
          NS
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gold">Nationwide Shine</h1>
          <p className="text-sm text-gray-400">
            Luxury Cleaning. Local Hands.
          </p>
        </div>
      </div>

      <nav className="flex items-center gap-4 text-gray-300 text-sm">
        <NavLink onClick={() => onNavigate("home")}>Home</NavLink>
        <NavLink onClick={() => onNavigate("services")}>Services</NavLink>
        <NavLink onClick={() => onNavigate("quote")}>Get a Quote</NavLink>
        <NavLink onClick={() => onNavigate("for-cleaners")}>For Cleaners</NavLink>
        <NavLink onClick={() => onNavigate("about")}>About</NavLink>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-gold text-black px-4 py-2 rounded-md font-semibold hover:bg-gold-dark transition"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

function NavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="hover:text-gold transition-colors duration-150"
    >
      {children}
    </button>
  );
}

/* --------------------------- HOME --------------------------- */
function Home({ onGetQuote }) {
  return (
    <section className="relative rounded-2xl overflow-hidden mt-8">
      {/* Background with gradient + image overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"
      />
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20 text-center text-gray-100">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
          Luxury Cleaning, Coast to Coast ✨
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Nationwide Shine brings 5-star cleaning to homes, offices, and Airbnbs —
          combining local care with a luxury touch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGetQuote}
            className="px-8 py-4 bg-gold text-black text-lg font-semibold rounded-full hover:bg-yellow-500 transition shadow-lg"
          >
            Get Your Free Quote
          </button>
          <button className="px-8 py-4 border border-gold text-gold text-lg rounded-full hover:bg-gold hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SERVICES --------------------------- */
function Services() {
  const services = [
    { title: "Residential Cleaning", desc: "Standard, deep, and move-in/out cleans" },
    { title: "Office & Commercial", desc: "Flexible teams for recurring or one-off jobs" },
    { title: "Airbnb Turnovers", desc: "Fast turnarounds + linen service add-ons" },
    { title: "Add-Ons", desc: "Oven clean, fridge clean, carpet shampoo, interior windows" },
  ];

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold text-gold mb-6">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h4 className="font-semibold text-gold">{s.title}</h4>
            <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
            <div className="mt-3">
              <button
                className="text-sm text-gold underline hover:text-gold-light"
                onClick={() => alert("Request a quote for " + s.title)}
              >
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- QUOTE FORM --------------------------- */
function QuoteForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "home",
    size: "",
    zip: "",
    date: "",
    notes: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitQuote(e) {
    e.preventDefault();
    console.log("Quote request", form);
    onSuccess();
  }

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold text-gold mb-4">Request a Quote</h3>
      <form onSubmit={submitQuote} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none"
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none"
        />
        <select
          name="propertyType"
          value={form.propertyType}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none"
        >
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="airbnb">Airbnb / Short-term rental</option>
        </select>

        <input
          name="size"
          placeholder="Square ft or # rooms"
          value={form.size}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none"
        />
        <input
          name="zip"
          placeholder="ZIP code"
          value={form.zip}
          onChange={update}
          required
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none"
        />
        <textarea
          name="notes"
          placeholder="Special requests"
          value={form.notes}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gold outline-none md:col-span-2"
        />

        <div className="md:col-span-2 flex gap-3">
          <button
            type="submit"
            className="px-4 py-3 bg-gold text-black rounded font-semibold hover:bg-gold-dark transition"
          >
            Submit for Quote
          </button>
          <button
            type="button"
            className="px-4 py-3 border border-gold text-gold rounded hover:bg-gold hover:text-black transition"
            onClick={() => alert("We will follow up with a custom quote.")}
          >
            Need Help?
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-400">
        <strong className="text-gold">Quote-first / Pay-later flow:</strong> We provide
        a custom quote after reviewing the request. Once approved, you’ll receive a
        Stripe invoice or scheduled payment.
      </p>
    </section>
  );
}

/* --------------------------- CLEANER FORM --------------------------- */
function CleanerForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    state: "",
    experience: "",
    phone: "",
    email: "",
    references: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitCleaner(e) {
    e.preventDefault();
    console.log("Cleaner application", form);
    onSuccess();
  }

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold text-gold mb-4">Join as a Cleaner</h3>
      <form onSubmit={submitCleaner} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full name" value={form.name} onChange={update}
          required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="email" type="email" placeholder="Email" value={form.email}
          onChange={update} required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="city" placeholder="City" value={form.city} onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="state" placeholder="State" value={form.state} onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="experience" placeholder="Years experience / specialties"
          value={form.experience} onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <textarea name="references" placeholder="References" value={form.references}
          onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none md:col-span-2" />

        <div className="md:col-span-2 flex gap-3">
          <button type="submit"
            className="px-4 py-3 bg-gold text-black rounded font-semibold hover:bg-gold-dark transition">
            Apply
          </button>
          <button type="button"
            className="px-4 py-3 border border-gold text-gold rounded hover:bg-gold hover:text-black transition"
            onClick={() => alert("We will email you onboarding steps.")}>
            Background Check Info
          </button>
        </div>

        <p className="text-xs text-gray-500 md:col-span-2 mt-2">
          We onboard cleaners as independent contractors (1099). You’ll receive a welcome
          packet and payment setup link when accepted.
        </p>
      </form>
    </section>
  );
}

/* --------------------------- ABOUT --------------------------- */
function About() {
  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold text-gold mb-4">About Nationwide Shine</h3>
      <p className="text-gray-300">
        Nationwide Shine delivers luxury cleaning standards in every city. Our teams
        follow a strict quality checklist and use vetted eco-friendly supplies.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat title="Vetted Cleaners" value="1000 +" />
        <Stat title="Cities Served" value="Nationwide" />
        <Stat title="Satisfaction" value="99 %" />
      </div>
    </section>
  );
}

/* --------------------------- CONTACT --------------------------- */
function Contact() {
  const [msg, setMsg] = useState({ name: "", email: "", message: "" });

  function update(e) {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    alert("Thanks — we’ll respond within 1 business day.");
  }

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8">
      <h3 className="text-2xl font-bold text-gold mb-4">Contact Us</h3>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <input name="email" placeholder="Email" onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-gold outline-none" />
        <textarea name="message" placeholder="Message" onChange={update}
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 md:col-span-2 focus:ring-2 focus:ring-gold outline-none" />
        <div className="md:col-span-2">
          <button className="px-4 py-3 bg-gold text-black rounded font-semibold hover:bg-gold-dark transition">
            Send
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-400">
        HQ : Virtual — Serving clients nationwide. For urgent requests, email 
        <span className="text-gold"> ops@nationwideshine.com</span>
      </p>
    </section>
  );
}

/* --------------------------- THANK YOU --------------------------- */
function ThankYou() {
  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 text-center mt-8">
      <h3 className="text-2xl font-bold text-gold">
        Thanks — we’ve received your quote request!
      </h3>
      <p className="text-gray-400 mt-3">
        One of our location managers will review and send your custom quote within 24 hours.
      </p>
    </section>
  );
}

/* --------------------------- STAT + FOOTER --------------------------- */
function Stat({ title, value }) {
  return (
    <div className="p-4 border border-gray-700 rounded-md text-center bg-gray-800">
      <div className="text-lg font-bold text-gold">{value}</div>
      <div className="text-sm text-gray-400">{title}</div>
    </div>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 py-8 border-t border-gray-700 text-gray-400 text-sm bg-black/70 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-gold font-semibold">Nationwide Shine</span> — Luxury
          Cleaning. Local Hands.
        </div>
        <div className="flex gap-4">
          <button onClick={() => onNavigate("about")} className="hover:text-gold">
            About
          </button>
          <button onClick={() => onNavigate("contact")} className="hover:text-gold">
            Contact
          </button>
          <a href="#" className="hover:text-gold">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}