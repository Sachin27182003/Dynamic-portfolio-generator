import type { PortfolioData } from "../types/Portfolio";

const Template1 = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="p-6 space-y-6 bg-emerald-50 rounded-xl shadow-xl border border-emerald-200 text-gray-800 min-h-screen">
      {/* Header & Hero */}
      <header className="text-center space-y-2">
        <img
          src={data.hero.profileImage}
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full border-2 border-emerald-400 object-cover"
        />
        <h1 className="text-3xl font-bold">{data.hero.name}</h1>
        <p className="text-lg text-emerald-700">{data.hero.title}</p>
        <p className="italic text-sm">{data.hero.tagline}</p>
      </header>

      {/* About */}
      <section>
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="mb-1">{data.about.bio}</p>
        <p className="text-sm text-gray-600">
          📍 {data.about.location} <br />
          📧 {data.about.email} | 📞 {data.about.phone}
        </p>
        <div className="flex gap-3 mt-2 flex-wrap">
          {data.about.socials.map((link, idx) => (
            <a
              key={idx}
              href={link}
              className="text-blue-600 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <ul className="list-disc pl-5 space-y-1">
          {data.services.map((s, i) => (
            <li key={i}>
              <strong>{s.title}:</strong> {s.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Portfolio */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.portfolio.map((p, i) => (
            <div key={i} className="border p-3 rounded-xl shadow bg-white">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-bold mt-2">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
        <ul className="space-y-2">
          {data.testimonials.map((quote, i) => (
            <li key={i} className="italic text-gray-700 border-l-4 border-emerald-400 pl-3">
              “{quote}”
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p><strong>Email:</strong> {data.contact.email}</p>
        <p><strong>Phone:</strong> {data.contact.phone}</p>
        <p><strong>Message:</strong> {data.contact.message}</p>
      </section>

      {/* Footer */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Footer</h2>
        <p><strong>{data.footer?.title}</strong></p>
        <p>{data.footer?.summary}</p>
      </section>

      {/* Final Footer */}
      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2025 {data.hero.name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Template1;
