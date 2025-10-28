import React, { useState } from "react";

/* --------------------------- HEADER --------------------------- */
function Header({ onNavigate }) {
  return (
    <header className="bg-black/90 text-yellow-400 p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1
          onClick={() => onNavigate("home")}
          className="text-2xl font-extrabold tracking-wider cursor-pointer"
        >
          Nationwide Shine
        </h1>
        <nav className="space-x-6 text-sm md:text-base">
          <button onClick={() => onNavigate("home")} className="hover:text-yellow-300">
            Home
          </button>
          <button onClick={() => onNavigate("quote")} className="hover:text-yellow-300">
            Get a Quote
          </button>
          <button onClick={() => onNavigate("apply")} className="hover:text-yellow-300">
            Join Our Team
          </button>
          <button onClick={() => onNavigate("about")} className="hover:text-yellow-300">
            About
          </button>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------- HERO --------------------------- */
function Hero({ onNavigate }) {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-6 text-yellow-400">
          Luxury Cleaning. Local Hands.
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          We provide high-end residential and commercial cleaning with precision, professionalism, and pride.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onNavigate("quote")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => onNavigate("apply")}
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg transition"
          >
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- QUOTE FORM --------------------------- */
function QuoteForm({ onSuccess }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqagpegn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
      onSuccess();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-yellow-400 mb-4">Request a Quote</h3>
      <p className="text-gray-300 mb-6">
        Tell us about your space and needs — we’ll get back to you with a personalized estimate.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="email" type="email" placeholder="Email" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="phone" placeholder="Phone Number" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="location" placeholder="City / ZIP" className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <textarea
          name="message"
          placeholder="Tell us about your cleaning needs..."
          rows="4"
          className="md:col-span-2 p-3 bg-gray-800 border border-gray-600 rounded text-gray-100"
        ></textarea>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Submit Request
          </button>
        </div>
      </form>

      {status === "SUCCESS" && <p className="text-green-400 mt-4">✅ Quote request sent successfully!</p>}
      {status === "ERROR" && <p className="text-red-400 mt-4">❌ Something went wrong. Please try again.</p>}
    </section>
  );
}

/* --------------------------- CLEANER APPLICATION --------------------------- */
function CleanerApplicationForm({ onSuccess }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqagpegn", { // same endpoint as quote form
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
      onSuccess();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <section className="rounded-2xl p-8 bg-gray-900 shadow border border-gray-700 mt-8 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-yellow-400 mb-4">Join the Nationwide Shine Team</h3>
      <p className="text-gray-300 mb-6">
        We’re seeking detail-oriented, professional cleaners who take pride in creating spotless spaces.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="fullName" placeholder="Full Name" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="email" type="email" placeholder="Email" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="phone" placeholder="Phone Number" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <input name="city" placeholder="City / ZIP" required className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <select name="experience" className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" required>
          <option value="">Experience Level</option>
          <option>0-1 years</option>
          <option>2-4 years</option>
          <option>5+ years</option>
        </select>
        <input name="availability" placeholder="Days Available (e.g. Mon-Fri)" className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100" />
        <textarea
          name="message"
          placeholder="Tell us why you’d be a great fit..."
          rows="4"
          className="p-3 bg-gray-800 border border-gray-600 rounded text-gray-100 md:col-span-2"
        ></textarea>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Submit Application
          </button>
        </div>
      </form>

      {status === "SUCCESS" && <p className="text-green-400 mt-4">✅ Application sent successfully!</p>}
      {status === "ERROR" && <p className="text-red-400 mt-4">❌ Something went wrong. Please try again.</p>}
    </section>
  );
}

/* --------------------------- FOOTER --------------------------- */
function Footer({ onNavigate }) {
  return (
    <footer className="bg-black/90 text-gray-400 py-6 mt-16 text-center">
      <div className="space-x-6">
        <button onClick={() => onNavigate("about")} className="hover:text-yellow-400">About</button>
        <button onClick={() => onNavigate("quote")} className="hover:text-yellow-400">Quote</button>
        <button onClick={() => onNavigate("apply")} className="hover:text-yellow-400">Join Our Team</button>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Nationwide Shine — Luxury Cleaning. Local Hands.
      </p>
    </footer>
  );
}

/* --------------------------- MAIN APP --------------------------- */
export default function NationwideShineApp() {
  const [route, setRoute] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100">
      <Header onNavigate={setRoute} />

      <main className="flex-grow">
        {route === "home" && <Hero onNavigate={setRoute} />}
        {route === "quote" && <QuoteForm onSuccess={() => setRoute("thankyou")} />}
        {route === "apply" && <CleanerApplicationForm onSuccess={() => setRoute("thankyou")} />}
        {route === "thankyou" && (
          <section className="text-center py-24">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">We’ll get back to you shortly.</p>
            <button
              onClick={() => setRoute("home")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Back to Home
            </button>
          </section>
        )}
      </main>

      <Footer onNavigate={setRoute} />
    </div>
  );
}