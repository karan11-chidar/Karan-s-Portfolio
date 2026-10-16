# Karan's Portfolio

A clean, responsive portfolio website built with React, Vite, and Tailwind CSS. The project is designed to provide a fast, modern foundation for presenting Karan's work, skills, experience, and professional profile online.

## Overview

This portfolio uses a lightweight React application with Tailwind CSS for utility-first styling. It is configured for a quick local development experience and an optimized production build.

### Highlights

- React 19 application with a component-based structure
- Vite-powered development server and production bundling
- Tailwind CSS 4 for responsive styling
- Responsive page foundation suitable for desktop and mobile layouts
- Favicon and search-engine metadata configured in `index.html`
- ESLint configured for code quality checks

## Technology Stack

- **Frontend:** React
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** JavaScript with JSX
- **Code quality:** ESLint

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Karan_Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, typically:

   ```
   http://localhost:5173
   ```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |
| `npm start` | Alias for `npm run dev` |

## Project Structure

```text
Karan_Portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application-specific styles
│   ├── index.css        # Global styles and Tailwind import
│   └── main.jsx         # React application entry point
├── index.html           # HTML shell and SEO metadata
├── package.json         # Scripts and dependencies
└── README.md
```

## Customization

To personalize the portfolio:

1. Update the content and sections in `src/App.jsx`.
2. Add reusable React components as the page grows.
3. Adjust responsive styles with Tailwind utility classes.
4. Add global design tokens or custom CSS in `src/index.css`.
5. Replace the metadata, title, and social preview values in `index.html`.
6. Add project images and other static assets to `public/`.

## Production Build

Generate the production bundle with:

```bash
npm run build
```

The compiled files are written to the `dist/` directory and can be deployed to any static hosting provider, including GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Quality Checks

Before publishing changes, run:

```bash
npm run lint
npm run build
```

## License

This project is a personal portfolio. Unless otherwise stated, the content, branding, and visual assets are owned by Karan. Contact the project owner before reusing them.
