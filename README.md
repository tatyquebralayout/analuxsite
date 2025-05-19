# Amanlux Dog - Premium Dog Care Website

![Amanlux Dog Logo](https://iili.io/3dgK2Zg.png)

## Overview

Amanlux Dog is a premium dog care services website built with React, TypeScript, and Tailwind CSS. The website is presented in German and showcases various dog care services, including daycare, hotel, training, taxi service, and grooming.

## Live Demo

Check out the live demo: [AmanluxDog Website](https://frolicking-pothos-f0e419.netlify.app)

## Features

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
- **Code Quality**: ESLint (config: `eslint.config.js`), Prettier (config: `.prettierrc`)

## Project Structure

```text
analuxsite/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── video/
│   │   ├── images/
│   │   └── index.ts      // Este index.ts é de assets
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
│   │       ├── de/           // Diretório com as traduções em alemão
│   │       │   ├── common.ts
│   │       │   ├── index.ts
│   │       │   └── pages.ts
│   │       ├── index.ts      // Agregador principal de traduções (agora apenas para alemão)
│   │       └── types.ts      // Tipos para as traduções
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── eslint.config.js
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
git clone https://github.com/tatyquebralayout/analuxsite.git
cd analuxsite
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

### Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run render-build`: Custom build script, possibly for a specific hosting service like Render.
- `npm run start`: Serves the production build from the `dist` folder.
- `npm run lint`: Lints the project files using ESLint.
- `npm run preview`: Serves the production build locally for preview.
- `npm run test`: Runs tests using Vitest.
- `npm run test:ui`: Runs tests with the Vitest UI.
- `npm run coverage`: Generates a test coverage report.

## Deployment

The website is configured for deployment on Vercel. You can deploy your own version by:

1. Building the project:

```bash
npm run build
```

2. Deploying the content of the `dist` directory to Vercel (or another preferred hosting provider like Netlify, GitHub Pages, etc.)

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

1. Performance settings

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
