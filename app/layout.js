import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { UserProvider } from "@/redux/userContext";
import "@/public/fonts/Circularstd/stylesheet.css";
import "@/public/fonts/thunder/stylesheet.css";
import Navbar from "@/components/navbar";
import Lenis1 from "@/components/lenis";

export const metadata = {
  title: "HACKPRIX",
  description: "TEAM-CYBERSORCERERS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Lenis1>
          <UserProvider>
            <Navbar />
            {children}
          </UserProvider>
        </Lenis1>
        <Toaster />
      </body>
    </html>
  );
}
