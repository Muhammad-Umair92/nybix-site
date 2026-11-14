# Nyabix Technologies – Multi-Template Enterprise Showcase

> Production-ready, multi-template enterprise web platform built for **Nyabix Technologies** featuring 7 distinct design directions, an interactive theme switcher, proprietary AI simulators (AP Console & Trip Planner), real enterprise case studies (PARCO, IMC Toyota, PSO), and automated GitHub Pages CI/CD.

---

## 🌐 Live Deployments

* **🚀 Latest Showcase (7 Templates + Dark/Light Mode + Official Details)**:  
  [https://muhammad-umair92.github.io/nybix-site/](https://muhammad-umair92.github.io/nybix-site/)
* **📦 Historical Generic Version (Preserved for reference)**:  
  [https://muhammad-umair92.github.io/nybix-site/previous/](https://muhammad-umair92.github.io/nybix-site/previous/)

---

## ⚡ Quick Start

### Prerequisites
* **Node.js**: `v18.0.0` or higher (Node 20 or 22 recommended)
* **npm**: `v9.0.0` or higher

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Muhammad-Umair92/nybix-site.git

# 2. Change into the project directory
cd nybix-site

# 3. Install dependencies
npm install

# 4. Start local development server with hot module replacement (HMR)
npm run dev
```

Visit [`http://localhost:5173`](http://localhost:5173) in your browser.

---

## 🛠️ Build & Preview Commands

```bash
# Compile and optimize production build into /dist
npm run build

# Preview the production build locally (simulates production environment)
npm run preview
```

Preview server runs at [`http://localhost:4173`](http://localhost:4173).

---

## 🎨 7 Complete Design Templates

Switch between all 7 templates instantly using the top controller bar or the **Executive Decision Matrix** modal:

| # | Template Name | Concept & Core Features |
|---|---|---|
| **1** | **Enterprise SAP** | High-authority German corporate SAP style. Focus on S/4HANA migration, SF Ariba, Oracle ERP bridges, and interactive ROI PO calculator. |
| **2** | **Modern Tech & AI** | Modern Silicon Valley SaaS aesthetic with interactive capability filter pills and AP Console architecture visualizer. |
| **3** | **Digital Advisory** | Big-4 management consultancy tone (McKinsey / Deloitte style) with executive dossiers, methodology roadmaps, and client case studies. |
| **4** | **Futuristic Tech** | Apple / Linear inspired minimalist systems engineering with 3-tier architecture blueprints and live telemetry metrics. |
| **5** | **Cyber AI Matrix** | Silicon Valley AI lab aesthetic (obsidian dark canvas, neon ambient glow, live interactive AP Console OCR 3-way match simulator, and Trip Planner multi-leg route optimizer). **Includes native Dark & Light mode toggle**. |
| **6** | **Neo-Bento Studio** | Tactile Swiss architectural bento grid (Stripe / Teenage Engineering style) with 3-mode interactive hero cockpit and 24/7 offshore pod builder. **Includes native Dark & Light mode toggle**. |
| **7** | **Kinetic Aurora Studio** | Award-winning creative spatial studio with floating ambient auroras, interactive before/after transformation slider, and kinetic solution pipeline. **Includes native Dark & Light mode toggle**. |

---

## 📁 Project Architecture

```
nybix-site/
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD on push to main
├── public/
│   ├── logo/                   # Clean & white official SVG/PNG logos
│   └── previous/               # Static bundle of the previous generic v1
├── src/
│   ├── assets/
│   │   └── logo/               # Bundled logo assets (bundled via Vite)
│   ├── components/
│   │   ├── ui/                 # Reusable Button, Card, Modal, SectionHeader
│   │   ├── layout/             # Reusable Navbar, Footer, MobileNav
│   │   ├── AboutSection.jsx    # Official About Us, Mission & Vision component
│   │   ├── ClientLogoCloud.jsx # PARCO, IMC Toyota, PSO logo showcase
│   │   ├── CompareModal.jsx    # 7-template comparison decision matrix
│   │   ├── ContactModal.jsx    # Executive consultation & scoping modal
│   │   ├── TemplateSwitcher.jsx# Top single-row responsive controller bar
│   │   └── ThemePicker.jsx     # Floating 6-theme live palette customizer
│   ├── data/
│   │   ├── company.js          # Single source of truth (phones, hubs, clients, products)
│   │   ├── caseStudies.js      # Client case studies (PARCO, IMC, PSO)
│   │   ├── navigation.js       # Navigation links and template switcher tabs
│   │   ├── services.js         # Service offerings breakdown
│   │   ├── solutions.js        # Core solutions & product specs
│   │   └── themes.js           # 6 selectable enterprise color palettes
│   ├── templates/              # The 7 complete design templates
│   ├── App.jsx                 # Root orchestration component
│   ├── index.css               # Tailwind v4 theme variables, animations & utilities
│   └── main.jsx                # React 19 application mount
├── package.json
└── vite.config.js              # Vite configuration (base: './')
```

---

## 🏢 Centralized Company Data

All official company details are managed in a single central file at [`src/data/company.js`](src/data/company.js):

* **Company Name**: Nyabix Technologies
* **Email**: `nyabix.tech@gmail.com`
* **Phone (PK)**: `+92 300 1NYABIX` / `+92 300 1692249`
* **Phone (USA)**: `+1 (469) 805-2733`
* **Global Hubs**: Dallas, Texas (USA) • Karachi (Pakistan)
* **Real Clients**: Pak-Arab Refinery Limited (PARCO), Indus Motor Company (Toyota), Pakistan State Oil (PSO)
* **Proprietary Products**: AP Console (Autonomous AI OCR Invoicing), Trip Planner (Multi-Leg Route Engine)

---

## 🌿 Git Branches

* **`main`**: Production branch. Pushes to this branch automatically trigger GitHub Actions to build and deploy to GitHub Pages.
* **`feature/wow-factor-templates`**: Feature development branch for Templates 5, 6, 7 and modern enhancements.
* **`archive/v1-generic-templates`**: Permanent archive of the earlier 4-template generic version without company details.

---

## 📄 License & Proprietary Rights
© 2026 Nyabix Technologies. All rights reserved.

