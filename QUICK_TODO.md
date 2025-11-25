# ✅ Quick TODO List

## You Only Need to Do 3 Things!

### 1️⃣ Update Business Info (2 minutes)
📝 Edit: `/utils/config.ts`

```typescript
// Line 12-15: Update these
phone: "+61 XXX XXX XXX",  // ← Your real phone number
email: "youremail@example.com",  // ← Your real email

// Line 17-24: Update if needed
address: {
  street: "South Bank Parklands",  // ← Your actual location
  suburb: "South Brisbane",
  city: "Brisbane",
  // ... rest is fine
}

// Line 40-44: Add when you create accounts
social: {
  facebook: "https://facebook.com/YOUR-PAGE",  // ← Add your page URL
  instagram: "https://instagram.com/YOUR-USERNAME",  // ← Add your profile
  twitter: "https://twitter.com/YOUR-HANDLE",  // ← Optional
}
```

---

### 2️⃣ Create 2 Images (10 minutes)

Use Canva (free) or any image editor:

#### Image 1: Social Media Preview
- **Name:** `og-image.jpg`
- **Size:** 1200 x 630 pixels
- **Save to:** `/public/og-image.jpg`
- **Design:**
  ```
  ┌────────────────────────────────┐
  │                                │
  │   [Your Logo - Big]            │
  │                                │
  │   Kavitha Street Foods         │
  │   Authentic Indian & Sri Lankan│
  │   Food in Brisbane             │
  │                                │
  │   [Dark background with food]  │
  │                                │
  └────────────────────────────────┘
  ```

#### Image 2: iPhone Icon
- **Name:** `apple-touch-icon.png`
- **Size:** 180 x 180 pixels
- **Save to:** `/public/apple-touch-icon.png`
- **Design:** Just your logo centered on dark background

---

### 3️⃣ Create Social Media (30 minutes)

1. **Facebook Business Page**
   - Go to facebook.com/pages/create
   - Category: "Food Truck"
   - Add photos, logo, info
   - Copy URL to config.ts

2. **Instagram Business Account**
   - Download Instagram app
   - Create business account
   - Add bio, logo, food photos
   - Copy @username to config.ts

3. **Twitter (Optional)**
   - twitter.com/signup
   - Create account
   - Copy URL to config.ts

---

## That's It! 🎉

After these 3 things:
- Your website is 100% ready
- SEO is fully configured
- Everything works automatically

---

## Then Deploy:

```bash
npm run build
npm start
# or deploy to Vercel
```

---

## After Website is Live:

### Week 1 (Important):
- [ ] Register domain: kavithastreetfoods.com.au
- [ ] Create Google Business Profile
- [ ] Submit to Google Search Console

### Week 2:
- [ ] Add to Yelp Australia
- [ ] Add to Zomato
- [ ] Post on social media

---

## Files Changed Summary:

| File | What to Do |
|------|-----------|
| `/utils/config.ts` | ✏️ Edit (update phone, email, social) |
| `/public/og-image.jpg` | 🖼️ Create (1200x630) |
| `/public/apple-touch-icon.png` | 🖼️ Create (180x180) |
| Everything else | ✅ Already done! |

---

## Need Help?

📖 **Full guides available:**
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Step by step setup
- [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md) - Image details
- [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md) - SEO explained

---

**Total time needed: ~45 minutes**

Then you have a professional, SEO-optimized website ready for Brisbane! 🚀
