import "./globals.css";

import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { classNames } from "@/utils/classNames";

const inter = Inter({ subsets: ["latin"] });

const metaDescription = "Generate this using ChatGPT";
const titleAndDefault = "Generate this using ChatGPT";
const appUrl = "https://my-app-name.jeanrobertou.com";

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords: "meal, planning, food, ai",
  metadataBase: new URL(appUrl),
  openGraph: {
    title: titleAndDefault,
    description: metaDescription,
    url: appUrl,
    siteName: titleAndDefault,
    images: [
      {
        url: "/hero-profile.jpeg",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={classNames(
          inter.className,
          "text-slate-50 bg-blue-900 flex items-center justify-center"
        )}
      >
        <Toaster position="bottom-right" reverseOrder={true} />
        {children}
      </body>
    </html>
  );
}
