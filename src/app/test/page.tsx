/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  useAccount,
  usePublicClient,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { getContractInfo, getTokenUri, ticketsABI } from "@/utils/ethersUtil";

const TestPage = () => {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();

  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  console.log("isPending", isPending);
  console.log("isConfirming", isConfirming);
  console.log("isConfirmed", isConfirmed);

  const [contractInfo, setContractInfo] = useState<{
    name: string;
    symbol: string;
  } | null>(null);
  const [tokenUri, setTokenUri] = useState<string | null>(null);
  const [tokenId, setTokenId] = useState<number>(1);
  const [mintAmount, setMintAmount] = useState<number>(1);

  const handleGetContractInfo = async () => {
    if (!isConnected) {
      alert("Please connect your wallet using the button in the navbar");
      return;
    }
    try {
      const info = await getContractInfo(publicClient);
      setContractInfo(info);
    } catch (error) {
      console.error("Error getting contract info:", error);
    }
  };

  const handleGetTokenUri = async () => {
    if (!isConnected) {
      alert("Please connect your wallet using the button in the navbar");
      return;
    }
    try {
      const uri = await getTokenUri(tokenId, publicClient);
      setTokenUri(uri);
    } catch (error) {
      console.error("Error getting token URI:", error);
    }
  };

  const handleMintTicket = async () => {
    if (!isConnected) {
      alert("Please connect your wallet using the button in the navbar");
      return;
    }
    try {
      console.log("Minting with params:", {
        address: process.env.NEXT_PUBLIC_TICKETS_CONTRACT_ADDRESS,
        tokenId,
        mintAmount,
        userAddress: address,
      });

      writeContract({
        address: process.env
          .NEXT_PUBLIC_TICKETS_CONTRACT_ADDRESS as `0x${string}`,
        abi: ticketsABI,
        functionName: "mint",
        args: [
          address!,
          BigInt(tokenId),
          BigInt(mintAmount),
          "0x" as `0x${string}`,
        ],
      });
    } catch (error) {
      console.error("Error minting ticket:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
      <>
        {/* Contract Info Section */}
        <div className="w-full max-w-md">
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-full"
            onClick={handleGetContractInfo}
          >
            Get Contract Info
          </button>
          {contractInfo && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p>Name: {contractInfo.name}</p>
              <p>Symbol: {contractInfo.symbol}</p>
            </div>
          )}
        </div>

        {/* Token URI Section */}
        <div className="w-full max-w-md">
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              value={tokenId}
              onChange={(e) => setTokenId(Number(e.target.value))}
              className="border p-2 rounded-md flex-1"
              placeholder="Token ID"
            />
            <button
              className="bg-green-500 text-white p-2 rounded-md"
              onClick={handleGetTokenUri}
            >
              Get Token URI
            </button>
          </div>
          {tokenUri && (
            <div className="p-4 bg-gray-100 rounded-md">
              <p>Token URI: {tokenUri}</p>
            </div>
          )}
        </div>

        {/* Mint Ticket Section */}
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            <input
              type="number"
              value={tokenId}
              onChange={(e) => setTokenId(Number(e.target.value))}
              className="border p-2 rounded-md"
              placeholder="Token ID"
            />
            <input
              type="number"
              value={mintAmount}
              onChange={(e) => setMintAmount(Number(e.target.value))}
              className="border p-2 rounded-md"
              placeholder="Amount"
            />
            <button
              className={`${
                isPending || isConfirming ? "bg-gray-500" : "bg-purple-500"
              } text-white p-2 rounded-md`}
              onClick={handleMintTicket}
              disabled={isPending || isConfirming}
            >
              {isPending
                ? "Confirming..."
                : isConfirming
                ? "Waiting for confirmation..."
                : "Mint Ticket"}
            </button>
          </div>

          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && <div>Error: {error.shortMessage || error.message}</div>}
        </div>
      </>
    </div>
  );
};

export default TestPage;
