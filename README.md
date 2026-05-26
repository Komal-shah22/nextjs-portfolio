# 🚀 Komal Shah - Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.13-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer)

**A modern, responsive, and accessible portfolio website showcasing my journey as a Full-Stack & AI Developer**

[View Demo](https://komalshah-portfolio.vercel.app) · [Report Bug](https://github.com/Komal-shah22/nextjs-portfolio/issues) · [Request Feature](https://github.com/Komal-shah22/nextjs-portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

This portfolio website represents my professional journey as a Full-Stack and AI Developer. Built with modern web technologies, it showcases my projects, skills, and experience in an interactive and visually appealing manner.

### ✨ Key Highlights

- 🎨 **Modern Design**: Clean, professional UI with gradient effects and smooth transitions
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ♿ **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Performance Optimized**: Fast loading times with Next.js static generation
- 🎬 **Smooth Animations**: Engaging scroll animations using Framer Motion
- 🔍 **SEO Ready**: Comprehensive meta tags and sitemap for better discoverability

---

## ✨ Features

### 🎨 User Interface
- ✅ Smooth scroll animations throughout the site
- ✅ Interactive project carousel with navigation
- ✅ Animated skill progress bars
- ✅ Responsive mobile navigation menu
- ✅ Gradient text effects and hover animations
- ✅ Professional 404 error page
- ✅ Loading states for better UX

### ♿ Accessibility
- ✅ Skip-to-content link for keyboard users
- ✅ ARIA labels on all interactive elements
- ✅ Focus indicators for keyboard navigation
- ✅ Semantic HTML structure
- ✅ Reduced motion support for sensitive users

### 🔍 SEO & Performance
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Optimized images with Next.js Image component
- ✅ Static page generation for fast loading

### 📧 Contact Features
- ✅ Integrated contact form with Formspree
- ✅ Social media links (GitHub, LinkedIn, Instagram, Facebook)
- ✅ Direct email link
- ✅ Form validation and success feedback

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library

### Tools & Services
- **Form Handling**: [Formspree](https://formspree.io/) - Form backend service
- **Fonts**: [Google Fonts (Sora)](https://fonts.google.com/) - Custom typography
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Komal-shah22/nextjs-portfolio.git
   cd nextjs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
nextjs-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # 404 error page
│   ├── loading.tsx          # Loading component
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── globals.css          # Global styles
│   └── fonts/               # Custom fonts
├── components/              # React components
│   └── Helper/
│       ├── Home/            # Home page sections
│       │   ├── Hero/        # Hero section
│       │   ├── about/       # About section
│       │   ├── skills/      # Skills section
│       │   ├── projects/    # Projects carousel
│       │   ├── contact/     # Contact form
│       │   ├── footer/      # Footer
│       │   └── Navbar/      # Navigation
│       ├── Home.tsx         # Main home component
│       └── SkipToContent.tsx # Accessibility component
├── constant/                # Constants and config
│   └── constant.ts          # Navigation links
├── Data/                    # Data files
│   └── data.ts              # Personal information
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── robots.txt           # SEO robots file
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Configure Domain** (Optional)
   - Add your custom domain in Vercel settings
   - Update `metadataBase` in `app/layout.tsx`

### Environment Variables

If you need to add environment variables:
1. Create `.env.local` file
2. Add your variables
3. Configure them in Vercel dashboard

---

## ⚡ Performance

### Build Statistics
- **Page Size**: 143 kB (First Load JS)
- **Build Time**: ~15 seconds
- **Static Pages**: All pages pre-rendered
- **Lighthouse Score**: 
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

### Optimization Techniques
- ✅ Static Site Generation (SSG)
- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ Minified CSS and JavaScript
- ✅ Font optimization with next/font

---

## 📧 Contact

**Komal Shah** - Full Stack & AI Developer

- 📧 Email: [komalfareed93@gmail.com](mailto:komalfareed93@gmail.com)
- 💼 LinkedIn: [Komal Shah](https://www.linkedin.com/in/komal-shah-0b162a296/)
- 🐙 GitHub: [@Komal-shah22](https://github.com/Komal-shah22)
- 📸 Instagram: [@mirrordoll3](https://www.instagram.com/mirrordoll3)

**Project Link**: [https://github.com/Komal-shah22/nextjs-portfolio](https://github.com/Komal-shah22/nextjs-portfolio)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Formspree](https://formspree.io/)
- [Vercel](https://vercel.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you like this project, please give it a star on GitHub! ⭐**

Made with ❤️ by [Komal Shah](https://github.com/Komal-shah22)

</div>
