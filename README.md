# Babji Caterers & Hall

A high-performance, responsive luxury web application for Babji Caterers & Hall (Sitafalwadi, Mazgaon, Mumbai), serving authentic Bohra cuisine and function hall bookings since 1965.

## 🛠 Framework & Stack

- **Framework**: Next.js 15 (App Router, Server-side Rendering & Static Generation)
- **UI Library**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Lenis Smooth Scroll
- **Database**: MongoDB (Atlas)
- **Package Manager**: npm

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### 3. Production Build
```bash
npm run build
npm run start
```

## 🌐 Vercel Deployment

This project is fully optimized and configured for seamless zero-config deployment on Vercel:

1. Push your repository to GitHub.
2. In Vercel, click **Add New Project** and import the GitHub repository.
3. Vercel automatically detects **Next.js** as the framework preset.
4. (Optional) Under **Environment Variables**, add:
   - `MONGO_URL`: Your MongoDB Atlas connection URI
   - `DB_NAME`: `babji_db`
5. Click **Deploy**.

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

| Variable | Description | Required |
| --- | --- | --- |
| `MONGO_URL` | MongoDB Atlas connection string | Optional for preview/static pages, recommended for enquiry persistence |
| `DB_NAME` | MongoDB database name (default: `babji_db`) | Optional |

## 📁 Project Structure

```
├── public/
│   ├── images/          # Optimized production web assets
│   └── videos/          # Compressed high-definition video assets
├── src/
│   ├── app/             # Next.js App Router pages & API handlers
│   │   ├── api/         # Serverless API routes (MongoDB bookings/status)
│   │   ├── catering/    # Catering showcase & menus
│   │   ├── hall/        # The Hall specifications & tour
│   │   ├── icon.png     # Dynamic website favicon
│   │   ├── layout.tsx   # Root layout, fonts, SEO metadata
│   │   └── page.tsx     # Homepage
│   ├── components/      # Modular React UI components
│   ├── hooks/           # Custom React hooks (smooth scroll, animations)
│   └── lib/             # Utilities and MongoDB connection helpers
├── .env.example         # Example environment variables template
├── .gitignore           # Standard production git exclusions
├── next.config.js       # Next.js production configuration
├── tailwind.config.js   # Tailwind design tokens and animations
└── tsconfig.json        # TypeScript configuration
```
