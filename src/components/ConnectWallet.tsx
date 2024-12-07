"use client";

import { useState } from "react";

export default function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
    >
      {isConnected ? (
        <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  );
}
