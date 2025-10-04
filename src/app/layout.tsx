import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display, Crimson_Text, Dancing_Script, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartSlideOut from "@/components/CartSlideOut";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "DesiThreads - Premium South Asian Graphic Tees",
  description: "Celebrate South Asian culture with premium graphic t-shirts featuring Bollywood legends and Punjabi pride. Authentic designs, premium quality, fast shipping.",
  keywords: "South Asian clothing, Bollywood t-shirts, Punjabi clothing, graphic tees, Indian celebrities, cultural apparel",
  authors: [{ name: "DesiThreads" }],
  creator: "DesiThreads",
  publisher: "DesiThreads",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://desithreads.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DesiThreads - Premium South Asian Graphic Tees",
    description: "Celebrate South Asian culture with premium graphic t-shirts featuring Bollywood legends and Punjabi pride.",
    url: "https://desithreads.com",
    siteName: "DesiThreads",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DesiThreads - Premium South Asian Graphic Tees",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesiThreads - Premium South Asian Graphic Tees",
    description: "Celebrate South Asian culture with premium graphic t-shirts featuring Bollywood legends and Punjabi pride.",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${crimsonText.variable} ${dancingScript.variable} ${greatVibes.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CartSlideOut />
        </CartProvider>
      </body>
    </html>
  );
}
