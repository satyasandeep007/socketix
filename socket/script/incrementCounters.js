const { ethers } = require("ethers");

const API_KEY = process.env.ANKR_API_KEY;

const privateKey = process.env.PRIVATE_KEY;

async function incrementCounters() {
  // On-chain addresses
  const ADDRESSES = {
    arbitrum: {
      forwarder: "0xf04464c21A90454EA1F540c6eB4c3747C46108EC",
      rpc: `https://rpc.ankr.com/arbitrum_sepolia/${API_KEY}`,
      chainId: 421614,
    },
    optimism: {
      forwarder: "0xc702252dbF5359aa34a1fA51a906012F8B83D7cB",
      rpc: `https://rpc.ankr.com/optimism_sepolia/${API_KEY}`,
      chainId: 11155420,
    },
    base: {
      forwarder: "0xacfbD6f407e437671967b449e5bD5406dA32895D",
      rpc: `https://rpc.ankr.com/base_sepolia/${API_KEY}`,
      chainId: 84532,
    },
  };

  const GATEWAY_ABI = [
    "function incrementCounters(address[] memory instances) external",
  ];

  async function _incrementCounters() {
    try {
      const socketProvider = new ethers.providers.JsonRpcProvider(
        "https://rpc-socket-composer-testnet.t.conduit.xyz"
      );

      // You'll need to replace this with your private key
      const wallet = new ethers.Wallet(privateKey, socketProvider);

      const gateway = new ethers.Contract(
        process.env.TICKETS_APP_GATEWAY,
        GATEWAY_ABI,
        wallet
      );

      console.log(gateway, "gateway");

      console.log("\nGathering forwarder addresses...");

      // Filter out zero addresses and collect valid forwarders
      const instances = [];
      for (const [chain, data] of Object.entries(ADDRESSES)) {
        if (data.forwarder !== ethers.constants.AddressZero) {
          instances.push(data.forwarder);
          console.log(`${chain} forwarder:`, data.forwarder);
        } else {
          console.log(`${chain} forwarder not yet deployed`);
        }
      }

      console.log(instances, "instances");

      console.log("\nIncrementing counters on", instances.length, "chains");
      const tx = await gateway.incrementCounters(instances);

      console.log("Transaction hash:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed!");
    } catch (err) {
      console.error("\nError occurred:", err);
    }
  }

  await _incrementCounters();
}

incrementCounters();
