import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-website-okni.onrender.com"),
  title: "Tushar Chaugule | Engineering Control Room",
  description:
    "Personal engineering control room & systems showcase: Software Engineering × Cybersecurity × AI × Embedded/IoT. Verified architectures, testing evidence, and deterministic systems design.",
  keywords: [
    "Tushar Chaugule",
    "Computer Engineering",
    "Cybersecurity Control Plane",
    "Rakshak",
    "Virtual IoT Security Laboratory",
    "KS Sentinel 2.0",
    "VedAI",
    "Software Engineering",
    "Embedded Systems",
    "Pune",
  ],
  authors: [{ name: "Tushar Chaugule" }],
  creator: "Tushar Chaugule",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tushar Chaugule | Engineering Control Room",
    description:
      "Personal engineering control room & systems showcase: Software Engineering × Cybersecurity × AI × Embedded/IoT.",
    images: [
      {
        url: "/tushar-portrait.jpeg",
        width: 896,
        height: 1156,
        alt: "Tushar Chaugule — Engineering Control Room",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Chaugule | Engineering Control Room",
    description: "Systems portfolio across Software Engineering, Cybersecurity, AI, and Embedded/IoT.",
    images: ["/tushar-portrait.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-control-bg text-control-text min-h-screen antialiased">
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
