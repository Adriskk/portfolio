import type { Metadata } from "next";
import { Anton, Nunito } from "next/font/google";
import "./globals.scss";
import PageContentManager from "@/components/PageContentManager/PageContentManager";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Adrian Iskra Portfolio",
  description:
    "Hi. I'm Adrian Iskra, a 20-year-old front-end developer and designer based in Kielce/Wrocław, Poland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${nunito.variable}`}>
        <main className="flex flex-col min-h-[100svh] w-full gap-16 md:gap-24 lg:gap-26">
          <PageContentManager>{children}</PageContentManager>
        </main>
      </body>
    </html>
  );
}
