import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";

// Root layout for the application
export const metadata: Metadata = {
  title: "Small tools",
  description: "A set of small useful tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
