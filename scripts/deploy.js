const { ethers } = require("hardhat");

// Deploy function
async function deploy() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
 
    //Deploy WETH
    const vrf = await ethers.getContractFactory('VRFD20');
    const vrfInstance = await vrf.deploy("0x8C7382F9D8f56b33781fE506E897a4F1e2d17255", "0x326C977E6efc84E512bB9C30f76E30c160eD06FB");
    await vrfInstance.deployed();
 
    console.log(`VRF deployed to : ${vrfInstance.address}`);
 }
 
 deploy()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });
 