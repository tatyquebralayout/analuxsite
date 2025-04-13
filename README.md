# AmanluxDog - Premium Dog Care Website

![AmanluxDog Logo](https://iili.io/3dgK2Zg.png)

## Overview

AmanluxDog is a premium dog care services website built with React, TypeScript, and Tailwind CSS. The website offers a multilingual experience (Portuguese, English, Spanish, French, and German) and showcases various dog care services, including daycare, hotel, training, taxi service, and grooming.

## Live Demo

Check out the live demo: [AmanluxDog Website](https://frolicking-pothos-f0e419.netlify.app)

## Features

### 🌐 Multilingual Support
- Complete translations in 5 languages (Portuguese, English, Spanish, French, German)
- Easy language switching with flag icons
- Modular translation system for easy maintenance

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Smooth animations using Framer Motion
- Beautiful image gallery with lightbox functionality
- Interactive components with hover effects

### 📱 Mobile Optimized
- Fully responsive layout
- Mobile navigation menu
- Touch-adapted interactive elements

### 🔍 SEO Optimized
- Semantic HTML structure
- Meta tags for better search engine visibility
- Fast loading times

### 🚀 Performance Optimized
- Automatic performance detection for low-end devices
- Reduced animations for users with reduced motion preferences
- Lazy loading of images and components
- Route-based code splitting for faster initial loading

### 🧩 Modular Architecture
- Component-based design for reusability
- Context API for state management
- Custom hooks for shared functionality
- Route-based code splitting

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Project Structure

```
amanluxdog-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── flags/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── components/
│   │   ├── about/
│   │   │   └── Team.tsx
│   │   ├── common/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   └── Location.tsx
│   │   ├── home/
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Advantages.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   ├── Partnership.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Testimonials.tsx
│   │   └── partnership/
│   │       └── PartnershipSection.tsx
│   ├── contexts/
│   │   ├── LanguageContext.tsx
│   │   └── PerformanceContext.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Partnership.tsx
│   │   ├── Services.tsx
│   │   └── ServiceDetails.tsx
│   ├── routes/
│   │   └── index.tsx
│   ├── utils/
│   │   ├── hooks/
│   │   │   ├── useAnimatedCounter.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── usePerformanceOptimizer.ts
│   │   │   └── useScrollToTop.ts
│   │   └── translations/
│   │       ├── de.ts
│   │       ├── en.ts
│   │       ├── es.ts
│   │       ├── fr.ts
│   │       ├── index.ts
│   │       ├── pt.ts
│   │       └── types.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Pages

### Home Page
- Hero section with call-to-action
- Services overview
- Advantages section with animated counters
- About us section
- Testimonials carousel
- Image gallery with lightbox
- FAQ accordion
- Instagram feed
- Contact form and location map

### Services Page
- Services overview with tabs for different categories
- Detailed service cards with pricing
- Online consultation section
- Call-to-action for contact

### About Page
- Company information
- Team members section
- Mission and values

### Partnership Page
- Partnership opportunities
- Benefits of partnering
- Contact form for potential partners

### Contact Page
- Contact form
- Location map
- Business hours and contact information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/amanluxdog-website.git
cd amanluxdog-website
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Deployment

The website is deployed on Netlify. You can deploy your own version by:

1. Building the project:
```bash
npm run build
```

2. Deploying the content of the `dist` directory to your preferred hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## Browser Support

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Performance Considerations

### Cookies

The website uses cookies for:

1. Language preference
2. Performance settings

Users can opt out of cookies through privacy settings.

### Accessibility

The website follows WCAG 2.1 guidelines:

1. Appropriate contrast ratios
2. Keyboard navigation
3. Screen reader compatibility
4. Respects reduced motion preferences

## Future Improvements

1. **Admin Dashboard**: For managing bookings and content
2. **Online Booking System**: Direct booking and payment
3. **Client Portal**: For clients to manage their pets' schedules
4. **Blog Section**: For sharing pet care tips and news
5. **Progressive Web App (PWA)**: For offline access

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for the beautiful images