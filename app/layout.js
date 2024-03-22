import { Inter } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
import ModeProvider from "@/Providers/ModeProvider";
import AuthProvider from "@/Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EZShop",
  description: "Discover, Shop and Sell!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <AuthProvider>
          <ModeProvider>
            <div className="box dark:bg-black bg-[#f8f9fa] dark:text-gray-300 text-gray-900">
              <Navbar />
              <div className="mt-20 mb-28 ">{children}</div>
              <Footer />
            </div>
            <Toaster
              position=" top-right"
              toastOptions={{
                style: {
                  background: "rgb(34, 80, 231)",
                  color: "white",
                },
              }}
            />
          </ModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
{
  /* <div className="box dark:bg-black bg-[#f8f9fa] dark:text-gray-300 text-gray-900"> */
}
