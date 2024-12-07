// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MyTokenDeployer} from "../src/MyTokenDeployer.sol";

contract DeployMyToken is Script {
    function run() public {
        string memory rpc = vm.envString("SOCKET_RPC");
        vm.createSelectFork(rpc);

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        MyTokenDeployer myTokenDeployer = MyTokenDeployer(
            vm.envAddress("MYTOKEN_DEPLOYER")
        );

        console.log("MyToken Deployer:", address(myTokenDeployer));

        console.log("Deploying contracts on Arbitrum Sepolia...");
        myTokenDeployer.deployContracts(421614);
        console.log("Deploying contracts on Optimism Sepolia...");
        myTokenDeployer.deployContracts(11155420);
        console.log("Deploying contracts on Base Sepolia...");
        myTokenDeployer.deployContracts(84532);
    }
}
