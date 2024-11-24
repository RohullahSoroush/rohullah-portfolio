import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
// import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Rohullah Mohammadi",
  description: "Rohullah Mohammadi Personal Portfolio Profile",
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

        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
