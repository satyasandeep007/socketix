const { ethers } = require("ethers");

// Replace these with actual values
const COUNTER_DEPLOYER_ADDRESS = "0x194C6F64C3D6f1e08be2Be25a4B01Fe154BA333e";
const ARBITRUM_SEPOLIA_RPC = `https://rpc.ankr.com/arbitrum_sepolia/${process.env.ANKR_API_KEY}`;

const COUNTER_DEPLOYER_ABI = [
  "function counter() public view returns (bytes32)",
  "function getOnChainAddress(bytes32 contractId, uint32 chainId) public view returns (address)",
];

// RPC URL
const provider = new ethers.providers.JsonRpcProvider(ARBITRUM_SEPOLIA_RPC);

// Contract address and ABI
const contractAddress = COUNTER_DEPLOYER_ADDRESS;
const abi = COUNTER_DEPLOYER_ABI;

async function test() {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  try {
    const counterValue = await contract.counter();
    console.log("Counter (bytes32):", counterValue);

    // Convert bytes32 to number instead of trying to parse as string
    const counterNumber = ethers.BigNumber.from(counterValue);
    console.log("Counter (Number):", counterNumber.toString());
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
