const { ethers } = require("ethers");

const API_KEY = process.env.ANKR_API_KEY;

async function checkCounters() {
  // On-chain addresses
  const ADDRESSES = {
    arbitrum: {
      forwarder: "0xf04464c21A90454EA1F540c6eB4c3747C46108EC",
      onchain: "0x194C6F64C3D6f1e08be2Be25a4B01Fe154BA333e",
      rpc: `https://rpc.ankr.com/arbitrum_sepolia/${API_KEY}`,
    },
    optimism: {
      forwarder: "0xc702252dbF5359aa34a1fA51a906012F8B83D7cB",
      onchain: "0x6b39c3a883880a2b8f2f19984b576dc133d98ce1",
      rpc: `https://rpc.ankr.com/optimism_sepolia/${API_KEY}`,
    },
    base: {
      forwarder: "0xacfbD6f407e437671967b449e5bD5406dA32895D",
      onchain: "0x277F41f9e49Fa131AdC6dAD10879EaffF7e3a300",
      rpc: `https://rpc.ankr.com/base_sepolia/${API_KEY}`,
    },
  };

  const COUNTER_ABI = [
    "function counter() public view returns (uint256)",
    "function getOnChainAddress(bytes32, uint256) view returns (address)",
  ];

  async function _checkCounters() {
    try {
      const socketProvider = new ethers.providers.JsonRpcProvider(
        "https://rpc-socket-composer-testnet.t.conduit.xyz"
      );

      const deployer = new ethers.Contract(
        process.env.TICKETS_DEPLOYER,
        COUNTER_ABI,
        socketProvider
      );

      console.log("\nChecking counter values on each chain:");

      for (const [chain, data] of Object.entries(ADDRESSES)) {
        try {
          const provider = new ethers.providers.JsonRpcProvider(data.rpc);
          const network = await provider.getNetwork();
          console.log(`\n${chain} network:`, network.chainId);

          const counterHash = await deployer.counter();
          const counterHashHex = ethers.utils.hexZeroPad(
            counterHash.toHexString(),
            32
          );

          const chainDeployer = new ethers.Contract(
            data.onchain,
            COUNTER_ABI,
            provider
          );

          console.log(`${chain} counter hash:`, counterHashHex);
          // console.log(chainDeployer, "chainDeployer");

          const counterAddress = await chainDeployer.counter();

          console.log(`${chain} counter address:`, counterAddress);
        } catch (e) {
          console.log(`${chain} chain error:`, e);
        }
      }
    } catch (err) {
      console.error("\nError occurred:", err);
    }
  }

  _checkCounters();
}

checkCounters();
