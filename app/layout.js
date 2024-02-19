import "./globals.css";
import Link from "next/link";
import { Navbar } from "./ui/Navbar";

export const metadata = {
  title: "Next Exercise",
  description: "Create your next workout"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar>
          <Link href="/">Home</Link>
          <Link href="/favorites">Favorites</Link>
        </Navbar>
      </body>
    </html>
  );
}
