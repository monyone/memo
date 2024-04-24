import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/(components)/(organization)/header";
import { BLOG_TITLE } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: "雑多なメモ置き場",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div role="presentation none">
          <main className="max-w-4xl w-full mx-auto mt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
