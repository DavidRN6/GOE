import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "GOE",
  description: "Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
