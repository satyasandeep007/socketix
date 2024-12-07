// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "socket-protocol/contracts/base/AppGatewayBase.sol";
import "solady/auth/Ownable.sol";
import "./Tickets.sol";

contract TicketsAppGateway is AppGatewayBase, Ownable {
    mapping(address => mapping(uint256 => uint256)) public airdropReceivers;

    constructor(
        address _addressResolver,
        address deployerContract_,
        FeesData memory feesData_
    ) AppGatewayBase(_addressResolver) Ownable() {
        addressResolver.setContractsToGateways(deployerContract_);
        _setFeesData(feesData_);
    }

    function mint(address _instance, uint256 tokenId_) external async {
        Tickets(_instance).mint(msg.sender, tokenId_, 1, "");
    }
}
