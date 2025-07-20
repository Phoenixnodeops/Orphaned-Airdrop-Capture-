const ethers = require("ethers");
const axios = require("axios");
require("dotenv").config();

const RPC = process.env.RPC_URL;
const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallets = require("../data/snapshotWallets.json");

async function checkAirdropEligibility(address) {
  try {
    const response = await axios.get(`https://airdrop-api.snapshot.org/check?wallet=${address}`);
    return response.data;
  } catch (error) {
    return { address, eligible: false, error: error.message };
  }
}

async function scanWallets() {
  console.log("🔍 Scanning for unclaimed airdrops...");
  const results = [];

  for (const wallet of wallets) {
    const result = await checkAirdropEligibility(wallet);
    results.push(result);
  }

  console.log("✅ Scan complete:");
  console.table(results);
}

scanWallets();
