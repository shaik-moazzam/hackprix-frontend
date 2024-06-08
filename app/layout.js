import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { UserProvider } from "@/redux/userContext";
import "@/public/fonts/Circularstd/stylesheet.css";
import "@/public/fonts/thunder/stylesheet.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "HACKPRIX",
  description: "TEAM-CYBERSORCERERS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar />
          {children}</UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
