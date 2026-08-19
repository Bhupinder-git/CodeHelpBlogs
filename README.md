# CodeHelp Blogs

A responsive blog application built with React, Vite, and Tailwind CSS. It fetches blog content from the CodeHelp API and allows users to browse posts, view details, filter by category and tags, and navigate through paginated content.

## Features

- Home page with a list of blog cards
- Pagination for blog listings
- Blog detail view with article content
- Related blog suggestions on each post
- Category-based navigation
- Tag-based filtering
- Clean and responsive UI
- Client-side routing with React Router

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Tailwind CSS
- React Icons
- ESLint

## Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Header.jsx
│   ├── MainHeader.jsx
│   ├── Blogs.jsx
│   ├── Blog.jsx
│   ├── BlogDetails.jsx
│   ├── BlogsDetail.jsx
│   ├── Pagination.jsx
│   └── Spinner.jsx
├── context/
│   └── AppContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── BlogPage.jsx
│   ├── TagPage.jsx
│   └── CategoryPage.jsx
└── assets/
```

## API

The app uses the CodeHelp blog API:

```bash
https://codehelp-apis.vercel.app/api/get-blogs
```

The context layer in `src/context/AppContext.jsx` handles fetching posts, blog details, and page metadata.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Notes

This project demonstrates a complete blog experience using React state management, route-based data fetching, and reusable UI components. It is a solid example of building a modern content-driven frontend application.
