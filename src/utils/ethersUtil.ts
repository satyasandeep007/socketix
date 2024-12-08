/* eslint-disable @typescript-eslint/no-explicit-any */

import { createPublicClient, http, defineChain } from "viem";

// Define Socket Chain
export const socketChain = defineChain({
  id: 1, // Socket composer uses chain ID 1
  name: "Socket",
  network: "socket",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-socket-composer-testnet.t.conduit.xyz"],
    },
    public: {
      http: ["https://rpc-socket-composer-testnet.t.conduit.xyz"],
    },
  },
});

export const socketConfig = {
  arbitrum: {
    onChainAddress: "0x8576B555C41CAce4830b34A6B893cFd975E7bA9c",
    forwarderAddress: "0xC68C49606888f10Cc6Ed0a4F58ba5A6c1F0EfD33",
    chainId: 421614,
  },
  optimism: {
    onChainAddress: "0x39f9b2bA5BC4d8CB6241b9466825FE92bd20D5b1",
    forwarderAddress: "0x0eedB4D0857570fd09d0Fb098A243d6dfa58AEDf",
    chainId: 11155420,
  },
  base: {
    onChainAddress: "0x8576B555C41CAce4830b34A6B893cFd975E7bA9c",
    forwarderAddress: "0xC68C49606888f10Cc6Ed0a4F58ba5A6c1F0EfD33",
    chainId: 84532,
  },
};

// Socket Provider Configuration
export const socketProvider = createPublicClient({
  chain: socketChain,
  transport: http("https://rpc-socket-composer-testnet.t.conduit.xyz"),
});

// Using the exact same ABI format as incrementCounters.js
export const SOCKET_GATEWAY_ABI = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "instances",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "tokenId_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const SOCKET_GATEWAY_ADDRESS =
  "0xcCbF487fce0355197d38431fd252f8a81d04A030";

export function prepareMintTransaction(tokenId: number) {
  const instances = Object.values(socketConfig)
    .map((data) => data.forwarderAddress)
    .filter((address) => address !== "0x");

  console.log("Preparing transaction with:", {
    address: SOCKET_GATEWAY_ADDRESS,
    instances,
    tokenId,
  });

  return {
    address: SOCKET_GATEWAY_ADDRESS as `0x${string}`,
    abi: SOCKET_GATEWAY_ABI,
    functionName: "mint",
    args: [instances, BigInt(tokenId)] as const,
  };
}
