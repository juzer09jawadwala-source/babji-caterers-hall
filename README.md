# 🍽️ Babji Caterers & Hall

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A high-performance, responsive luxury web application and digital booking portal for **Babji Caterers & Hall** (Sitafalwadi, Mazgaon, Mumbai), celebrating traditional Bohra culinary heritage and premier event hall hospitality since 1965.

---

## ✨ Key Features

- **🏛️ Interactive Banquet & Hall Tour**: Explore detailed venue layouts, amenities, capacity breakdown, and booking requirements with fluid visual transitions.
- **🍛 Authentic Bohra Catering Menus**: Rich digital showcase of signature dishes (Kharas, Mithas, Biryani, and traditional Bohra Thaal presentations) with dietary customization.
- **📅 Real-Time Booking & Enquiries**: Seamless booking flow backed by MongoDB Atlas to manage event dates, guest counts, and customer inquiries.
- **⚡ 60 FPS Fluid Interactions**: Smooth scrolling powered by **Lenis** and physics-based micro-interactions powered by **Framer Motion**.
- **📱 Fully Responsive**: Pixel-perfect typography and layouts designed to look stunning across smartphones, tablets, and ultra-wide displays.
- **🚀 SEO & Social Sharing Optimized**: Dynamic OpenGraph metadata, structured JSON-LD schema, and fast Core Web Vitals performance.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Server-side rendering, static generation, API routes |
| **Frontend UI** | React 19 + TypeScript | Type-safe component architecture |
| **Styling** | Tailwind CSS + Radix UI | Modern utility-first design system and accessible primitives |
| **Motion** | Framer Motion & Lenis | Smooth scrolling and interactive UI transitions |
| **Database** | MongoDB Atlas | Cloud persistence for bookings and inquiries |
| **Icons** | Lucide React | Clean, scalable vector iconography |
| **Hosting** | Vercel | Global edge CDN and automatic CI/CD deployment |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/juzer09jawadwala-source/babji-caterers-hall.git
cd babji-caterers-hall
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the project root:
```bash
cp .env.example .env.local
```

Populate the variables:
```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=babji_db
```
*(Note: Database connection is optional for viewing static pages, but required for saving live event inquiries).*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore the live application.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── public/
│   ├── images/              # High-resolution optimized imagery
│   └── videos/              # Compressed background video loops
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API routes (bookings, enquiries)
│   │   ├── catering/        # Bohra catering menus & packages
│   │   ├── hall/            # Hall specifications & 3D tour
│   │   ├── layout.tsx       # Root layout, fonts & metadata
│   │   └── page.tsx         # Immersive landing page
│   ├── components/          # Reusable UI component library
│   ├── hooks/               # Custom hooks (scroll, resize, animations)
│   └── lib/                 # Database connection & utility helpers
├── .env.example             # Template environment configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Custom design tokens and styling themes
└── tsconfig.json            # TypeScript configuration
```

---

## 🌐 Deployment to Vercel

This repository is pre-configured for zero-friction deployment on [Vercel](https://vercel.com/):

1. Push your changes to GitHub.
2. In the Vercel dashboard, click **Add New** &rarr; **Project** and select `babji-caterers-hall`.
3. Vercel automatically detects Next.js.
4. Add your `MONGO_URL` and `DB_NAME` under **Environment Variables**.
5. Click **Deploy**.

---

## 📄 License & Credits

Distributed under the MIT License. Built with ❤️ for **Babji Caterers & Hall**, Mumbai.