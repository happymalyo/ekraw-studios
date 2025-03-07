import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/site-header";
import HeaderMobile from "@/components/site-header-mobile";
import Footer from "@/components/site-footer";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekraw Studios",
  description: "Ekraw studios",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", manrope.className)}
      >
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="relative flex min-h-screen flex-col bg-background animate-fade-in">
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background)/0.95)] via-[hsl(344_50%_20%/0.3)] to-[hsl(340_30%_15%/0.4)] pointer-events-none"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <HeaderMobile />
                <div className="flex-1 py-12 lg:py-16">{children}</div>
                <Footer />
              </div>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
