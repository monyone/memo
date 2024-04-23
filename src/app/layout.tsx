import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./(components)/(organization)/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <main className="max-w-4xl w-full mx-auto p-4 bg-slate-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
