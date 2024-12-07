// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./My1155Token.sol";
import "socket-protocol/contracts/base/AppDeployerBase.sol";

contract My1155TokenDeployer is AppDeployerBase {
    bytes32 public my1155Token = _createContractId("my1155Token");

    constructor(
        address addressResolver_,
        FeesData memory feesData_,
        string memory name_,
        string memory symbol_
    ) AppDeployerBase(addressResolver_) {
        creationCodeWithArgs[my1155Token] = abi.encodePacked(
            type(My1155Token).creationCode,
            abi.encode(name_, symbol_)
        );
        _setFeesData(feesData_);
    }

    function deployContracts(uint32 chainSlug) external async {
        _deploy(my1155Token, chainSlug);
    }

    function initialize(uint32 chainSlug) public override async {}
}
