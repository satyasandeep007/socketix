"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn()}
      className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Sign In
    </button>
  );
}
