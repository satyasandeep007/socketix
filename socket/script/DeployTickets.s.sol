// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TicketsDeployer} from "../src/TicketsDeployer.sol";

contract DeployTickets is Script {
    function run() public {
        string memory rpc = vm.envString("SOCKET_RPC");
        vm.createSelectFork(rpc);

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        TicketsDeployer ticketsDeployer = TicketsDeployer(
            vm.envAddress("TICKETS_DEPLOYER")
        );

        console.log("Tickets Deployer:", address(ticketsDeployer));

        console.log("Deploying contracts on Arbitrum Sepolia...");
        ticketsDeployer.deployContracts(421614);
        console.log("Deploying contracts on Optimism Sepolia...");
        ticketsDeployer.deployContracts(11155420);
        console.log("Deploying contracts on Base Sepolia...");
        ticketsDeployer.deployContracts(84532);
    }
}
