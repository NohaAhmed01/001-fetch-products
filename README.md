# Fetch Products (React)

A React storefront app that loads products from the [Fake Store API](https://fakestoreapi.com/), lets you search and filter them, and opens a detailed modal when you view a product.

## Features

- **Product fetching** — loads all products from `https://fakestoreapi.com/products` on mount, with loading and error handling
- **Search** — filters products by title (case-insensitive) via a header search input
- **Category filters** — dynamically generated tabs from the API response, plus an `"all"` option
- **Combined filtering** — products must match both the selected category and the current search query
- **Product cards** — image, title, short description preview, price, and a **View Product** button
- **Modal view** — full product details (title, category, description, price) in a responsive overlay; body scroll is locked while open
- **UI polish** — dark theme with CSS variables, loading spinner, error messages, header with logo, and fixed footer
- **Loading and error** — UI handling while the request loads or if it fails.

## Tech stack

- **React** 19 with Create React App (`react-scripts`)
- Component-scoped CSS files plus global styles and CSS variables in `src/index.css`
- **Fake Store API** for product data

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

1. `App.js` fetches products in a `useEffect` using `async/await`, sets loading state, and handles HTTP errors.
2. `search` and `selectedCategory` state drive `filteredProducts` — each product must match the category filter (`"all"` shows everything) and include the search string in its title.
3. Unique categories are derived from the fetched data and passed to `FilterTabs`.
4. Each `Product` card toggles a `ModalView` that shows the full item and prevents background scrolling while open.

## Project structure

```
src/
├── index.js                 # React entry point
├── index.css                # Global theme, layout grid, responsive breakpoints
└── Components/
    ├── App.js               # Fetching, filtering, and page layout
    ├── Header.js            # Top navigation wrapper
    ├── Logo.js              # App title
    ├── Footer.js            # Copyright footer
    ├── Error.js             # Inline error / empty-state message
    ├── Search/              # Search input
    ├── FilterTabs/          # Category filter buttons
    ├── Button/              # Shared button (filters + view product)
    ├── Product/             # Product card
    ├── ModalView/           # Product detail modal
    └── Loader/              # Loading spinner
public/                      # CRA HTML template and static assets
```

## Scripts

- `npm start` — development server
- `npm test` — tests (watch mode)
- `npm run build` — production build

## Possible next steps

- Close the modal when clicking the overlay or pressing Escape
- Add sorting (price, title, rating)
- Show star rating on product cards
- Add pagination or a “load more” pattern for large catalogs
