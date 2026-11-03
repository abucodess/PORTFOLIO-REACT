export const projects = [
  {
    id: 1,
    slug: "solex-ecommerce",
    index: "01",
    number: "01",
    title: "SOLEX E-Commerce",
    subtitle: "Dual-App Footwear Storefront (Dark) & Admin Suite (Light)",
    category: "E-Commerce Platform",
    clientType: "Full Storefront + Admin RBAC",
    role: "Frontend Architect & Developer",
    status: "Live Production (2 Apps)",
    year: "2026",
    coverImage: "/assets/aistudio/image_4c3822eb.png",
    screenshots: [
      {
        src: "/assets/aistudio/image_4c3822eb.png",
        appType: "Customer App · Dark UI",
        tag: "01 // CUSTOMER STOREFRONT HERO",
        title: "Streetwear Editorial Landing Experience",
        caption:
          "High-contrast dark customer storefront featuring promo code bar (SOLEX10), gender & brand navigation, wishlist/cart header icons, and dramatic hero sneaker showcase.",
      },
      {
        src: "/assets/aistudio/image_3e25c8e9.png",
        appType: "Customer App · Dark UI",
        tag: "02 // CATALOG & MULTI-FILTER ENGINE",
        title: "All Products Catalog & Brand/Style Filtering",
        caption:
          "Customer catalog displaying verified pairs with real-time search, brand pills (Nike, Puma, Adidas, New Balance), style filters (Running, Football, Lifestyle), and sort controls.",
      },
      {
        src: "/assets/aistudio/image_b7772ba5.png",
        appType: "Customer App · Dark UI",
        tag: "03 // PRODUCT DETAIL & CHECKOUT",
        title: "Dynamic Size Selection, Stock Count & Instant Buy",
        caption:
          "Detailed sneaker view (Nike React Infinity Run Flyknit) with live UK size inventory tracking, size guide modal trigger, Add to Bag, and single-click Buy Now flow.",
      },
      {
        src: "/assets/aistudio/image_50cabe55.png",
        appType: "Admin App · Light UI",
        tag: "04 // ADMIN REVENUE & ORDER DASHBOARD",
        title: "Super Admin Analytics & Live Order Notifications",
        caption:
          "Clean white-theme Admin application tracking Total Revenue (₹3,74,985), order status breakdown (Pending, Completed, Cancelled), brand revenue performance, and real-time unread order alerts.",
      },
      {
        src: "/assets/aistudio/image_72b1055c.png",
        appType: "Admin App · Light UI",
        tag: "05 // ADMIN BACK-OFFICE SUITE",
        title: "10-Module E-Commerce Control Sidebar",
        caption:
          "Dedicated SOLEX Admin navigation covering Dashboard, Products, Inventory, Orders, Customers, Reviews, Coupons, Combo Offers, Banners, and Analytics.",
      },
    ],
    description:
      "Built a complete dark-themed customer storefront and a separate white-themed admin application for managing an online footwear store, featuring role-based authentication across 2 user roles and Redux Toolkit state.",
    overview:
      "SOLEX is a dual-application e-commerce ecosystem engineered for sneaker retail. It pairs a sleek, dark streetwear Customer Storefront with a clean, high-density white Admin Control Center—connected by role-based access control (RBAC) across Customer and Super Admin roles and powered by Redux Toolkit.",
    challenge:
      "Modern footwear storefronts struggle when complex product variant filtering, UK size stock tracking, and multi-module back-office controls (inventory, coupons, combo offers, banners, and analytics) are crammed into one interface.",
    solution:
      "Architected two purpose-built React applications: a dark-mode Customer Storefront optimized for brand/style discovery and fast checkout, and a light-mode Admin Dashboard equipped with 10 management modules, live revenue analytics, and real-time order notifications.",
    metrics: [
      { value: "2 Apps", label: "Dark Customer Store + Light Admin App" },
      { value: "10 Modules", label: "Inventory, Coupons, Combos & Analytics" },
      { value: "RBAC", label: "Customer & Super Admin Role Guards" },
    ],
    architecture: [
      {
        code: "MOD // 01",
        title: "Dark Customer Storefront App",
        detail:
          "Streetwear editorial UI with instant search, multi-brand & style filtering (Nike, Puma, Adidas, New Balance), UK size stock validation, wishlist, and Redux cart.",
      },
      {
        code: "MOD // 02",
        title: "Light Admin Control Center App",
        detail:
          "Dedicated white-theme back-office suite managing Products, Inventory, Orders, Customers, Reviews, Coupons, Combo Offers, Banners, and Revenue Analytics.",
      },
      {
        code: "MOD // 03",
        title: "Redux Toolkit & RBAC Layer",
        detail:
          "Normalized state slices and role-gated authentication separating public customer shopping sessions from Super Admin store operations.",
      },
    ],
    keyFeatures: [
      "Dual-theme, dual-app architecture: Dark Streetwear Customer Storefront + Clean White Admin Dashboard",
      "Customer catalog with live search, brand filtering (Nike, Puma, Adidas, New Balance), and style categories",
      "Interactive UK size selector with real-time per-size stock counts, Add to Bag, and instant Buy Now",
      "10-module Admin back-office tracking Total Revenue, Order Statuses, Brand Performance, Coupons, Combo Offers, and Unread Order alerts",
    ],
    highlights: [
      "Customer storefront (Dark UI) + dedicated Admin dashboard (Light UI)",
      "Role-based access control (RBAC) across customer & admin roles",
      "Global cart, filter, inventory, and order state managed with Redux Toolkit",
    ],
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "RBAC Auth", "Vercel"],
    tech: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "RBAC Authentication",
      "REST APIs",
      "Vercel",
    ],
    live: "https://solex-ecommerce.vercel.app",
    liveLabel: "solex-ecommerce.vercel.app",
    github: "https://github.com/abucodess",
    accent: "from-violet-600 via-purple-600 to-indigo-900",
    previewType: "solex",
    featured: true,
  },
  {
    id: 2,
    slug: "Fuwa-pos",
    index: "02",
    number: "02",
    title: "FUWA POS Billing App",
    subtitle: "Japanese Fluffy Desserts Counter & POS System",
    category: "Client Project · POS System",
    clientType: "Commercial Client Delivery",
    role: "Lead Frontend Engineer",
    status: "Live Commercial System",
    year: "2026",
    coverImage: "/assets/aistudio/image_657aeda5.png",
    screenshots: [
      {
        src: "/assets/aistudio/image_657aeda5.png",
        tag: "01 // POS BILLING TERMINAL",
        title: "Fluffy Menu & Live Counter Checkout",
        caption:
          "Touch-optimized counter terminal with category filters (Dorayaki, Dry Fruit Shakes, Fruit Sandwich, Soufflé), live item cart, Cash/Card/UPI payment selector, and one-click WhatsApp invoice toggle.",
      },
      {
        src: "/assets/aistudio/image_1b5ece9a.png",
        tag: "02 // ORDER HISTORY & RECEIPTS",
        title: "Real-Time Order Ledger & WhatsApp Bill Status",
        caption:
          "Comprehensive order tracking with date filters, status tabs (Preparing, Ready, Paid, Cancelled), instant search by customer/phone/cashier, and verified 'Bill Sent' WhatsApp delivery badges.",
      },
      {
        src: "/assets/aistudio/image_d3656cf1.png",
        tag: "03 // RBAC USER MANAGEMENT",
        title: "Staff & Administrator Access Control",
        caption:
          "Admin-only access control dashboard managing counter staff accounts, active session status ratios, and granular role boundaries between Administrator and Staff privileges.",
      },
    ],
    description:
      "Developed a production point-of-sale web application for FUWA Fluffy Desserts covering live counter billing, instant receipts, order history tracking, role-based staff management, and automated WhatsApp invoice workflows.",
    overview:
      "FUWA POS is a commercial point-of-sale and counter management platform custom-built for FUWA Fluffy Desserts (Artisanal Japanese Counter). Engineered with TanStack Start, React, and TypeScript, it empowers counter staff to punch in dessert orders, process Cash/Card/UPI payments, dispatch WhatsApp bills, and manage daily store operations.",
    challenge:
      "During peak cafe rush hours, cashiers needed to punch in customized dessert orders across 21+ live menu items, generate instant receipts, track Cash and UPI payments, and send digital invoices to customers on WhatsApp—while restricting sensitive revenue analytics and staff controls to administrators.",
    solution:
      "Built a type-safe TanStack Start + React POS application featuring an interactive Fluffy Menu billing screen, searchable Order History ledger with live WhatsApp 'Bill Sent' indicators, and role-based User Management separating Administrator and Counter Staff privileges.",
    metrics: [
      { value: "21+ Live", label: "Interactive Menu Items & Categories" },
      { value: "WhatsApp", label: "Automated Invoice & Bill Sent Tracking" },
      { value: "2 Roles", label: "Admin & Counter Staff RBAC" },
    ],
    architecture: [
      {
        code: "MOD // 01",
        title: "Fluffy Menu & Express Billing Terminal",
        detail:
          "Touch-first POS grid with instant category switching, customer phone/name capture, Cash/Card/UPI payment modes, and automatic WhatsApp invoice dispatch.",
      },
      {
        code: "MOD // 02",
        title: "Order History & Receipt Engine",
        detail:
          "Searchable real-time ledger tracking paid orders, cashier attribution, payment methods (Cash/UPI), receipt regeneration, and WhatsApp bill delivery status.",
      },
      {
        code: "MOD // 03",
        title: "Role-Based Staff Management",
        detail:
          "Dedicated Admin-only access control panel to add staff accounts, monitor active counter profiles, and enforce strict Administrator vs. Staff privilege boundaries.",
      },
    ],
    keyFeatures: [
      "Live counter POS billing with category pills, quantity controls, and Cash / Card / UPI checkout",
      "Direct WhatsApp invoice integration with real-time 'Bill Sent' confirmation badges on every order",
      "Full Order History dashboard with date navigation, status filters, and instant search across customer, phone, or item",
      "Admin-only User Management module controlling counter staff permissions and account activation",
    ],
    highlights: [
      "Real-time POS billing, receipt generation & order management",
      "Product, category, and multi-user staff management",
      "Automated WhatsApp invoice & order-ready customer notifications",
    ],
    tags: ["TanStack Start", "React", "TypeScript", "WhatsApp API", "Tailwind"],
    tech: [
      "TanStack Start",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp Integration",
      "RBAC Auth",
      "Vercel",
    ],
    live: "https://fuwa-japanese.vercel.app",
    liveLabel: "fuwa-japanese.vercel.app",
    github: "https://github.com/abucodess",
    accent: "from-fuchsia-600 via-violet-600 to-purple-950",
    previewType: "fuwa",
    featured: true,
  },
  {
    id: 3,
    slug: "bikemode-workshop",
    index: "03",
    number: "03",
    title: "BIKEMODE Workshop",
    subtitle: "Royal Enfield Engine Specialists · Perinthalmanna",
    category: "Client Project · Automotive Web",
    clientType: "Commercial Client Delivery",
    role: "UI/UX Designer & Frontend Dev",
    status: "Live Client Production",
    year: "2026",
    coverImage: "/assets/aistudio/image_f946f90b.png",
    screenshots: [
      {
        src: "/assets/aistudio/image_f946f90b.png",
        appType: "Client Flagship · Hero UI",
        tag: "01 // ENGINE SPECIALISTS HERO",
        title: "Royal Enfield Specialist Landing Experience",
        caption:
          "High-impact dark & gold automotive hero crafted for BIKEMODE Bike Workshop in Perinthalmanna, featuring instant 'WhatsApp Us', 'Call Now', and 'Book Service' rider conversion actions.",
      },
      {
        src: "/assets/aistudio/image_ae7c3188.png",
        appType: "Client Flagship · Brand Trust",
        tag: "02 // SPEC 02 — WHY BIKEMODE",
        title: "Workshop Authority, Value Props & Live Metrics",
        caption:
          "Editorial Royal Enfield showcase highlighting core workshop guarantees (Genuine Spare Parts, Experienced Mechanics, Fast Turnaround) and proven track record (5,000+ Bikes Serviced, 10+ Years Experience, 1,000+ Happy Customers).",
      },
    ],
    description:
      "Designed and engineered a high-contrast, mobile-first web experience for BIKEMODE (Royal Enfield Engine Specialists in Perinthalmanna) using modular React components and fast Vite bundling, delivered for a commercial client.",
    overview:
      "BIKEMODE is a commercial digital flagship created for a specialist Royal Enfield engine rebuilding, servicing, and performance maintenance workshop in Perinthalmanna. Designed with a bold black-and-gold automotive identity, the platform converts local riders directly into WhatsApp inquiries, phone calls, and service bookings.",
    challenge:
      "The workshop needed a commanding online presence that reflected factory-grade Royal Enfield precision and showcased their 5,000+ bikes serviced track record—while providing one-tap WhatsApp and phone booking for riders on mobile devices.",
    solution:
      "Engineered a high-contrast dark & gold automotive web platform in React and Tailwind CSS with Vite bundling, integrating direct WhatsApp & Call booking triggers, service & gallery showcases, and trust-building workshop metrics.",
    metrics: [
      { value: "5,000+", label: "Bikes Serviced Showcase" },
      { value: "10+ Yrs", label: "Royal Enfield Specialist Legacy" },
      { value: "1-Tap", label: "WhatsApp & Call Service Booking" },
    ],
    architecture: [
      {
        code: "MOD // 01",
        title: "Automotive Dark & Gold Design System",
        detail:
          "Bespoke industrial typography and high-contrast yellow-gold CTAs tailored around Royal Enfield engine rebuilding and performance maintenance.",
      },
      {
        code: "MOD // 02",
        title: "Authority & Trust Architecture",
        detail:
          "Structured 'Why Choose Bikemode' specification blocks highlighting Genuine Spare Parts, Experienced Mechanics, and 1,000+ Happy Customers.",
      },
      {
        code: "MOD // 03",
        title: "Direct Rider Conversion Pipeline",
        detail:
          "Instant 'WhatsApp Us', 'Call Now', floating WhatsApp widget, and 'Book Service' navigation engineered for frictionless mobile appointment booking.",
      },
    ],
    keyFeatures: [
      "Custom black & gold automotive UI crafted for Royal Enfield Engine Specialists (Perinthalmanna)",
      "Direct rider conversion flows with 'WhatsApp Us', 'Call Now', and 'Book Service' actions",
      "Editorial 'Why Choose Bikemode' showcase with verified workshop milestones (5,000+ Bikes Serviced)",
      "Mobile-first responsive React + Tailwind CSS + Vite build deployed live on Vercel",
    ],
    highlights: [
      "Custom dark & gold automotive UI for Royal Enfield Engine Specialists",
      "Instant WhatsApp, Call & Book Service rider conversion flows",
      "Delivered and deployed live on Vercel for a commercial workshop client",
    ],
    tags: ["React.js", "Tailwind CSS", "Vite", "Responsive UI"],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Responsive Architecture",
      "WhatsApp Booking Flow",
      "Vercel",
    ],
    live: "https://bike-mode.vercel.app",
    liveLabel: "bike-mode.vercel.app",
    github: "https://github.com/abucodess",
    accent: "from-purple-600 via-violet-700 to-slate-900",
    previewType: "bikemode",
    featured: true,
  },
];