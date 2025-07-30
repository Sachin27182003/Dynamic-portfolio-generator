import type { PortfolioData } from '../types/Portfolio';

const Template1 = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="p-6 space-y-4 bg-emerald-100 rounded-xl shadow-2xl shadow-rose-100 border border-emerald-500 border-2 text-gray-800 min-h-screen">
      <header className="text-center">
        <img src={data.hero.profileImage} alt="Profile" className="w-28 h-28 mx-auto rounded-full border-2 border-emerald-500 object-cover" />
        <h1 className="text-2xl font-bold">{data.hero.name}</h1>
        <p className="text-gray-500">{data.hero.title}</p>
        <p className="italic mt-1">{data.hero.tagline}</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>{data.about.bio}</p>
        <p className="text-sm text-gray-600">📧 {data.about.email} | 📞 {data.about.phone}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 border-2 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Services</h2>
        <ul className="list-disc pl-5">
          {data.services.map((s, i) => (
            <li key={i}><strong>{s.title}:</strong> {s.description}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.portfolio.map((p, i) => (
            <div key={i} className="border-2 rounded-xl p-2">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />
              <h3 className="font-bold mt-2">{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Testimonials</h2>
        <ul className="pl-4">
          {data.testimonials.map((quote, i) => (
            <li key={i} className="italic">“{quote}”</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Blog</h2>
        <p><strong>{data.blog?.title}</strong></p>
        <p>{data.blog?.summary}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Contact</h2>
        <p><strong>Email:</strong> {data.contact.email}</p>
        <p><strong>Phone:</strong> {data.contact.phone}</p>
        <p><strong>Message:</strong> {data.contact.message}</p>
      </section>
      <footer className="text-center text-gray-400 mt-6">Made with ❤️ by {data.hero.name}</footer>
    </div>
  );
};

export default Template1;