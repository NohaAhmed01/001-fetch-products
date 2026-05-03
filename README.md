# Fetch Products (React)

A small React app that **fetches products from [Fake Store API](https://fakestoreapi.com/)**, displays them in a simple grid, and lets you **filter by category** using buttons.

## Features

- **Fetch products** from `https://fakestoreapi.com/products`
- **Loading + error states**
- **Category filters**:
  - `all`
  - `men's clothing`
  - `women's clothing`
  - `jewelery`
  - `electronics`

## Tech stack

- **React** (Create React App / `react-scripts`)
- Plain CSS (see `src/index.css`)

## Getting started

### Prerequisites

- Node.js + npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

## How it works (quick overview)

- The main component (`src/App.js`) calls `fetch(...)` inside `useEffect` on first render.
- Data is stored in `products` state.
- A `selectedCategory` state controls filtering; when it’s `"all"` the full list is shown, otherwise the list is filtered by `product.category`.

## Project structure

- `src/App.js`: fetching, filtering, and UI rendering
- `src/index.js`: React entry point
- `public/`: CRA HTML template and static assets

## Scripts

- `npm start`: run dev server
- `npm test`: run tests (watch mode)
- `npm run build`: build production bundle

## Notes / ideas to improve

- Add product price, rating, and category labels
- Improve layout with a responsive grid + nicer styling
- Extract `Products` and `Button` into separate components
- Add a search input (title-based filtering)
