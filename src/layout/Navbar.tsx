"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#F8F8F9] w-full">
      <div className="max-w-[1400px] mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B197FC] flex items-center justify-center text-white font-medium">
              E
            </div>
            <Link href="/" className="text-black font-medium text-xl">
              EventHub
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <NavLink href="/" className="text-[#B197FC]">
              Home
            </NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/organize">Organize</NavLink>
            <button className="px-6 py-2 rounded-full bg-[#B197FC] text-white font-medium hover:bg-[#9775fa] transition-all">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
