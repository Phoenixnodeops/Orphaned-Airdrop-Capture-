// src/config.js

module.exports = {
  // Infura Mainnet RPC (do not share publicly)
  INFURA_URL: "https://mainnet.infura.io/v3/d097e26906bb4d489da56616c97a8ba0",

  // Optional: private key for actual claim execution (not required for simulation)
  PRIVATE_KEY: "",

  // Airdrop contract address (example: Velodrome)
  AIRDROP_CONTRACT_ADDRESS: "0x27C71F2cE7809Fea949FF8dC65b45706c61f3040",

  // ABI for airdrop interaction
  AIRDROP_ABI: [
    "function isClaimed(address) view returns (bool)",
    "function claim(address)"
  ]
};
