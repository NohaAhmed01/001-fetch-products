# Fetch Products (React)

A small React app that loads products from [Fake Store API](https://fakestoreapi.com/), displays them in a simple grid, and lets you narrow the list by **category** and **title search** at the same time.

## Features

- **Fetch products** from `https://fakestoreapi.com/products` on first load
- **Loading and error** UI while the request runs or if it fails
- **Search** — text input filters by product title (case-insensitive)
- **Category filters** — category buttons are generated from the fetched products (plus an `"all"` option)
- **Combined filtering** — only products that match the selected category **and** the current search string are shown
- **Product cards** — image, title, short description preview, and price

## Tech stack

- **React** 19 with Create React App (`react-scripts`)
- Inline styles for layout; global styles in `src/index.css`

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

- A `useEffect` fetches the products JSON, then updates `products` state (or sets an error).
- `search` and `selectedCategory` drive `filteredProducts`: each product must match both the selected category (`"all"` shows every category) and the search substring match.
- Category buttons are built from the unique `category` values found in the API response.

## Project structure

- `src/Components/App.js` — data fetching + state, search input, category buttons, and product grid
- `src/Components/Product.jsx` — product card UI
- `src/Components/Search.jsx` — search input UI
- `src/Components/Button.jsx` — category button UI
- `src/index.js` — app entry
- `src/index.css` — base styles
- `public/` — CRA HTML template and static assets

## Scripts

- `npm start` — development server
- `npm test` — tests (watch mode)
- `npm run build` — production build

## Possible next steps

- Make the grid responsive (e.g. auto-fit columns) and move inline styles to CSS
- Add a sort dropdown (price / title) and show rating + category on each card
- Add pagination / “load more”
