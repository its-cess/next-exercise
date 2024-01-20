import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Exercise",
  description: "Create your next workout"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home</Link>
        {children}
      </body>
    </html>
  );
}
