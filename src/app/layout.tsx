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
  icons: {
    icon: [
      {
        rel: "favicon",
        type: "image/png",
        url: "/favicons/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        url: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        type: "image/svg",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#1f241f",
      },
    ],
    shortcut: ["/apple-touch-icon.png"],
  },
  keywords: [
    "Portfolio",
    "Personal website",
    "Adrian Iskra portfolio",
    "portfolio adrian iskra",
    "portfolio kielce",
    "portfolio wroclaw",
    "portfolio wrocław",
    "web developer wrocław",
    "web developer wroclaw",
    "web developer kielce",
    "front end developer wrocław",
    "front end developer wroclaw",
    "front end developer kielce",
    "frontend developer kielce",
    "programista stron kielce",
    "programista stron wrocław",
    "programista stron wroclaw",
    "strony internetowe wroclaw",
    "adrian iskra wizytówka",
    "adrian iskra wizytowka",
  ],
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
