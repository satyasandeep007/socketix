const { ethers } = require("ethers");
require("dotenv").config();

async function deployMyToken() {
  // Connect to provider
  const provider = new ethers.JsonRpcProvider(process.env.SOCKET_RPC);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Get MyTokenDeployer contract instance
  const myTokenDeployerAddress = process.env.MYTOKEN_DEPLOYER;
  const myTokenDeployer = await ethers.getContractAt(
    "MyTokenDeployer",
    myTokenDeployerAddress,
    wallet
  );

  console.log("MyToken Deployer:", myTokenDeployer.target);

  // Deploy on different networks
  console.log("Deploying contracts on Arbitrum Sepolia...");
  await myTokenDeployer.deployContracts(421614);

  console.log("Deploying contracts on Optimism Sepolia...");
  await myTokenDeployer.deployContracts(11155420);

  console.log("Deploying contracts on Base Sepolia...");
  await myTokenDeployer.deployContracts(84532);
}

deployMyToken()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
