import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GlobalStateProvider } from "@/stateManager/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joes' Fashion",
  description: "Elevate your style with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStateProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </GlobalStateProvider>
    </html>
  );
}
