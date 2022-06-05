// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract VRFD20 is VRFConsumerBase {
    bytes32 internal keyHash;
    uint256 internal fee;

    uint256 public nftAmount;
    mapping (address => address) public nfts;
    address[] public arr;
    uint256[] public ids;
    uint256 timestamp;
    
    uint256 public randomResult;

    event NumberGenerated(uint256 indexed requestId);
    event nftUpdated(address newNft, uint256 indexed id);
    

    /**
     * Constructor inherits VRFConsumerBase
     * 
     * Network: Polygon (Matic) Mumbai Testnet
     * Chainlink VRF Coordinator address: 0x8C7382F9D8f56b33781fE506E897a4F1e2d17255
     * LINK token address:                0x326C977E6efc84E512bB9C30f76E30c160eD06FB
     * Key Hash: 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4
     */
    constructor(address vrfCoordinator, address linkToken) 
        VRFConsumerBase(
            vrfCoordinator, // VRF Coordinator
            linkToken  // LINK Token
        ) public
    {
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.1 * 10 ** 18; // 0.0001 LINK
        nftAmount = 0;
        timestamp = block.timestamp;
    }

    function getBalance() public returns (uint output) {
        return LINK.balanceOf(address(this));
    }

    function addNft(address newAddress, address nftAddress, uint256 id) public {
        nftAmount++;
        arr.push(nftAddress);
        ids.push(id);
        nfts[nftAddress] = newAddress;
        emit nftUpdated(nftAddress, id);
    }

    function updateNft() public returns(address) {
        if (timestamp + 15 minutes < block.timestamp) {
            address output = arr[randomResult];
            timestamp = block.timestamp;
            getRandomNumber();
            return output;
        }
    }

    /** 
     * Requests randomness 
     */
    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = (randomness % nftAmount);
        emit NumberGenerated(randomness);
    }
    
    function getId(uint256 index) public view returns(uint256 output){
        return ids[index];
    }
}