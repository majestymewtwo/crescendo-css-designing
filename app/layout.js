import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mewtwosenpaii",
  description: "A fun website made with nextjs and shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gradient-to-r from-[#010103] to-[#20172d] text-[#FBF6F0] min-h-screen relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
