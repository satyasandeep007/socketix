"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/LoginButton";
import UserMenu from "@/components/UserMenu";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f1825] to-gray-900">
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
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              ETH India 2024
            </span>
          </div>

          <div className="flex items-center gap-4">
            {session?.user ? <UserMenu user={session.user} /> : <LoginButton />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 text-transparent bg-clip-text">
              ETH India 2024
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Join us in building something amazing. Connect with Twitter to get
              started and explore our innovative features.
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-400">
                  Experience blazing fast performance with our optimized
                  platform.
                </p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Secure
                </h3>
                <p className="text-gray-400">
                  Your data is protected with enterprise-grade security
                  measures.
                </p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Real-time
                </h3>
                <p className="text-gray-400">
                  Get instant updates and seamless real-time collaboration.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            {!session && (
              <div className="mt-16">
                <LoginButton />
                <p className="mt-4 text-sm text-gray-500">
                  No account required. Just sign in with Twitter to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
