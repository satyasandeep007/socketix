// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MyTokenAppGateway} from "../src/MyTokenAppGateway.sol";

contract AddReceivers is Script {
    address[] receivers = []; // Add your receivers here
    uint256[] amounts = []; // Add your amounts here

    function run() public {
        string memory rpc = vm.envString("SOCKET_RPC");
        vm.createSelectFork(rpc);

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        MyTokenAppGateway myTokenAppGateway = MyTokenAppGateway(
            vm.envAddress("MYTOKEN_APP_GATEWAY")
        );
        myTokenAppGateway.addAirdropReceivers(receivers, amounts);
    }
}
