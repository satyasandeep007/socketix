"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
// import { getServerSession } from "next-auth";
import LoginButton from "@/components/LoginButton";
// import UserMenu from "@/components/UserMenu";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session1 }: any = useSession();

  if (session1) {
    console.log("User ID:", session1.user?.id);
    console.log("Access Token:", session1?.accessToken);
  }
  // const session = await getServerSession();

  console.log(session1, "session");
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full p-4 bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-bold">Hackathon Project</span>
          </div>

          <div className="flex items-center gap-4">
            <LoginButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Welcome to Our Hackathon Project
          </h1>
        </div>
      </main>
    </div>
  );
}
