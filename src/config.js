// src/config.js

export const config = {
  providerUrl: "https://mainnet.infura.io/v3/d097e26906bb4d489da56616c97a8ba0",
  privateKey: process.env.PRIVATE_KEY || '', // Will be injected at runtime, NOT stored
  scanLimit: 5000,
  claimGasLimit: 200000,
};
