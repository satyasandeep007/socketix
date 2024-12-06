"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface UserMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string;
    followers_count?: number;
    following_count?: number;
  };
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded-lg transition-colors"
      >
        <Image
          className="rounded-full border-2 border-blue-500"
          src={user.image || "/default-avatar.png"}
          alt="Profile"
          width={40}
          height={40}
        />
        <div className="hidden md:block text-left">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-400">@{user.username}</p>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-3 border-b border-gray-700">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>

          <div className="px-4 py-2 border-b border-gray-700">
            <div className="flex gap-4 text-sm">
              <div>
                <span className="font-semibold">{user.followers_count}</span>
                <span className="text-gray-400 ml-1">Followers</span>
              </div>
              <div>
                <span className="font-semibold">{user.following_count}</span>
                <span className="text-gray-400 ml-1">Following</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-800 transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
