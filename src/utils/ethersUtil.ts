/* eslint-disable @typescript-eslint/no-explicit-any */
import { Wallet, Contract, JsonRpcProvider } from "ethers";

export async function prepareMintTransaction(tokenId: number) {
  const provider = new JsonRpcProvider(
    "https://rpc-socket-composer-testnet.t.conduit.xyz"
  );

  const privatekey = "";

  const wallet = new Wallet(privatekey, provider);

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
    wallet
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
    // base: {
    //   onChainAddress: "0x8576B555C41CAce4830b34A6B893cFd975E7bA9c",
    //   forwarderAddress: "0xC68C49606888f10Cc6Ed0a4F58ba5A6c1F0EfD33",
    //   chainId: 84532,
    // },
  };
  const instances = Object.values(socketConfig)
    .map((data) => data.forwarderAddress)
    .filter((address) => address !== "0x");

  const tx = await contract.mint(
    "0xC68C49606888f10Cc6Ed0a4F58ba5A6c1F0EfD33",
    BigInt(tokenId)
  );

  return tx;
}
