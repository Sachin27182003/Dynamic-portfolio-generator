import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePortfolio } from "../context/usePortfolio";
import type { PortfolioData, Project, Service, FormData } from "../types/Portfolio";
import { v4 as uuidv4 } from "uuid";

const sections = [
  "Basic Details",
  "Header & Hero",
  "About Section",
  "Services",
  "Products",
  "Clients & Testimonials",
  "Contact",
  "Footer",
];

const tabOrder = [...sections];

const getNextTab = (current: string) => {
  const currentIndex = tabOrder.indexOf(current);
  return currentIndex !== -1 && currentIndex < tabOrder.length - 1
    ? tabOrder[currentIndex + 1]
    : current;
};

const isTabValid = (tab: string, data: FormData): boolean => {
  const {
    name,
    email,
    phone,
    title,
    tagline,
    profileImage,
    bio,
    location,
    socials,
    services,
    portfolio,
    testimonials,
    message,
    blogTitle,
    blogSummary,
  } = data;

  switch (tab) {
    case "Basic Details":
      return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
    case "Header & Hero":
      return title.trim() !== "" && tagline.trim() !== "" && profileImage.trim() !== "";
    case "About Section":
      return (
        bio.trim() !== "" &&
        location.trim() !== "" &&
        socials.length > 0 &&
        socials.every((s) => s.trim() !== "")
      );
    case "Services":
      return (
        services.length > 0 &&
        services.every((s) => s.title.trim() !== "" && s.description.trim() !== "")
      );
    case "Products":
      return (
        portfolio.length > 0 &&
        portfolio.every(
          (p) =>
            p.title.trim() !== "" &&
            p.image.trim() !== "" &&
            p.description.trim() !== ""
        )
      );
    case "Clients & Testimonials":
      return testimonials.length > 0 && testimonials.every((t) => t.trim() !== "");
    case "Contact":
      return email.trim() !== "" && phone.trim() !== "" && message.trim() !== "";
    case "Footer":
      return blogTitle.trim() !== "" && blogSummary.trim() !== "";
    default:
      return false;
  }
};

