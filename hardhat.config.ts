require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  // hardhat-zksync-solc
  // The compiler configuration for 'zk' artifacts.
  zksolc: {
    version: "latest",
    compilerSource: "binary",
    settings: {
      compilerPath: "./zksolc-linux-amd64-musl-v1.1.3",
    },
  },

  // hardhat-zksync-deploy
  // Run `deploy-zksync` task to deploy 'zk' artifacts into following network.
  // Note that it will use `artifacts` and `cache` instead of the one with -zk suffix!
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    ethNetwork: "goerli",
  },

  // The compiler configuration for 'normal' artifacts.
  solidity: {
    version: "0.5.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999
      }
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  // tests
  defaultNetwork: 'hardhat',
  networks: {
    // Run compile task with this network to generate 'normal' artifacts/cache.
    // For example `yarn hardhat compile --network hardhat`
    hardhat: {
      chainId: 280,
    },

    // Run compile task with this network to generate 'zk' artifacts/cache (with -zk suffix).
    // For example `yarn hardhat compile --network zksync`
    zksync: {
      zksync: true,
      url: 'https://zksync2-testnet.zksync.dev',
      chainId: 280
    },
  },
  mocha: {
    timeout: 40000
  },
};