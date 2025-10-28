import React, { useState } from "react";

export default function NationwideShineApp() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <Header onNavigate={setRoute} />

      <main className="max-w-6xl mx-auto p-6">
        {route === "home" && <Home onGetQuote={() => setRoute("quote")} />}
        {route === "services" && <Services />}
        {route === "quote" && <QuoteForm />}
        {route === "cleaners" && <CleanerForm />}
        {route === "about" && <About />}
        {route === "contact" && <Contact />}
      </main>

      <Footer onNavigate={setRoute} />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header({ onNavigate }) {
  return (
    <header className="flex items-center justify-between py-6 px-6 border-b border-gray-800 bg-black/90 sticky top-0 z-50">
      <h1
        onClick={() => onNavigate("home")}
        className="text-2xl md:text-3xl font-extrabold text-gold cursor-pointer"
      >
        Nationwide Shine
      </h1>
      <nav className="flex flex-wrap gap-4 text-sm text-gray-300">
        <button onClick={() => onNavigate("home")} className="hover:text-gold">
          Home
        </button>
        <button onClick={() => onNavigate("services")} className="hover:text-gold">
          Services
        </button>
        <button onClick={() => onNavigate("quote")} className="hover:text-gold">
          Quote
        </button>
        <button onClick={() => onNavigate("cleaners")} className="hover:text-gold">
          Cleaners
        </button>
        <button onClick={() => onNavigate("about")} className="hover:text-gold">
          About
        </button>
        <button onClick={() => onNavigate("contact")} className="bg-gold text-black px-4 py-1 rounded hover:opacity-90">
          Contact
        </button>
      </nav>
    </header>
  );
}

/* ---------------- HOME ---------------- */
function Home({ onGetQuote }) {
  return (
    <section className="mt-8 rounded-2xl overflow-hidden border border-gray-800 bg-gray-950">
      <div className="grid md:grid-cols-2 items-center gap-6 p-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gold leading-tight">
            Southern Hospitality. Major Shine.
          </h2>
          <p className="mt-4 text-gray-300">
            Based in Southern Indiana, we bring high-end luxury cleaning standards with a
            personal touch. From homes to offices — we make every surface shine.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={onGetQuote}
              className="px-6 py-3 bg-gold text-black font-semibold rounded-md hover:opacity-95 transition"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              className="px-6 py-3 border border-gold text-gold rounded-md hover:bg-gold hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578015571-9a0f0b0e0b5a?auto=format&fit=crop&w=1000&q=80')",
          }}
        ></div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { title: "Residential Cleaning", desc: "Deep cleans, move-outs, and recurring service" },
    { title: "Commercial Cleaning", desc: "Professional cleaning for offices and businesses" },
    { title: "Airbnb Turnovers", desc: "Fast, luxury-standard turnover cleans" },
    { title: "Add-ons", desc: "Carpet shampoo, oven/fridge, windows, and more" },
  ];

  return (
    <section className="mt-10 p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow">
      <h3 className="text-3xl font-bold text-gold mb-6 text-center">Our Services</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((s) => (
          <div key={s.title} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-gold">{s.title}</h4>
            <p className="text-gray-300 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- QUOTE FORM ---------------- */
function QuoteForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mqagpegn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="mt-10 p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-gold mb-4 text-center">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" required className="input" />
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="phone" placeholder="Phone" className="input" />
        <input name="zip" placeholder="ZIP Code" className="input" />
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your space..."
          className="input md:col-span-2"
        />
        <button
          type="submit"
          className="md:col-span-2 px-6 py-3 bg-gold text-black rounded-md font-semibold hover:opacity-95 transition"
        >
          Submit Quote Request
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-400 mt-3 text-center">✅ Thank you! We’ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-3 text-center">❌ There was an error. Please try again.</p>
      )}
    </section>
  );
}

/* ---------------- CLEANER FORM ---------------- */
function CleanerForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mqagpegn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="mt-10 p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-gold mb-4 text-center">Join as a Cleaner</h3>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="fullName" placeholder="Full Name" required className="input" />
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="phone" placeholder="Phone" className="input" />
        <input name="city" placeholder="City / ZIP" className="input" />
        <select name="experience" className="input">
          <option value="">Experience Level</option>
          <option>0-1 years</option>
          <option>2-4 years</option>
          <option>5+ years</option>
        </select>
        <input name="availability" placeholder="Availability (e.g. Mon–Fri)" className="input" />
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about yourself..."
          className="input md:col-span-2"
        />
        <button
          type="submit"
          className="md:col-span-2 px-6 py-3 bg-gold text-black rounded-md font-semibold hover:opacity-95 transition"
        >
          Submit Application
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-400 mt-3 text-center">✅ Application submitted successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-3 text-center">❌ Something went wrong. Try again.</p>
      )}
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section className="mt-10 p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow text-center">
      <h3 className="text-3xl font-bold text-gold mb-4">About Nationwide Shine</h3>
      <p className="text-gray-300 max-w-3xl mx-auto">
        Based in a small town in <span className="text-gold font-semibold">Southern Indiana</span>,
        Nationwide Shine is built on the values of{" "}
        <span className="text-gold font-semibold">Integrity</span>,{" "}
        <span className="text-gold font-semibold">Respect</span>, and{" "}
        <span className="text-gold font-semibold">Ambition</span>. We bring
        Southern hospitality — with a major shine!
      </p>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
        alt="Luxury cleaning"
        className="mt-6 mx-auto rounded-lg border border-gray-700 shadow-lg max-w-3xl"
      />
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section className="mt-10 p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow text-center">
      <h3 className="text-3xl font-bold text-gold mb-4">Contact Us</h3>
      <p className="text-gray-300">Questions, quotes, or partnerships?</p>
      <p className="mt-2 text-gold font-semibold text-lg">CodyTerry15@gmail.com</p>
      <p className="text-gray-500 text-sm mt-1">We respond within 24 hours.</p>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ onNavigate }) {
  return (
    <footer className="mt-16 py-6 border-t border-gray-800 text-center text-gray-400 bg-black/80">
      <p>
        © {new Date().getFullYear()} <span className="text-gold font-semibold">Nationwide Shine</span> —
        Integrity • Respect • Ambition
      </p>
      <div className="mt-2 space-x-4">
        <button onClick={() => onNavigate("about")} className="hover:text-gold">
          About
        </button>
        <button onClick={() => onNavigate("contact")} className="hover:text-gold">
          Contact
        </button>
      </div>
    </footer>
  );
}

/* ---------------- STYLES ---------------- */
const input =
  "p-3 bg-gray-800 border border-gray-700 rounded text-gray-100 focus:outline-none focus:border-gold";
document.querySelectorAll(".input").forEach((el) => (el.className = input));