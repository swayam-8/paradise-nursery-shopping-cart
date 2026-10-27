# Paradise Nursery Shopping Cart

A responsive houseplant shop for **swayam-8**, built with React, Redux Toolkit, and Vite.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm test
```

## Features

- Paradise Nursery landing page with a background photograph, company details, and Get Started button.
- Eighteen unique houseplants in three categories, with six plants per category.
- Product thumbnails, prices, category filters, and Add to Cart buttons that disable after adding a plant.
- Shared Home, Plants, and Cart navigation with a dynamic total quantity badge.
- Redux cart with per-item totals, total amount, quantity increase/decrease, removal, continue shopping, and a Coming Soon checkout message.
- Decreasing a quantity of one removes the item. Removed plants can be added again. The cart is held in memory and resets on refresh.

## Grading file links

These links become available after the files are committed and pushed to the `main` branch of `swayam-8/paradise-nursery-shopping-cart`:

- [README.md](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/README.md)
- [AboutUs.jsx](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/AboutUs.jsx)
- [App.css](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/App.css)
- [App.jsx](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/App.jsx)
- [CartSlice.jsx](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/CartSlice.jsx)
- [ProductList.jsx](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/ProductList.jsx)
- [CartItem.jsx](https://github.com/swayam-8/paradise-nursery-shopping-cart/blob/main/src/CartItem.jsx)

Photography is served from Unsplash; Google Fonts provides the typefaces, with local font fallbacks. Catalog photographs are representative plant imagery, reused across some products. No credentials or backend services are needed.
