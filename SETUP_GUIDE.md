# Quick Setup Guide - Kavitha Street Foods

## 🚀 Quick Start (5 minutes)

### Step 1: Update Your Business Information
Edit `/utils/config.ts` with your real details:

```typescript
// Update these 3 things:
phone: "+61 XXX XXX XXX",           // Your real phone
email: "your-real-email@gmail.com", // Your real email
address: {
  street: "Your exact location",    // Where's your truck?
  // ... rest stays same
}
```

### Step 2: Create Required Images (2 images needed)

Create these 2 images and save to `/public/`:

1. **og-image.jpg** (1200x630 pixels)
   - Your logo + "Kavitha Street Foods - Brisbane"
   - Used when people share your site

2. **apple-touch-icon.png** (180x180 pixels)
   - Just your logo
   - Used for iPhone home screen

📖 See [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md) for details

### Step 3: Create Social Media Accounts

1. Create Facebook business page
2. Create Instagram business account
3. Create Twitter account (optional)

Then update in `/utils/config.ts`:
```typescript
social: {
  facebook: "https://facebook.com/your-actual-page",
  instagram: "https://instagram.com/your-actual-username",
  twitter: "https://twitter.com/your-handle",
}
```

### Step 4: Deploy!

```bash
npm run build
npm start
# or deploy to Vercel/Netlify
```

---

## ✅ After Launch Checklist

### Week 1:
- [ ] Create Google Business Profile
- [ ] Submit website to Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap: https://kavithastreetfoods.com.au/sitemap.xml

### Week 2:
- [ ] Add business to Yelp
- [ ] Add business to Zomato
- [ ] Add business to TripAdvisor
- [ ] Post first social media content

### Month 1:
- [ ] Get first 5 Google reviews
- [ ] Add photos to Google Business Profile
- [ ] Start regular social media posting
- [ ] Set up Google Analytics (optional)

---

## 📁 Important Files to Know

| File | What It Does | Do You Need to Edit? |
|------|-------------|---------------------|
| `/utils/config.ts` | Business info (phone, address, etc.) | ✅ YES - Update with real info |
| `/utils/seo/metadata.ts` | SEO generation | ❌ NO - Works automatically |
| `/app/layout.tsx` | Page setup | ❌ NO - Already configured |
| `/components/Contact.tsx` | Contact section | ❌ NO - Uses config.ts data |
| `/public/og-image.jpg` | Social preview image | ✅ YES - Create this image |
| `/public/apple-touch-icon.png` | iOS icon | ✅ YES - Create this image |

---

## 🎨 Logo Files

Your logo is at: `/public/logos/logo.svg`

✅ Used in:
- Header (top navigation)
- Hero section (big logo on homepage)
- Footer
- Browser favicon

No need to change anything - it's already integrated everywhere!

---

## 📞 Contact Information Flow

```
/utils/config.ts
    ↓
All Components Automatically Updated
    ↓
Phone: Header, Contact Page, Footer
Email: Contact Page, Footer
Address: Contact Page, Footer, SEO Data
Hours: Contact Page, SEO Data
```

**Change once in config.ts → Updates everywhere! 🎉**

---

## 🌍 SEO is Ready For:

✅ Brisbane location targeting
✅ Indian cuisine keywords
✅ Sri Lankan cuisine keywords
✅ Food truck searches
✅ South Bank location
✅ "Near me" searches
✅ Google Maps integration
✅ Social media sharing
✅ Mobile optimization

📖 See [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md) for full details

---

## 🆘 Need Help?

### To change business info:
→ Edit `/utils/config.ts`

### To understand SEO:
→ Read [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md)

### To create images:
→ Read [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md)

### To update menu items:
→ Edit `/components/FoodShowcase.tsx`

---

## 🎯 Priority Order

**Do these first:**
1. ✅ Update phone/email in config.ts
2. ✅ Create og-image.jpg
3. ✅ Create apple-touch-icon.png
4. ✅ Deploy website
5. ✅ Create Google Business Profile

**Do these soon:**
6. Create social media accounts
7. Update social URLs in config.ts
8. Submit to Google Search Console
9. Get first reviews

**Do these when ready:**
10. Submit to food directories
11. Start social media marketing
12. Set up analytics

---

## 💡 Pro Tips

1. **Keep config.ts updated** - It controls everything
2. **Use high-quality food photos** - Already have 20+ menu items
3. **Respond to all reviews** - Builds trust
4. **Post consistently** - Social media helps SEO
5. **Ask happy customers for Google reviews** - Boosts rankings

---

**You're all set! 🚀**

Your website is professional, SEO-optimized, and ready for Brisbane's food scene!
