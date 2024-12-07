import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { headers } from "next/headers";

import ContextProvider from "@/context/ProviderContext";
import { Loading } from "@/layout/Loading";

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
            <div
              className="h-[100vh]"
              style={{
                backgroundImage: "url(/toronto.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Navbar />
              {children}
            </div>
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
