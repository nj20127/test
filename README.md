# QT Labs - Quantum Technology Research & Innovation

A modern, high-performance website for QT Labs, showcasing cutting-edge research in quantum computing, cryptography, and sensing technologies.

## 🚀 Features

- **Modern Design**: Clean, sophisticated interface with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Built with Next.js 14 for blazing-fast load times
- **SEO Friendly**: Comprehensive metadata and semantic HTML structure
- **Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **Type Safe**: Built with TypeScript for robust, maintainable code

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) with static export
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **Deployment**: GitHub Pages via GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nj20127/test.git
cd test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🏗️ Building for Production

### Local Build

To create a production build locally:

```bash
npm run build
```

This will generate a static site in the `out/` directory that can be deployed to any static hosting service.

### Preview Production Build

To preview the production build locally:

```bash
npm run build
npx serve@latest out
```

## 🚢 Deployment to GitHub Pages

The site automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

### Automatic Deployment (Recommended)

1. Push your changes to the main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. GitHub Actions will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Make it available at: `https://nj20127.github.io/test/`

### Manual Deployment

You can also trigger a deployment manually:

1. Go to the **Actions** tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### First-Time Setup

If this is your first time deploying to GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: Select **GitHub Actions**
3. The site will be available at `https://nj20127.github.io/test/`

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page with all sections
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, About, Research, etc.)
│   └── ui/               # Reusable UI components (Button, Card, etc.)
├── public/               # Static assets
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml    # GitHub Pages deployment workflow
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

The site uses a custom design system with:

- **Colors**: Indigo/purple gradient theme with cyan accents
- **Typography**: Inter for body text, Space Grotesk for display text
- **Spacing**: Consistent 8px base unit system
- **Components**: Reusable UI components with consistent styling

All design tokens are defined in `app/globals.css` as CSS custom properties.

## 🧩 Key Sections

1. **Hero**: Attention-grabbing headline with animated stats
2. **About**: Core values and mission statement
3. **Research**: Active research areas in quantum technology
4. **Technology**: Tech stack and capabilities visualization
5. **Team**: Leadership and key researchers
6. **Contact**: Contact form and office information

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

Built with precision and care by the QT Labs team in Vienna, Austria.

## 📞 Contact

- **Email**: contact@qtlabs.at
- **Location**: Vienna, Austria
- **Office Hours**: Monday - Friday, 9:00 AM - 6:00 PM CET

---

**Built with [Next.js](https://nextjs.org) | Deployed on [GitHub Pages](https://pages.github.com)**
