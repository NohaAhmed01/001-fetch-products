# Fetch Products (React)

A small React app that loads products from [Fake Store API](https://fakestoreapi.com/), shows them in a flex grid, and lets you narrow the list by **category** and **title search** at the same time.

## Features

- **Fetch products** from `https://fakestoreapi.com/products` on first load
- **Loading and error** UI while the request runs or if it fails
- **Search** — text input filters by product title (case-insensitive)
- **Category filters** — buttons for: all, men’s clothing, women’s clothing, jewelery, electronics (matches Fake Store API category strings)
- **Combined filtering** — only products that match the selected category **and** the current search string are shown
- **Product cards** — thumbnail image and title for each item

## Tech stack

- **React** 19 with Create React App (`react-scripts`)
- Inline styles in `App.js` for layout and filter buttons; global styles in `src/index.css`

## Getting started

### Prerequisites

- Node.js and npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

- `useEffect` runs once on mount, `fetch`es the products JSON, then updates `products` state (or sets an error).
- `search` and `selectedCategory` drive a single `filteredProducts` list: each product must pass both the category rule (`"all"` shows every category) and the title substring match for the search box.
- `Products` renders image + title; `Button` wraps each category control and highlights the active filter.

## Project structure

- `src/App.js` — data fetching, state, search + category UI, and small presentational helpers
- `src/index.js` — app entry
- `src/index.css` — base styles
- `public/` — CRA HTML template and static assets

## Scripts

- `npm start` — development server
- `npm test` — tests (watch mode)
- `npm run build` — production build

## Possible next steps

- Show price, rating, and category on each card
- Responsive grid and shared design tokens instead of only inline styles
- Split `Products` and `Button` into `src/components/` if the file grows
