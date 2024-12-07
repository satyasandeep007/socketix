"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B197FC] flex items-center justify-center text-white font-medium">
              E
            </div>
            <Link href="/" className="text-black font-medium text-xl">
              EventHub
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/organize">Organize</NavLink>
            <button className="px-6 py-2.5 rounded-full border-2 border-[#B197FC] text-[#B197FC] font-medium hover:bg-[#B197FC] hover:text-white transition-all">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
