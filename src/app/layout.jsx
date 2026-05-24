import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://tusharchaugule.dev"),
  title: "Tushar Chaugule | Full-Stack Developer, AI Systems Builder",
  description:
    "Premium futuristic portfolio for Tushar Chaugule, a Computer Engineering student building scalable full-stack applications, AI systems, and secure digital experiences.",
  keywords: [
    "Tushar Chaugule",
    "Full Stack Developer",
    "MERN Developer",
    "AI Systems",
    "Cybersecurity",
    "Computer Engineering Portfolio"
  ],
  openGraph: {
    title: "Tushar Chaugule | Developer Portfolio",
    description:
      "Full-Stack Developer | AI Systems Builder | Cybersecurity Enthusiast",
    images: ["/tushar-portrait.jpeg"],
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
