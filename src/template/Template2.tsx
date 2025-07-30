import type { PortfolioData } from '../types/Portfolio';

const Template2 = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen space-y-8">
      <header className="text-center">
        <img src={data.hero.profileImage} alt="Profile" className="w-28 h-28 mx-auto rounded-full border-4 border-white" />
        <h1 className="text-3xl font-bold mt-2">{data.hero.name}</h1>
        <p className="text-gray-300">{data.hero.title}</p>
        <p className="text-gray-400 italic">{data.hero.tagline}</p>
      </header>
      <div className="max-w-3xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">About Me</h2>
          <p>{data.about.bio}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span key={i} className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Projects</h2>
          <div className="space-y-4">
            {data.portfolio.map((p, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Testimonials</h2>
          <ul>
            {data.testimonials.map((quote, i) => (
              <li key={i} className="italic text-gray-300">“{quote}”</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Contact</h2>
          <p><strong>Email:</strong> {data.contact.email}</p>
          <p><strong>Phone:</strong> {data.contact.phone}</p>
          <p><strong>Message:</strong> {data.contact.message}</p>
        </section>
      </div>
      <footer className="text-center text-sm text-gray-500">Built with care by {data.hero.name}</footer>
    </div>
  );
};

export default Template2;