import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer";

const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});
const sourceSerif4 = Source_Serif_4({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "Thư viện phím cơ",
  description: "Nơi tìm kiếm niềm đam mê với phím cơ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`space-y-8 overflow-x-hidden bg-sh-background md:space-y-10 ${oswald.variable} ${sourceSerif4.variable}`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
