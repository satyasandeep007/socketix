import Image from "next/image";
import { getServerSession } from "next-auth";
import LoginButton from "@/components/LoginButton";

export default async function Home() {
  const session = await getServerSession();

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
            <span className="text-xl font-bold">ETHIndia 2024</span>
          </div>

          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm">{session.user?.name}</span>
                <Image
                  className="rounded-full border-2 border-blue-500"
                  src={session.user?.image || "/default-avatar.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            ETHIndia 2024
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Sign in with Twitter to get started with our amazing features.
          </p>
        </div>
      </main>
    </div>
  );
}
