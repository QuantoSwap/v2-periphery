require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-truffle5');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {version: '0.6.6', settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }}
    ]

  },
  networks: {
    eth: {
      url: 'https://rpc.mevblocker.io',
      accounts: [],
      blockGasLimit: '1000000000',
      allowUnlimitedContractSize: true
    }
  },
  etherscan: {
    apiKey: ''
  }
};