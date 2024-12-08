"use client";

import { useState } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { prepareMintTransaction } from "@/utils/ethersUtil";

const TestPage = () => {
  const { isConnected } = useAccount();

  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleIncrement = async () => {
    if (!isConnected) {
      alert("Please connect your wallet using the button in the navbar");
      return;
    }

    try {
      const tx = await prepareMintTransaction(1);
      writeContract(tx);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
      <div className="w-full max-w-md">
        <button
          className={`w-full ${
            isPending || isConfirming ? "bg-gray-500" : "bg-purple-500"
          } text-white p-2 rounded-md`}
          onClick={handleIncrement}
          disabled={isPending || isConfirming}
        >
          {isPending
            ? "Preparing Transaction..."
            : isConfirming
            ? "Waiting for confirmation..."
            : "Increment Counters"}
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded-md text-red-600">
            Error: {error.message}
          </div>
        )}
        {hash && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>Transaction Hash: {hash}</p>
            {isConfirming && <p>Waiting for confirmation...</p>}
            {isConfirmed && <p>Transaction confirmed!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
