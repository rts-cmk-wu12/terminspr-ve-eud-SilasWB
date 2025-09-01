// import { Ubuntu } from "next/font/google";
import "./globals.css";

// const geistUbuntu = Ubuntu({
//   variable: "--font-ubuntu-sans",
//   subsets: ["latin"],
// });
export function Styling() {
const FontSmall = "font-size: 18px;"
const FontMedium = "font-size: 24px;"
const FontLarge = "font-size: 36px;"

}



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

      <body>{children}</body>
      {/* <body className={`${geistUbuntu.variable}`}> */}
      
      {/* </body> */}
    </html>
  );
}
