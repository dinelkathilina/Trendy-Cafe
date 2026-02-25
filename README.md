# Trendy Local Cafe

A modern, responsive, and animated landing page for a local cafe built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Next.js App Router**: Built using the latest Next.js 15+ features for optimal performance.
- **Tailwind CSS v4**: Styled entirely with utility classes for a clean and maintainable design.
- **Framer Motion**: Smooth, high-quality animations including a morphing hamburger menu, staggered list reveals, and modal transitions.
- **Fully Responsive**: Designed to look great on mobile, tablet, and desktop devices.
- **Custom Typography**: Uses Google Fonts (`Outfit` and `Caveat`) optimized via `next/font`.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v18.17.0 or newer)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

If you haven't already, clone the project to your local machine:

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### 2. Install dependencies

Install all required npm packages:

```bash
npm install
```

### 3. Run the development server

Start the Next.js development server:

```bash
npm run dev
```

### 4. View the application

Open your browser and navigate to:

```
http://localhost:3000
```

You should now see the Trendy Local Cafe landing page running locally!

## Project Structure

- `src/app/page.tsx`: The main landing page containing the hero section, menu, story, and footer.
- `src/app/layout.tsx`: The root layout defining global fonts and HTML structure.
- `src/app/globals.css`: Global CSS file containing Tailwind imports and custom font variables.
- `src/components/SignInModal.tsx`: The animated sign-in modal component.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production usage.
- `npm run start`: Starts a Next.js production server (requires `npm run build` first).
- `npm run lint`: Runs ESLint to catch potential issues in the code.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/) (Icons)
