# QT Labs - Professional Website

A modern, professional website for QT Labs, designed with cutting-edge web technologies and inspired by leading digital design studios.

## Overview

This website showcases QT Labs' quantum technology research and innovation with a sleek, modern design that includes:

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern Aesthetics**: Dark theme with gradient accents and smooth animations
- **Interactive Elements**: Smooth scrolling, parallax effects, and engaging user interactions
- **Professional Layout**: Clean, organized sections highlighting research, technology, team, and contact information

## Features

### Design Elements
- ✨ Animated gradient orbs in hero section
- 🎨 Modern color scheme with primary (#6366f1), secondary (#22d3ee), and accent (#a855f7) colors
- 📱 Mobile-first responsive design
- 🌊 Smooth scroll animations and transitions
- 💫 Parallax scrolling effects
- ⚡ Intersection Observer API for performance-optimized animations

### Sections
1. **Hero Section**: Eye-catching introduction with animated background and key statistics
2. **About Section**: Three-card layout showcasing core values and expertise
3. **Research Areas**: Four key research domains with detailed descriptions
4. **Technology Section**: Interactive visualization of quantum technology principles
5. **Team Section**: Professional team member showcase
6. **Contact Section**: Comprehensive contact form and information
7. **Footer**: Complete navigation and social links

### Technical Features
- Semantic HTML5 markup
- CSS3 with modern features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (no dependencies required)
- Optimized performance with debounced scroll handlers
- Smooth animations with CSS transitions and JavaScript
- Form validation and submission handling
- Mobile navigation menu with hamburger toggle

## Tech Stack

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Advanced styling with custom properties, animations, and gradients
- **JavaScript**: Vanilla JS for interactions and animations
- **Fonts**: Inter and Space Grotesk from Google Fonts

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js and npm for development server

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test
```

2. Open the website:
   - **Option 1**: Simply open `index.html` in your browser
   - **Option 2**: Use a development server:
   ```bash
   npm start
   # or
   npm run dev
   ```

### File Structure

```
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling and animations
├── script.js           # Interactive features and animations
├── package.json        # Project configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Customization

### Colors
Edit the CSS custom properties in `styles.css` (lines 15-21):
```css
:root {
    --primary: #6366f1;      /* Main brand color */
    --secondary: #22d3ee;     /* Accent color */
    --accent: #a855f7;        /* Highlight color */
    /* ... */
}
```

### Content
- Update text directly in `index.html`
- Replace placeholder team member names and descriptions
- Add your own images by updating the avatar placeholders

### Typography
The website uses two font families:
- **Inter**: Body text and general content
- **Space Grotesk**: Headings and display text

To change fonts, update the Google Fonts link in `index.html` and the font-family declarations in `styles.css`.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance with:
- Minimal dependencies (zero external JS libraries)
- Debounced scroll handlers
- Intersection Observer for efficient animations
- CSS-based animations (GPU accelerated)
- Lazy loading support for images

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios

## Future Enhancements

Potential additions for further development:
- [ ] Add real team member photos
- [ ] Implement backend for contact form
- [ ] Add blog/news section
- [ ] Create individual research project pages
- [ ] Add multilingual support
- [ ] Implement dark/light theme toggle
- [ ] Add loading animations
- [ ] Integration with analytics

## License

MIT License - feel free to use and modify for your own projects.

## Credits

Designed and developed with modern web standards and best practices. Inspired by leading tech companies in the quantum computing space.

---

**QT Labs** - Pioneering Quantum Technology Research and Innovation