import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { Loading } from "@/layout/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { headers } from "next/headers";
import ContextProvider from "./ProviderContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "EventHub - Find Amazing Events",
  description: "Discover and join amazing events happening in your area",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = (await headers()).get("cookie");
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Loading>
          <ContextProvider cookies={cookies}>
            <Navbar />
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
            />
          </ContextProvider>
        </Loading>
      </body>
    </html>
  );
}
