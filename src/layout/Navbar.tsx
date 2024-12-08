"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const Navbar = ({ isHomePage }: { isHomePage: boolean }) => {
  const { isConnected, isLoading, address, connect, disconnect } =
    useGlobalContext();

  return (
    <nav className="max-w-[1400px] mx-auto h-[10vh]">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium"></div>
            <Link
              href="/"
              className={`font-medium text-2xl ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              Socketix
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <NavLink
              href="/"
              className={`${isHomePage ? "text-white" : "text-black"}`}
            >
              Home
            </NavLink>
            <NavLink
              className={`${isHomePage ? "text-white" : "text-black"}`}
              href="/events"
            >
              Events
            </NavLink>
            <NavLink
              className={`${isHomePage ? "text-white" : "text-black"}`}
              href="/organize"
            >
              Organize
            </NavLink>

            {isLoading ? (
              <div className="h-9 w-[120px] animate-pulse bg-gray-200 rounded-full" />
            ) : !isConnected ? (
              <button
                onClick={connect}
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
                <button
                  onClick={disconnect}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
