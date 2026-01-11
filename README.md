[Live site](https://home-inventory-lyart-two.vercel.app) This is a inventory management system dashboard.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project, **Homebox**, is a high-fidelity Home Inventory Management System built with **Next.js 15** and **TypeScript**. It is designed to help users catalog, organize, and track their personal belongings across multiple physical locations with the precision of a professional asset management tool.

---

## 🛠️ Technical Core

The application follows a modern full-stack architecture optimized for performance and type safety:

- **Frontend Framework:** Next.js (App Router) for seamless server-side rendering and routing.
- **State Management & Data Fetching:** Powered by **TanStack Query (React Query)** to handle asynchronous API states, caching, and background synchronization.
- **UI Architecture:** Built using **Tailwind CSS** and **Shadcn UI** components, customized to strictly adhere to high-fidelity Figma specifications.
- **Robust Type System:** A centralized TypeScript interface layer (e.g., `InventoryItem`, `Location`) ensures data integrity across the entire component tree.

## ✨ Key Features

- **Dynamic Inventory List:** A searchable, paginated table featuring real-time data fetching and custom-styled category labels.
- **Location Hierarchy:** An intuitive tree-view navigation system allowing users to drill down from broad areas (e.g., "Garage") to specific containers (e.g., "Tool Cabinet").
- **Visual Asset Management:** A dedicated gallery component for item details, supporting primary images and multi-thumbnail previews.
- **Secure Session Management:** Integrated authentication flow with token-based security, protected routes, and automated redirection.

---
