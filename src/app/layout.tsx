import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ReduxProvider, ChakraUIProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Next todo application using RTK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
