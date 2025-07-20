// src/config.js

module.exports = {
  INFURA_URL: "https://mainnet.infura.io/v3/d097e26906bb4d489da56616c97a8ba0",
  PRIVATE_KEY: "", // Leave blank for now unless executing live
  AIRDROP_CONTRACT_ADDRESS: "0x27C71F2cE7809Fea949FF8dC65b45706c61f3040",
  AIRDROP_ABI: [
    "function isClaimed(address) view returns (bool)",
    "function claim(address)"
  ]
};
