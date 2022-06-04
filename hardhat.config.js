require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: process.env.DATAHUB_API,
      accounts: [process.env.PRIVATE_KEY],
      gas: 9000000,
    },
  },
  etherscan: {
   apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
      compilers: [
         {
            version: '0.8.0',
         },
         {
            version: '0.6.5',
         },
         {
            version: '0.6.0',
         },
         {
           version: '0.8.7',
         }
      ],
   },
};
