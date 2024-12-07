"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full p-4 bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-xl font-bold text-white">EventHub</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/events" className="text-white hover:text-gray-200">
            Events
          </Link>
          <button className="text-white hover:text-gray-200">Calendars</button>
          <button className="text-white hover:text-gray-200">Discover</button>

          <>
            <Link
              href="/create"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Event
            </Link>
            {/* <UserMenu user={session.user} /> */}
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
