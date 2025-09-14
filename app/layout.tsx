import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title:
    "Fullstack Artists - Professional Website Development & Digital Solutions",
  description:
    "Transform your business with our comprehensive digital solutions. We specialize in custom website development, e-commerce platforms, CRM systems, mobile apps, and business automation. From responsive business websites starting at ₹9,999 to advanced CRM solutions at ₹25,000, we deliver value-driven digital products that drive growth. Free consultation, transparent pricing, and dedicated support included.",
  keywords: [
    "website development",
    "web design",
    "e-commerce development",
    "CRM development",
    "mobile app development",
    "business automation",
    "digital solutions",
    "responsive websites",
    "SEO friendly websites",
    "payment gateway integration",
    "custom software development",
    "web maintenance",
    "hosting setup",
    "domain registration",
    "business websites",
    "online presence",
    "digital transformation",
    "web development company",
    "software solutions",
    "business growth",
  ],
  authors: [{ name: "Fullstack Artists" }],
  creator: "Fullstack Artists",
  publisher: "Fullstack Artists",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullstackartists.com",
    siteName: "Fullstack Artists",
    title:
      "Fullstack Artists - Professional Website Development & Digital Solutions",
    description:
      "Transform your business with our comprehensive digital solutions. We specialize in custom website development, e-commerce platforms, CRM systems, mobile apps, and business automation. From responsive business websites starting at ₹9,999 to advanced CRM solutions at ₹25,000, we deliver value-driven digital products that drive growth. Free consultation, transparent pricing, and dedicated support included.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 642,
        alt: "Fullstack Artists - Website Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fullstack Artists - Professional Website Development & Digital Solutions",
    description:
      "Transform your business with our comprehensive digital solutions. We specialize in custom website development, e-commerce platforms, CRM systems, mobile apps, and business automation.",
    images: ["/logo.jpg"],
    creator: "@fullstackartists",
    site: "@fullstackartists",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#0066FF",
  colorScheme: "light",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
