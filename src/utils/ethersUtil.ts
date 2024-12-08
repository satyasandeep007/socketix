/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contract, BrowserProvider, JsonRpcSigner } from "ethers";

export async function prepareMintTransaction(tokenId: number, chainId: number) {
  // Get the provider from MetaMask
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer: JsonRpcSigner = await provider.getSigner();

  const SOCKET_GATEWAY_ADDRESS = "0xcCbF487fce0355197d38431fd252f8a81d04A030";

  const SOCKET_GATEWAY_ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "instances",
          type: "address",
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

  const contract = new Contract(
    SOCKET_GATEWAY_ADDRESS,
    SOCKET_GATEWAY_ABI,
    signer
  );

  const socketConfig = {
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
  };

  // Find the config for the specified chainId
  const selectedConfig = Object.values(socketConfig).find(
    (config) => config.chainId === chainId
  );

  if (!selectedConfig) {
    throw new Error(`No configuration found for chainId ${chainId}`);
  }

  const tx = await contract.mint(
    selectedConfig.forwarderAddress,
    BigInt(tokenId)
  );

  return tx;
}
