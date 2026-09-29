🌊 Karavalli | Coastal & Heritage Dining Web Experience

An interactive, responsive digital dining menu and ordering platform built for Karavalli, an authentic coastal heritage restaurant.

Built with 100% Vanilla JavaScript, HTML5, and CSS3—zero external heavy frameworks or dependencies, delivering high-performance 60fps animations, contextual upsell suggestions, and a refined two-step checkout experience.

📸 Preview

💡 Add your high-res screenshots here (./assets/demo-preview.png).

✨ Key Features

🍽️ 1. Backyard-Style Spotlight Hero Slider

Inspired by bold culinary hero showcases with an ambient radial glow disk.

Categorized exploration with smooth < and > controls to cycle through all dishes sequentially.

Features ratings, dish punchlines, dynamic pricing, and direct-to-cart actions.

🍱 2. Expansive 120-Dish Menu Catalog

8 authentic coastal categories:

🥗 Salads

🍨 Ice Creams

🥤 Fresh Juices

🍚 Heritage Rices

🔥 Dum Biriyanis

🍲 Coastal Tiffins

🍔 Burgers

🧊 Cool Drinks & Sherbets

15 unique dishes per category (120 total), each with an individual high-definition photo, flavor notes, price, and customer rating.

🍿 3. Scroll-Triggered Pop-In Animation

Built using lightweight native IntersectionObserver APIs.

As visitors scroll through cards and sections, elements smoothly scale from minimum size (scale(0.88)) to maximum size (scale(1)) using custom cubic-bezier(0.2, 0.9, 0.25, 1.2) pop curves.

🪄 4. Smart Online Dish Pairing & Combo Engine

Context-aware upsell dialog that triggers when specific dishes are added:

Spicy Dum Biriyanis ➔ Spiced Neer Mor / Buttermilk

Flame-Grilled Burgers ➔ Mint & Key Lime Sparkling Soda

Crispy Tiffins & Dosas ➔ South Indian Filter Coffee

Salads & Rices ➔ Cold-Pressed Sugarcane & Kokum Coolers

Features short, high-conversion copy ("Hot & crisp? Cool it down with a frosty sip!") with one-click additions.

🏷️ 5. Category Offers Modal with Frosted Blur

Selecting categories or clicking "Today's Offers" launches a focused modal with glassmorphic blur backdrop (backdrop-filter: blur(14px)).

Cycles multi-item discounted deals with < and > navigation and a clean "Skip" button.

🛒 6. Friction-Free Cart & 2-Step Confirmation Flow

Non-Intrusive Additions: Adding dishes never rips the user away from their browsing flow; a subtle floating toast confirms the addition while the cart badge bumps dynamically.

Cart Drawer: Real-time quantity adjustment (+ / -), individual item deletion, and live calculation of subtotal and GST (5%).

Step 2 Order Review Modal: Before ordering, users get a transparent summary screen with quick - modifier buttons to prune unwanted dishes before final commitment.

3-Second Auto-Redirect: Order confirmation triggers a celebratory modal with an animated countdown bar that smoothly glides the user back to the #home view.

🎨 Design System & Color Palette

Designed around an earthy, coastal culinary palette to evoke warmth, clay pots, and spice heritage:

Color Token

Hex Code

Visual Reference

Usage

Black

#1A1A1A



Base canvas, dark badges, deep header framing

Dark Cocoa

#3D2C2E



Card backgrounds, cart drawer, hero section

Terracotta

#E07A5F



Primary CTAs, active highlights, badges, accents

Latte

#F2CC8F



Headings, rating stars, price highlights

Cream White

#F4F1DE



Body typography, secondary text, button labels

Typography

Headings: Syne (Geometric, premium display font)

Body & Controls: Plus Jakarta Sans (Modern, ultra-legible humanist sans-serif)

🛠️ Technology Stack

Markup: HTML5 (Semantic elements: <header>, <nav>, <section>, <aside>, <footer>)

Styling: Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, Media Queries, Backdrop Filter)

Scripting: Pure Vanilla JavaScript (ES6+ modular data structures, Array methods, IntersectionObserver)

Icons: Lucide Icons (Lightweight SVG iconography)

📂 Project Structure

karavalli-restaurant-menu/
├── index.html        # Complete semantic HTML markup


(Note: If you are using the single-file bundle version, all styles and scripts are neatly contained within index.html for single-click deployment).

🚀 Getting Started

No build tools, bundlers, or npm install required!

1. Clone the repository

git clone https://github.com/your-username/karavalli-restaurant-menu.git
cd karavalli-restaurant-menu


2. Run the application

Simply double-click index.html to open it directly in any modern browser.

Or serve it locally using VS Code's Live Server extension:

Right-click index.html

Select "Open with Live Server"

📱 Responsive Breakpoints

Desktop (1200px+): Full 3-column spotlight stage, multi-card menu grid, and sticky navigation.

Tablet (768px – 992px): Reorganized 2-column layout with stacked spotlight presentation.

Mobile (< 768px): Horizontal scrollable category pill bar, full-width touch-friendly cards, and compact cart drawer.

📄 License

This project is licensed under the MIT License — feel free to use it for personal projects, portfolios, or commercial inspiration.

👨‍💻 Author

Crafted with care by Jayanth

LinkedIn: Jayanth Kakarla

GitHub: @jay-anth07
