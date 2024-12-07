// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./Tickets.sol";
import "socket-protocol/contracts/base/AppDeployerBase.sol";

contract TicketsDeployer is AppDeployerBase {
    bytes32 public tickets = _createContractId("tickets");

    constructor(
        address addressResolver_,
        FeesData memory feesData_,
        string memory name_,
        string memory symbol_
    ) AppDeployerBase(addressResolver_) {
        creationCodeWithArgs[tickets] = abi.encodePacked(
            type(Tickets).creationCode,
            abi.encode(name_, symbol_)
        );
        _setFeesData(feesData_);
    }

    function deployContracts(uint32 chainSlug) external async {
        _deploy(tickets, chainSlug);
    }

    function initialize(uint32 chainSlug) public override async {}
}
