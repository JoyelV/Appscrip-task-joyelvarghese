# E-Commerce Product Listing Application

Welcome to the E-Commerce Product Listing Application, a Next.js-based web application designed to display a catalog of products with filtering options and a responsive design. This project leverages the power of Next.js for server-side rendering and static site generation, integrated with a public API for product data, and features a modern, mobile-friendly UI.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
This application fetches product data from a public API and presents it in a grid layout with 3 products per row on desktop, adapting to 2 columns on tablets and 1 column on mobile devices. It includes a filter sidebar, recommended sorting options, and a styled header/footer for an e-commerce experience. The project is built with TypeScript for type safety and follows modern web development practices.

## Features
- Responsive design for desktop, tablet, and mobile devices.
- Product grid with 3 cards per row (desktop), 2 (tablet), and 1 (mobile).
- Filter sidebar with customizable categories.
- Recommended sorting options (e.g., newest first, price high to low).
- Dynamic product data fetched from the FakeStore API.
- Interactive like button on product cards.
- Styled header with navigation and footer with subscription form.

## Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn
- Git (for version control)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JoyelV/appscrip-task-joyelvarghese.git
   cd e-commerce-product-listing
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Ensure all image assets are placed in the `public/icons/` directory (e.g., `down-arrow-logo.png`, `heart-logo.png`).

## Usage
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Explore the product listings, toggle filters, and test responsiveness by resizing the window or using device emulation in dev tools.

## Project Structure
```
e-commerce-product-listing/
├── public/
│   └── icons/              # Static image assets (e.g., down-arrow-logo.png)
├── src/
│   ├── app/               # Next.js pages (e.g., page.tsx)
│   ├── features/          # Feature-specific components (e.g., Products, ProductCard)
│   ├── shared/            # Shared types and utilities (e.g., product.ts)
│   ├── stores/            # Data stores (e.g., filterData.ts)
│   └── styles/            # Global styles (e.g., globals.css)
├── .eslintrc              # ESLint configuration
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── README.md              # This file
└── tsconfig.json          # TypeScript configuration
```

## API Integration
- **Source**: The application fetches product data from the [FakeStore API](https://fakestoreapi.com/products).
- **Endpoint**: `https://fakestoreapi.com/products`
- **Data Structure**: The API returns an array of objects with `id`, `image`, `price`, and `title`. The app adds an optional `inStock` property for type safety.
- **Note**: This is a public API; for production, consider a custom backend or caching strategy.

## Development
- **Running Locally**: Use `npm run dev` to start the development server.
- **Linting**: Run `npm run lint` to check for ESLint issues.
- **Type Checking**: Run `npm run type-check` to validate TypeScript types.
- **Building**: Run `npm run build` to create a production build.
- **Adding Features**: Extend the `filterData` in `stores/filterData.ts` or modify `Products.tsx` to add new filters or sorting logic.

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Export the static site (optional):
   ```bash
   npm run export
   ```
3. Deploy using a platform like Vercel, Netlify, or GitHub Pages:
   - **Vercel**: Push to a Git repository and connect to Vercel for automatic deployment.
   - **Netlify**: Use `netlify deploy` with the build folder.
   - Update the `homepage` in `package.json` if needed for GitHub Pages.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request with a detailed description of your changes.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms.

## Contact
- **Author**: [Your Name]
- **Email**: your.email@example.com
- **GitHub**: [https://github.com/your-username](https://github.com/your-username)
- For issues or suggestions, please open an issue on the GitHub repository.

```