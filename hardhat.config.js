require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
const path = require('path');
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: process.env.DATAHUB_API,
      accounts: [process.env.PRIVATE_KEY]
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
