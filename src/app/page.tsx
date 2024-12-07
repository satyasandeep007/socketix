"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import LoginButton from "@/components/LoginButton";
import UserMenu from "@/components/UserMenu";
import ConnectWallet from "@/components/ConnectWallet";
import TaskCard from "@/components/TaskCard";
import NFTGallery from "@/components/NFTGallery";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f1825] to-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full p-4 bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Tweet2Earn
            </span>
          </div>

          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                <ConnectWallet />
                <UserMenu user={session.user} />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 text-transparent bg-clip-text">
              Earn NFTs for Your Twitter Engagement
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
              Connect your Twitter account and wallet, engage with hashtags, and
              earn unique NFTs based on your tweet performance.
            </p>

            {session ? (
              <div className="w-full">
                {/* Active Tasks Section */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Active Tasks
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TaskCard
                      hashtag="#Web3Builders"
                      likesRequired={100}
                      nftReward="/nft-preview-1.png"
                      deadline="2024-04-01"
                    />
                    <TaskCard
                      hashtag="#ETHGlobal"
                      likesRequired={50}
                      nftReward="/nft-preview-2.png"
                      deadline="2024-03-25"
                    />
                    {/* Add more TaskCards as needed */}
                  </div>
                </div>

                {/* Your NFTs Section */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Your Earned NFTs
                  </h2>
                  <NFTGallery />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <LoginButton />
                <p className="text-sm text-gray-500">
                  Connect your Twitter account to start earning NFTs
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
