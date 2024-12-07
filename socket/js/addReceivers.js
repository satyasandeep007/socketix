const { ethers } = require("ethers");
require("dotenv").config();

async function addReceivers() {
  // Connect to provider
  const provider = new ethers.JsonRpcProvider(process.env.SOCKET_RPC);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const receivers = ["<receiver1>", "<receiver2>", "<receiver3>"];

  const amounts = ["<amount1>", "<amount2>", "<amount3>"];

  // Get MyTokenAppGateway contract instance
  const myTokenAppGatewayAddress = process.env.MYTOKEN_APP_GATEWAY;
  const myTokenAppGateway = await ethers.getContractAt(
    "MyTokenAppGateway",
    myTokenAppGatewayAddress,
    wallet
  );

  await myTokenAppGateway.addAirdropReceivers(receivers, amounts);
}

addReceivers()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
