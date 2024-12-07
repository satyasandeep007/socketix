"use client";

import {
  getContractInfo,
  getTokenUri,
  mintNewTicket,
} from "@/utils/ethersUtil";
import { useState } from "react";

const TestPage = () => {
  const [contractInfo, setContractInfo] = useState<{
    name: string;
    symbol: string;
  } | null>(null);
  const [tokenUri, setTokenUri] = useState<string | null>(null);
  const [mintReceipt, setMintReceipt] = useState<any | null>(null);
  const [tokenId, setTokenId] = useState<number>(1);
  const [mintAddress, setMintAddress] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<number>(1);

  const handleGetContractInfo = async () => {
    const info = await getContractInfo();
    setContractInfo(info);
  };

  const handleGetTokenUri = async () => {
    const uri = await getTokenUri(tokenId);
    setTokenUri(uri);
  };

  const handleMintTicket = async () => {
    try {
      const receipt = await mintNewTicket(mintAddress, tokenId, mintAmount);
      setMintReceipt(receipt);
    } catch (error) {
      console.error("Error minting ticket:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
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
            type="text"
            value={mintAddress}
            onChange={(e) => setMintAddress(e.target.value)}
            className="border p-2 rounded-md"
            placeholder="Address to mint to"
          />
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
            className="bg-purple-500 text-white p-2 rounded-md"
            onClick={handleMintTicket}
          >
            Mint Ticket
          </button>
        </div>
        {mintReceipt && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p>Mint Transaction Hash: {mintReceipt.hash}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
