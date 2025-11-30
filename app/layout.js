import { DM_Sans, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "CampusConnect – Student Portal",
  description: "Mobile-first student portal for courses, announcements, schedules, and updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
