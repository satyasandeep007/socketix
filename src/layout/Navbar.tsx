"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { isConnected } = useAccount();
  return (
    <nav className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1400px] mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#9B87FE] flex items-center justify-center text-white font-medium">
              <Image src="/logo.png" alt="EventHub" width={24} height={24} />
            </div>
            <Link href="/" className="text-black font-medium text-xl">
              EventHub
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <NavLink href="/" className="text-[#9B87FE]">
              Home
            </NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/organize">Organize</NavLink>
            <button className="px-6 py-2 rounded-full bg-[#9B87FE] text-white font-medium hover:bg-[#9775fa] transition-all">
              Sign in
            </button>
            {!isConnected ? (
              <w3m-connect-button size="sm" />
            ) : (
              <div className="flex items-center gap-2">
                <w3m-network-button />
                <w3m-account-button balance={"show"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