const PortfolioForm = () => {
  const { portfolios, updatePortfolio, addPortfolio } = usePortfolio();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Basic Details");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [socials, setSocials] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [portfolio, setPortfolio] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSummary, setBlogSummary] = useState("");
  const [message, setMessage] = useState("");

  const formData: FormData = {
    name,
    email,
    phone,
    title,
    tagline,
    profileImage,
    bio,
    location,
    socials,
    services,
    portfolio,
    testimonials,
    message,
    blogTitle,
    blogSummary,
  };

  const handleNext = () => {
    if (isTabValid(activeTab, formData)) {
      setActiveTab(getNextTab(activeTab));
    }
  };

  const canNavigateTo = (target: string) => {
    const targetIndex = tabOrder.indexOf(target);
    for (let i = 0; i < targetIndex; i++) {
      if (!isTabValid(tabOrder[i], formData)) return false;
    }
    return true;
  };

  const handleSubmit = () => {
    const data: PortfolioData = {
      id: localStorage.getItem("editId") || uuidv4(),
      templateId: parseInt(localStorage.getItem("selectedTemplate") || "1"),
      hero: { name, title, tagline, profileImage },
      about: { bio, email, phone, location, socials },
      skills,
      services,
      portfolio,
      testimonials,
      blog: { title: blogTitle, summary: blogSummary },
      contact: { message, email, phone },
    };

    if (localStorage.getItem("editId")) {
      updatePortfolio(data);
      localStorage.removeItem("editId");
    } else {
      addPortfolio(data);
    }
    navigate("/professionals");
  };

  useEffect(() => {
    const editId = localStorage.getItem("editId");
    if (editId) {
      const existing = portfolios.find((p) => p.id === editId);
      if (existing) {
        setName(existing.hero.name);
        setTitle(existing.hero.title);
        setTagline(existing.hero.tagline);
        setProfileImage(existing.hero.profileImage);
        setBio(existing.about.bio);
        setEmail(existing.about.email);
        setPhone(existing.about.phone);
        setLocation(existing.about.location);
        setSocials(existing.about.socials);
        setSkills(existing.skills);
        setServices(existing.services);
        setPortfolio(existing.portfolio);
        setTestimonials(existing.testimonials);
        setBlogTitle(existing.blog?.title || "");
        setBlogSummary(existing.blog?.summary || "");
        setMessage(existing.contact.message);
      }
    }
  }, [portfolios]);
  return (
    <div className="max-w-5xl mx-auto mt-6">
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-3">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => canNavigateTo(section) && setActiveTab(section)}
            disabled={!canNavigateTo(section)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              activeTab === section
                ? "bg-red-500 text-white"
                : canNavigateTo(section)
                ? "bg-gray-100 text-black"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        {activeTab === "Basic Details" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Basic Company Details</h2>
            <input
              required
              type="text"
              placeholder="Your company name (used in URL)"
              className="w-full p-2 border rounded text-sm mb-4"
            />
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}

        {activeTab === "Header & Hero" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Header & Hero</h2>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Tagline
            </label>
            <input
              type="text"
              value={tagline}
              required
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Building seamless digital experiences"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              value={profileImage}
              required
              onChange={(e) => setProfileImage(e.target.value)}
              placeholder="https://example.com/profile.jpg"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}
        {activeTab === "About Section" && (
          <div>
            <h2 className="text-xl font-bold mb-4">About Section</h2>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              value={bio}
              required
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Delhi, India"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Socials (comma separated)
            </label>
            <input
              type="text"
              required
              onChange={(e) => setSocials(e.target.value.split(","))}
              placeholder="https://github.com/username, https://linkedin.com/in/username"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}

        {activeTab === "Services" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <label className="block text-sm font-medium mb-1">
              Services (Title:Desc, separate by |)
            </label>
            <textarea
              required
              onChange={(e) => {
                const s = e.target.value.split("|").map((item) => {
                  const [title, description] = item.split(":");
                  return { title, description };
                });
                setServices(s);
              }}
              placeholder="Design:UI/UX and wireframes | Development:React & Node.js"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}
        {activeTab === "Products" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Products / Portfolio</h2>
            <label className="block text-sm font-medium mb-1">
              Projects (Title:Image:Desc, separate by |)
            </label>
            <textarea
              required
              onChange={(e) => {
                const p = e.target.value.split("|").map((item) => {
                  const [title, image, description] = item.split(":");
                  return { title, image, description };
                });
                setPortfolio(p);
              }}
              placeholder="Project A:https://image.url:Description here | Project B:https://img:Desc"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}
        {activeTab === "Clients & Testimonials" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Client Testimonials</h2>
            <label className="block text-sm font-medium mb-1">
              Testimonials (comma separated)
            </label>
            <textarea
              required
              onChange={(e) => setTestimonials(e.target.value.split(","))}
              placeholder="Great job!,Very professional,Quick turnaround"
              className="w-full p-2 border rounded text-sm"
            />
            <button
             onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}
        {activeTab === "Contact" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@you.com"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9000000000"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Message
            </label>
            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Looking forward to hearing from you!"
              className="w-full p-2 border rounded text-sm"
            />
            <button
              onClick={handleNext}
              className={`mt-4 px-4 py-2 rounded text-white ${
                isTabValid(activeTab, formData)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isTabValid(activeTab, formData)}
            >
              Next
            </button>
          </div>
        )}
        {activeTab === "Footer" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Blog / Footer</h2>
            <label className="block text-sm font-medium mb-1">Blog Title</label>
            <input
              type="text"
              value={blogTitle}
              required
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="The Future of Frontend"
              className="w-full p-2 border rounded text-sm"
            />
            <label className="block text-sm font-medium mt-4 mb-1">
              Blog Summary
            </label>
            <textarea
              value={blogSummary}
              required
              onChange={(e) => setBlogSummary(e.target.value)}
              placeholder="A quick overview of upcoming frontend tech..."
              className="w-full p-2 border rounded text-sm"
            />
          </div>
        )}
        <div className="pt-6">
          {activeTab === "Footer" && (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
