// src/airdropScanner.js
import Web3 from "web3";
import { config } from "./config.js";

const web3 = new Web3(new Web3.providers.HttpProvider(config.providerUrl));

// Only initialize account if private key is present
let account = null;
if (config.privateKey && config.privateKey.startsWith("0x")) {
  account = web3.eth.accounts.wallet.add(config.privateKey);
} else {
  account = { address: "0xFAKE_ADDRESS_FOR_SIMULATION" }; // simulation fallback
}

export const getWalletAddress = () => account.address;
