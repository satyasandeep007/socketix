"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { isConnected } = useAccount();
  return (
    <nav className=" max-w-[1400px] mx-auto h-[10vh]">
      <div className=" py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg  flex items-center justify-center text-white font-medium"></div>
            <Link href="/" className="text-white font-medium text-2xl">
              Socketix
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <NavLink href="/" className="text-white">
              Home
            </NavLink>
            <NavLink className="text-white" href="/events">Events</NavLink>
            <NavLink className="text-white" href="/organize">Organize</NavLink>

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
