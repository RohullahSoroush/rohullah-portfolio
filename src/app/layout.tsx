import type { Metadata } from "next";
import "./globals.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
