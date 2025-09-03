import { Ubuntu } from "next/font/google";
import "./globals.css";

const geistUbuntu = Ubuntu({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans"
  },
  description: "Landrup Dans er en kalender og tilmeldnings app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistUbuntu.variable}`}>
       {children}
      </body>
    </html>
  );
}
