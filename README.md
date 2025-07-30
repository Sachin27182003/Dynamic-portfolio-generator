# Dynamic-Portfolio-Generator 💼⚡
A full-stack web application that allows users to create stunning developer portfolios by filling out a structured, multi-section form. Users can select a portfolio template, input all their professional details (projects, skills, testimonials, etc.), and generate a ready-to-use portfolio page with real-time preview.

Built with React + TypeScript and styled using Tailwind CSS, the platform ensures a smooth, validated, and responsive user experience. Future-ready to export portfolios or integrate user authentication.


---

# Features 🚀
🎨 Select from multiple portfolio templates
Users can choose their preferred portfolio design layout.

📝 Multi-section dynamic form
Separate tabs for details like Hero, About, Skills, Services, Projects, Testimonials, and Footer.

🔍 Form validation per section
Each tab validates input before allowing users to proceed.

📷 Profile image upload with preview support
Supports file or Cloudinary image URLs.

📄 Live preview of portfolio card
Preview your profile card dynamically as you fill out the form.

🌐 Fully responsive design
Optimized for all screen sizes and devices.

📁 Data-driven rendering
Portfolio pages are dynamically rendered using a PortfolioData object.

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS.
- **Routing**: React Router
- **Form Handling**: useState + tab-based stepper logic
---
## 🚀 Getting Started

📁 Folder Structure

```text
project-root/
      ├── node_modules
      ├── public
      │     ├── images (1).jpeg
      │     ├── images.jpeg
      │     ├── vite.svg
      │     └── Work_7.jpg
      ├── src/
      │   ├── assets/
      │   │      └── react.svg
      │   ├── context/
      │   │      ├── PortfolioContext.ts
      │   │      ├── PortfolioProvider.tsx
      │   │      └── useportfolio.ts
      │   ├── pages/
      │   │      ├── PortfolioForm.tsx
      │   │      ├── PortfolioPage.tsx
      │   │      ├── PrfessionalsList.tsx
      │   │      ├── TemplateSelection.tsx
      │   │      └── Welcomepage.tsx
      │   ├── template/
      │   │      ├── Template1.tsx
      │   │      └── Template2.tsx
      │   ├── types/
      │   │      └── Portfolio.ts
      │   ├── App.css
      │   ├── App.tsx
      │   ├── index.css
      │   ├── main.tsx
      │   └── vite-end.d.ts
      ├── .gitignore
      ├── eslint.config.ts
      ├── index.html
      ├── package-lock.json
      ├── package.json
      ├── README.md
      ├── tsconfig.app.json
      ├── tsconfig.json
      ├── tsconfig.node.json
      └── vite.config.ts

```

## 📦 Installation

### 1️⃣ Clone the repository

```bash

✅ Prerequisites
Before you begin, make sure the following tools are installed on your system:

🔧 General Tools
Git
→ Download Git https://git-scm.com/downloads
→ Check: git --version

Node.js (v14 or newer) & npm
→ Download Node.js https://nodejs.org/en/download
→ Check: node -v, npm -v

🐍 Backend (Node) Specific

Make sure Port :- 5173 should be free

⚛️ Frontend (React + TypeScript) Specific
Internet connection to download npm packages

A modern browser (e.g., Chrome)

Now,
git clone https://github.com/Sachin27182003/Dynamic-portfolio-generator.git

▶️ Start the Server (React + TypeScript) App
cd Dynamic-portfolio-generator

# Install dependencies
npm install

# Start the server
npm run dev
#Runs at: http://localhost:5173/

```


🙏 Thank You
Thank you for checking out the Property Listing Site!
We hope it helps you find, list, and manage real estate properties with ease and efficiency.

Feel free to fork, star ⭐, or contribute to make it even better!

--- 

This project is built with ❤️ to simplify property discovery and empower real estate experiences.
Happy coding and house hunting! 🏠🚀
---


