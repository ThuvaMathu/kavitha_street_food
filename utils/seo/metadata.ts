import { Metadata } from "next";
import siteConfig from "../config";

/**
 * Generate SEO-optimized metadata for pages
 * Optimized for Brisbane, Australia location and Indian/Sri Lankan audience
 */
export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;

  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: "en_AU",
      alternateLocale: ["en_US", "en_GB"],
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Authentic Indian & Sri Lankan Food in Brisbane`,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      creator: "@kavithastreet",
    },

    // Additional metadata
    alternates: {
      canonical: pageUrl,
    },

    // Verification (add your verification codes when available)
    verification: {
      google: "your-google-verification-code",
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },

    // App-specific
    applicationName: siteConfig.name,
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: siteConfig.name,
    },

    // Format detection
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

/**
 * Generate JSON-LD structured data for better SEO
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/logos/logo.svg`,

    // Cuisine
    servesCuisine: ["Indian", "Sri Lankan", "South Asian", "Street Food"],
    priceRange: "$$",

    // Address
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postcode,
      addressCountry: siteConfig.contact.address.country,
    },

    // Geo coordinates
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },

    // Opening hours
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "20:00",
      },
    ],

    // Social media
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],

    // Additional features
    acceptsReservations: "False",
    hasMenu: `${siteConfig.url}/#food-showcase`,
    paymentAccepted: "Cash, Credit Card, Debit Card",
  };
}

/**
 * Generate menu schema for food items
 */
export function generateMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} Menu`,
    description:
      "Authentic Indian and Sri Lankan street food menu in Brisbane",
    inLanguage: "en-AU",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Appetizers",
        description: "Traditional Indian and Sri Lankan starters",
      },
      {
        "@type": "MenuSection",
        name: "Main Courses",
        description: "Authentic curries and main dishes",
      },
      {
        "@type": "MenuSection",
        name: "Rice & Breads",
        description: "Traditional rice dishes and breads",
      },
      {
        "@type": "MenuSection",
        name: "Traditional Breakfast",
        description: "South Indian breakfast specialties",
      },
    ],
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
