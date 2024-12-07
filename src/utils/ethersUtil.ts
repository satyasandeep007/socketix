import { ethers } from "ethers";

// ABI for the functions we'll use
const ticketsABI = [
  "function mint(address to_, uint256 id_, uint256 amount_, bytes memory data_) external",
  "function symbol() public view returns (string)",
  "function name() public view returns (string)",
  "function uri(uint256 id_) public view returns (string)",
];

async function interactWithTickets(
  contractAddress: string,
  signer: ethers.Signer
) {
  // Create contract instance
  const ticketsContract = new ethers.Contract(
    contractAddress,
    ticketsABI,
    signer
  );

  console.log(ticketsContract, "ticketsContract");

  // Get basic information
  const name = await ticketsContract.name();
  console.log("Contract Name:", name);

  const symbol = await ticketsContract.symbol();
  console.log("Contract Symbol:", symbol);

  // Get URI for a specific token ID (example with ID 1)
  const tokenUri = await ticketsContract.uri(1);
  console.log("Token URI for ID 1:", tokenUri);

  // Mint function example
  async function mintTicket(
    toAddress: string,
    tokenId: number,
    amount: number,
    data: string = "0x"
  ) {
    try {
      const tx = await ticketsContract.mint(toAddress, tokenId, amount, data);
      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log("Mint successful!", receipt);
      return receipt;
    } catch (error) {
      console.error("Error minting:", error);
      throw error;
    }
  }

  return {
    contract: ticketsContract,
    mintTicket,
    getName: () => ticketsContract.name(),
    getSymbol: () => ticketsContract.symbol(),
    getUri: (tokenId: number) => ticketsContract.uri(tokenId),
  };
}

// Usage example:
export async function example() {
  // You'll need to provide these:
  const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
    provider
  );
  const contractAddress = process.env
    .NEXT_PUBLIC_TICKETS_CONTRACT_ADDRESS as string;

  const tickets = await interactWithTickets(contractAddress, signer);
  console.log(tickets);

  // Get contract info
  const name = await tickets.getName();
  const symbol = await tickets.getSymbol();
  const uri = await tickets.getUri(1);

  console.log("Contract Name:", name);
  console.log("Contract Symbol:", symbol);
  console.log("Token URI for ID 1:", uri);
}
