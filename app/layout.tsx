import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@rainbow-me/rainbowkit/styles.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InsureChain",
  description: "Reliable Coverage, Remarkable Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={mont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
