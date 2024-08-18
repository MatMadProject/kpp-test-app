import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwalifikowana Pierwsza Pomoc",
  description:
    "Apliakcja przeznaczona dla osób przygotowujących się do egzaminu i recertyfikacji kwalifikowanej pierwszej pomocy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col  p-4">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
