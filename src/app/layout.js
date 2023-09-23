import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chandu Portfolio",
  description:
    "Welcome to my portfolio showcasing my web development projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google Analytics Script --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Q44W9VFD6Q"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q44W9VFD6Q');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
