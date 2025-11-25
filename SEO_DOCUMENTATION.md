# SEO Documentation - Kavitha Street Foods

## 🎯 SEO Strategy Overview

This website is optimized for **Brisbane, Australia** targeting:

- Indian community in Brisbane
- Sri Lankan community in Brisbane
- Australian food lovers
- People searching for authentic South Asian cuisine

---

## 📁 File Structure

```
/utils/
  ├── config.ts              # Business configuration (phone, address, etc.)
  └── seo/
      ├── metadata.ts        # SEO metadata generation functions
      └── index.ts          # Export point

/app/
  ├── layout.tsx            # Main SEO metadata & structured data
  ├── sitemap.ts           # XML sitemap generator
  └── robots.ts            # robots.txt configuration

/public/
  ├── og-image.jpg         # Social media preview (1200x630) - REQUIRED
  ├── apple-touch-icon.png # iOS home screen icon (180x180) - REQUIRED
  └── logos/logo.png       # Your main logo (already exists)
```

---

## 🔑 Key SEO Features Implemented

### 1. **Structured Data (JSON-LD)**

Located in: `app/layout.tsx`

- ✅ Local Business Schema
- ✅ Restaurant Schema
- ✅ Menu Schema
- ✅ Geographic coordinates
- ✅ Opening hours
- ✅ Contact information

**What this does:** Helps Google show your business in:

- Google Maps
- Local search results
- Rich snippets with ratings, hours, location

### 2. **Meta Tags**

Located in: `utils/seo/metadata.ts`

- ✅ Title tags optimized for Brisbane + Indian/Sri Lankan keywords
- ✅ Description tags with location and cuisine info
- ✅ Keywords targeting multiple search terms
- ✅ Open Graph tags (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URLs

### 3. **Location Targeting**

Located in: `utils/config.ts`

**Primary location:** South Bank Parklands, Brisbane QLD
**Target keywords:**

- "Indian food Brisbane"
- "Sri Lankan food Brisbane"
- "South Bank food truck"
- "Brisbane street food"
- "Curry Brisbane"
- And 20+ more variations

### 4. **Mobile Optimization**

- ✅ Responsive design
- ✅ Apple Web App capable
- ✅ Touch icons configured
- ✅ Telephone/email auto-detection

---

## 📊 Target Keywords (Brisbane-focused)

### Primary Keywords:

1. Indian food Brisbane
2. Sri Lankan food Brisbane
3. Food truck Brisbane
4. South Bank food
5. Indian curry Brisbane

### Secondary Keywords:

6. Authentic Indian restaurant Brisbane
7. Sri Lankan street food
8. Biriyani Brisbane
9. Dosai Brisbane
10. Kothu roti Brisbane

### Long-tail Keywords:

11. "Best Indian food truck in Brisbane"
12. "Authentic Sri Lankan curry Brisbane"
13. "Indian street food South Bank"
14. "Halal food Brisbane"
15. "South Asian cuisine Brisbane"

---

## 🌍 Local SEO Setup

### Google Business Profile (Recommended Next Steps):

1. Create Google Business Profile
2. Add business name: "Kavitha Street Foods"
3. Category: "Food Truck" / "Indian Restaurant" / "Sri Lankan Restaurant"
4. Address: South Bank Parklands, South Brisbane QLD 4101
5. Phone: +61 412 345 678 (update in config.ts with real number)
6. Website: https://kavithastreetfoods.com.au
7. Photos: Upload food images, logo, location
8. Hours: Mon-Sat 11AM-9PM, Sun 12PM-8PM

### Online Directories (Submit to):

- ✅ Google Business Profile
- ✅ Yelp Australia
- ✅ TripAdvisor
- ✅ Zomato Australia
- ✅ Facebook Business Page
- ✅ Instagram Business Profile

---

## 📝 Content Optimization

### Page Title Pattern:

```
[Service] | [Location] | Kavitha Street Foods
Example: "Authentic Indian & Sri Lankan Food Truck in Brisbane | Kavitha Street Foods"
```

### Description Pattern:

```
Experience authentic [cuisine] in [location]. [Unique selling point].
Located at [specific location]. Serving [target audience].
```

### Implemented Example:

```
Title: "Authentic Indian & Sri Lankan Food Truck in Brisbane, Australia"
Description: "Experience authentic Indian and Sri Lankan street food in
Brisbane. Fresh traditional recipes, curries, biriyani, dosai & more.
Visit our food truck at South Bank. Serving Brisbane's Indian & Sri Lankan
communities."
```

---

## 🔧 Configuration Files

### 1. `/utils/config.ts`

**Update these values with your real information:**

```typescript
export const siteConfig = {
  name: "Kavitha Street Foods",

  contact: {
    phone: "+61 412 345 678", // ← UPDATE THIS
    email: "hello@kavithastreetfoods.com.au", // ← UPDATE THIS
    address: {
      street: "South Bank Parklands", // ← UPDATE THIS
      suburb: "South Brisbane",
      city: "Brisbane",
      // ... etc
    },
  },

  social: {
    facebook: "https://facebook.com/kavithastreetfoods", // ← ADD REAL URLS
    instagram: "https://instagram.com/kavithastreetfoods", // ← ADD REAL URLS
    twitter: "https://twitter.com/kavithastreet", // ← ADD REAL URLS
  },

  // Keywords automatically used for SEO
  keywords: [
    "Indian food Brisbane",
    // ... 30+ keywords already configured
  ],
};
```

### 2. `/utils/seo/metadata.ts`

**Contains SEO generation functions:**

- `generateMetadata()` - Page meta tags
- `generateLocalBusinessSchema()` - Structured data
- `generateMenuSchema()` - Menu structured data

**No changes needed** - automatically uses config.ts data

---

## 🚀 Performance & SEO Checklist

### ✅ Already Implemented:

- [x] Semantic HTML structure
- [x] Responsive mobile design
- [x] Fast loading (Next.js optimization)
- [x] Image optimization (Next.js Image component)
- [x] HTTPS ready
- [x] XML Sitemap
- [x] Robots.txt
- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] Language tags (en-AU)
- [x] Local business schema
- [x] Geographic coordinates

