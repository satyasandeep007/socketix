/* eslint-disable @typescript-eslint/no-explicit-any */

// ABI for the functions we'll use
export const ticketsABI = [
  {
    inputs: [
      { name: "to_", type: "address" },
      { name: "id_", type: "uint256" },
      { name: "amount_", type: "uint256" },
      { name: "data_", type: "bytes" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "id_", type: "uint256" }],
    name: "uri",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

const contractAddress = process.env
  .NEXT_PUBLIC_TICKETS_CONTRACT_ADDRESS as string;

export async function getContractInfo(publicClient: any) {
  const name = await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: ticketsABI,
    functionName: "name",
  });

  const symbol = await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: ticketsABI,
    functionName: "symbol",
  });

  return { name: name as string, symbol: symbol as string };
}

export async function getTokenUri(tokenId: number, publicClient: any) {
  const uri = await publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: ticketsABI,
    functionName: "uri",
    args: [tokenId],
  });

  return uri as string;
}

export async function mintNewTicket(
  toAddress: string,
  tokenId: number,
  amount: number,
  walletClient: any
) {
  const hash = await walletClient.writeContract({
    address: contractAddress as `0x${string}`,
    abi: ticketsABI,
    functionName: "mint",
    args: [toAddress, tokenId, amount, "0x"],
  });

  return hash;
}
