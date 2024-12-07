// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "solady/tokens/ERC1155.sol"; // Changed from ERC20 to ERC1155

contract My1155Token is ERC1155 {
    string private _name;
    string private _symbol;

    address public _SOCKET;

    string private baseURI; // Add this line to store the base URI

    constructor(string memory name_, string memory symbol_) {
        // Removed decimals parameter
        _name = name_;
        _symbol = symbol_;
        _SOCKET = msg.sender;
        baseURI = ""; // Initialize empty base URI
    }

    error NotSOCKET();

    modifier onlySOCKET() {
        if (msg.sender != _SOCKET) revert NotSOCKET();
        _;
    }

    function mint(
        address to_,
        uint256 id_,
        uint256 amount_,
        bytes memory data_
    ) external onlySOCKET {
        _mint(to_, id_, amount_, data_);
    }

    function burn(
        address from_,
        uint256 id_,
        uint256 amount_
    ) external onlySOCKET {
        _burn(from_, id_, amount_);
    }

    function uri(uint256 id_) public view override returns (string memory) {
        return string(abi.encodePacked(baseURI, toString(id_))); // Changed from _uri(id_)
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    // Add a function to set the base URI (optional)
    function setBaseURI(string memory baseURI_) external onlySOCKET {
        baseURI = baseURI_;
    }

    // Helper function to convert uint256 to string
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
