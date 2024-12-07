// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/Console.sol";
import {TicketsAppGateway} from "../src/TicketsAppGateway.sol";
import {TicketsDeployer} from "../src/TicketsDeployer.sol";
import {FeesData} from "socket-protocol/contracts/common/Structs.sol";
import {ETH_ADDRESS} from "socket-protocol/contracts/common/Constants.sol";

contract SetupTickets is Script {
    function run() public {
        address addressResolver = vm.envAddress("ADDRESS_RESOLVER");

        string memory rpc = vm.envString("SOCKET_RPC");
        vm.createSelectFork(rpc);

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Setting fee payment on Ethereum Sepolia
        FeesData memory feesData = FeesData({
            feePoolChain: 11155111,
            feePoolToken: ETH_ADDRESS,
            maxFees: 0.01 ether
        });

        TicketsDeployer ticketsDeployer = new TicketsDeployer(
            addressResolver,
            feesData,
            "Tickets",
            "TICKETS"
        );

        TicketsAppGateway ticketsAppGateway = new TicketsAppGateway(
            addressResolver,
            address(ticketsDeployer),
            feesData
        );

        console.log("TicketsDeployer: ", address(ticketsDeployer));
        console.log("TicketsAppGateway: ", address(ticketsAppGateway));
    }
}
