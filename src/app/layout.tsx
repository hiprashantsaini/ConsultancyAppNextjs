import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savior Hires",
  description: "Saviour Hires a consultancy service provider.",
   icons: {
    icon: "/logo.png", // path from public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ScrollToTop/>
        {children}
        <FloatingWhatsApp/>
      </body>
    </html>
  );
}
