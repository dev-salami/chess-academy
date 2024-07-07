import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.themovingtrain.org"),
  title: {
    default: "Moving Train | Moving Train Chess Academy",
    template: "%s | Moving Train",
  },
  description:
    "The Moving Train Online Academy offers top-notch chess education, fostering lifelong passion and skills. Our expert instruction cultivates strategic thinking, problem-solving, and sportsmanship to prepare players for success in chess and life.",
  openGraph: {
    title: "Moving Train | Moving Train Chess Academy",
    description:
      "The Moving Train Online Academy offers top-notch chess education, fostering lifelong passion and skills. Our expert instruction cultivates strategic thinking, problem-solving, and sportsmanship to prepare players for success in chess and life.",
    type: "website",
    locale: "en-US",
    url: "https://www.themovingtrain.org/",
    siteName: "Moving Train",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
