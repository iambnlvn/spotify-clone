import SideBar from "@/components/sideBar/SideBar";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify clone",
  description: "Spotify clone using Next.js, Tailwind...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
