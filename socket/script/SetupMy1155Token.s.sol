// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/Console.sol";
import {My1155TokenAppGateway} from "../src/My1155TokenAppGateway.sol";
import {My1155TokenDeployer} from "../src/My1155TokenDeployer.sol";
import {FeesData} from "lib/socket-protocol/contracts/common/Structs.sol";
import {ETH_ADDRESS} from "lib/socket-protocol/contracts/common/Constants.sol";

contract SetupMyToken is Script {
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

        My1155TokenDeployer my1155TokenDeployer = new My1155TokenDeployer(
            addressResolver,
            feesData,
            "My1155Token",
            "M1155" // Removed decimals parameter
        );

        My1155TokenAppGateway my1155TokenAppGateway = new My1155TokenAppGateway(
            addressResolver,
            address(my1155TokenDeployer),
            feesData
        );

        console.log("My1155TokenDeployer: ", address(my1155TokenDeployer));
        console.log("My1155TokenAppGateway: ", address(my1155TokenAppGateway));
    }
}
