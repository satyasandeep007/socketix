// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {My1155TokenDeployer} from "../src/My1155TokenDeployer.sol";

contract DeployMy1155Token is Script {
    function run() public {
        string memory rpc = vm.envString("SOCKET_RPC");
        vm.createSelectFork(rpc);

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        My1155TokenDeployer my1155TokenDeployer = My1155TokenDeployer(
            vm.envAddress("MY_1155_TOKEN_DEPLOYER")
        );

        console.log("My1155Token Deployer:", address(my1155TokenDeployer));

        console.log("Deploying contracts on Arbitrum Sepolia...");
        my1155TokenDeployer.deployContracts(421614);
        console.log("Deploying contracts on Optimism Sepolia...");
        my1155TokenDeployer.deployContracts(11155420);
        console.log("Deploying contracts on Base Sepolia...");
        my1155TokenDeployer.deployContracts(84532);
    }
}