### 📋 TODO After Launch:

- [ ] Create Google Business Profile
- [ ] Submit to Google Search Console
- [ ] Create social media accounts (real URLs)
- [ ] Upload og-image.jpg (1200x630)
- [ ] Upload apple-touch-icon.png (180x180)
- [ ] Update phone number in config.ts
- [ ] Update email in config.ts
- [ ] Update address if different
- [ ] Get Google verification code
- [ ] Submit sitemap to Google
- [ ] Register domain: kavithastreetfoods.com.au
- [ ] Set up Google Analytics (optional)
- [ ] Request Google reviews from customers
- [ ] Post regularly on social media

---

## 📱 Social Media Integration

### Current Setup:

All social links are configured in `/utils/config.ts` and automatically used in:

- Contact page footer
- Structured data
- Social share buttons

### How to Update:

1. Create business accounts on Facebook, Instagram, Twitter
2. Update URLs in `/utils/config.ts`:

```typescript
social: {
  facebook: "https://facebook.com/YourActualPage",
  instagram: "https://instagram.com/YourActualUsername",
  twitter: "https://twitter.com/YourActualHandle",
}
```

3. The website automatically updates everywhere!

---

## 🔍 How Search Engines See Your Site

### Google will index:

1. **Homepage** - Main keywords
2. **Menu Section** (#food-showcase) - Food item keywords
3. **About Section** (#about) - Brand story, location
4. **Contact Section** (#contact) - Business info

### Rich Results Eligible For:

- ⭐ Local Business listing
- 📍 Google Maps integration
- 🍽️ Menu items display
- ⏰ Business hours
- 📞 Click-to-call buttons
- 📧 Email links
- 🗺️ Directions link

---

## 📈 Expected SEO Results

### Short-term (1-3 months):

- Indexed by Google
- Appear in "food truck brisbane" searches
- Show in Google Maps (if Business Profile created)

### Medium-term (3-6 months):

- Rank for "[cuisine] brisbane" keywords
- Build local citations
- Accumulate reviews

### Long-term (6-12 months):

- Top 10 for multiple Brisbane food keywords
- Strong Google Business Profile presence
- Featured in local food guides/blogs

---

## 🛠️ Maintenance

### Monthly:

- Post on social media (links in config)
- Respond to reviews
- Update menu if items change

### Quarterly:

- Check Google Search Console
- Review keyword rankings
- Update content if needed

### Annually:

- Review all business information
- Update photos
- Refresh menu descriptions

---

## 📞 Support

All SEO configurations are in:

1. `/utils/config.ts` - Business info
2. `/utils/seo/metadata.ts` - SEO functions
3. `/app/layout.tsx` - Page setup

**Need to change something?**
→ Start with `/utils/config.ts` - it controls most content!

---

## ✨ Why This Setup is SEO-Friendly

1. **Location-focused:** Every page mentions Brisbane
2. **Audience-targeted:** Content for Indian/Sri Lankan communities
3. **Keyword-rich:** Natural use of search terms
4. **Technical SEO:** All Google requirements met
5. **Mobile-first:** Works perfectly on phones
6. **Fast loading:** Next.js optimization
7. **Structured data:** Helps Google understand your business
8. **Local business:** Optimized for "near me" searches

---

**Your website is ready for Google! 🚀**

Just add the images, update config.ts with real contact info, and launch!
