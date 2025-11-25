# Kavitha Street Foods - Website

> Authentic Indian & Sri Lankan Food Truck in Brisbane, Australia

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

---

## 🌟 Features

- ✨ **Modern Dark Theme** - Elegant restaurant design with amber accents
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎯 **SEO Optimized** - Targeting Brisbane, Australia location
- 🚀 **Fast Performance** - Next.js 16 with Turbopack
- 🎨 **Smooth Animations** - Framer Motion interactions
- 📍 **Local SEO Ready** - Structured data for Google Business
- 🍛 **Menu Categories** - Appetizers, Mains, Rice & Breads, Breakfast
- 📞 **Contact Integration** - Click-to-call, email, maps

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
kavitha_street_food/
├── app/
│   ├── layout.tsx          # Main layout with SEO setup
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # XML sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Header.tsx          # Navigation with logo
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── FoodShowcase.tsx    # Menu with categories
│   └── Contact.tsx         # Contact & footer
├── utils/
│   ├── config.ts           # ⭐ Business configuration
│   └── seo/
│       ├── metadata.ts     # SEO metadata generation
│       └── index.ts        # Exports
├── public/
│   ├── logos/logo.png      # ✅ Your logo (already added)
│   ├── og-image.jpg        # ⏳ TODO: Create this (1200x630)
│   ├── apple-touch-icon.png # ⏳ TODO: Create this (180x180)
│   └── images/             # Menu item images
└── Documentation/
    ├── SETUP_GUIDE.md          # Quick setup instructions
    ├── SEO_DOCUMENTATION.md    # Complete SEO guide
    └── IMAGE_REQUIREMENTS.md   # Image specifications
```

---

## ⚙️ Configuration

### 1. Update Business Information

Edit `/utils/config.ts`:

```typescript
export const siteConfig = {
  contact: {
    phone: "+61 412 345 678", // ⬅️ UPDATE
    email: "hello@kavithastreetfoods.com.au", // ⬅️ UPDATE
    address: {
      street: "South Bank Parklands", // ⬅️ UPDATE
      // ...
    },
  },
  social: {
    facebook: "...", // ⬅️ UPDATE
    instagram: "...", // ⬅️ UPDATE
    twitter: "...", // ⬅️ UPDATE
  },
};
```

### 2. Create Required Images

Create 2 images and save to `/public/`:

| Image                  | Size       | File                   |
| ---------------------- | ---------- | ---------------------- |
| Social sharing preview | 1200 x 630 | `og-image.jpg`         |
| iOS home screen icon   | 180 x 180  | `apple-touch-icon.png` |

📖 See [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md) for details

---

## 🎨 Design

- **Color Scheme:**

  - Background: Zinc-900 (dark)
  - Accent: Amber-500 (gold/orange)
  - Text: Amber-100 (light gold)

- **Fonts:** Geist Sans & Geist Mono

- **Theme:** Professional dark restaurant design inspired by upscale menu displays

---

## 🔍 SEO Features

### Implemented:

✅ **Location Targeting** - Brisbane, South Bank
✅ **Audience Targeting** - Indian, Sri Lankan, Australian
✅ **Structured Data** - Local Business, Restaurant, Menu schemas
✅ **Meta Tags** - Open Graph, Twitter Cards
✅ **Keywords** - 30+ Brisbane-focused keywords
✅ **Sitemap** - Auto-generated XML sitemap
✅ **Robots.txt** - Search engine configuration
✅ **Mobile Optimized** - Responsive design
✅ **Performance** - Fast loading with Next.js

### Target Keywords:

- Indian food Brisbane
- Sri Lankan food Brisbane
- Food truck Brisbane
- South Bank food
- Indian curry Brisbane
- And 25+ more variations

📖 See [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md) for complete guide

---

## 📱 Sections

1. **Header** - Sticky navigation with logo
2. **Hero** - Large logo, title, CTA button
3. **About** - Business story and features
4. **Menu** - Food items organized by category:
   - Appetizers (Roll, Cutlet, Patties, Vada)
   - Mains (Various curries and devilled dishes)
   - Rice & Breads (Biriyani, Fried Rice, Kothu Rotti)
   - Traditional Breakfast (Puttu, Idly, Dosai, String Hoppers)
5. **Contact** - Phone, location, hours, email, social links
6. **Footer** - Logo, business info, copyright

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel ready

---

## 📋 Setup Checklist

### Before Launch:

- [ ] Update phone number in `config.ts`
- [ ] Update email in `config.ts`
- [ ] Update address in `config.ts`
- [ ] Create `og-image.jpg` (1200x630)
- [ ] Create `apple-touch-icon.png` (180x180)
- [ ] Create social media accounts
- [ ] Update social URLs in `config.ts`

### After Launch:

- [ ] Create Google Business Profile
- [ ] Submit to Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap to Google
- [ ] Add to food directories (Yelp, Zomato)
- [ ] Get first Google reviews
- [ ] Set up Google Analytics (optional)

📖 See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed steps

---

## 🌐 Deployment

### Vercel (Recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build:

```bash
npm run build
npm start
```

---

## 📞 Support

### Documentation:

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Quick setup
- [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md) - SEO guide
- [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md) - Image specs

### Need to Edit?

- Business info → `/utils/config.ts`
- Menu items → `/components/FoodShowcase.tsx`
- SEO settings → `/utils/seo/metadata.ts`

---

## 📄 License

© 2025 Kavitha Street Foods. All rights reserved.

---

## 🎯 Target Audience

- 🇮🇳 Indian community in Brisbane
- 🇱🇰 Sri Lankan community in Brisbane
- 🇦🇺 Australian food lovers
- 🍛 South Asian cuisine enthusiasts
- 📍 South Bank parklands visitors
- 🚚 Food truck fans

---

## ✨ What Makes This Special

1. **Professional SEO** - Targets Brisbane location specifically
2. **Cultural Focus** - Serves Indian & Sri Lankan communities
3. **Modern Design** - Dark theme with premium feel
4. **Easy Updates** - Change config.ts, everything updates
5. **Performance** - Fast loading, smooth animations
6. **Complete Package** - Logo integration, contact forms, social links

---

**Ready to serve Brisbane! 🚀🍛**

For questions or support, see the documentation files or check the code comments.
